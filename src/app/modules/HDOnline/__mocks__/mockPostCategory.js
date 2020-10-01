import postsCategoryTableMock from './postsCategoryTableMock';
import MockUtils from "./mock.utils";

const ROOT_URL = 'api/posts/category'

export default function mockProducts(mock) {
  mock.onPost(ROOT_URL).reply(({
    data
  }) => {
    const {
      category
    } = JSON.parse(data);
    console.log(category)
    const {
      categoryName = "",
        slug = "",
        categoryParent = "finance"
    } = category;

    const id = generateProductId();
    const newCategory = {
      id,
      categoryName,
      slug,
      categoryParent
    };
    postsCategoryTableMock.push(newCategory);
    return [200, {
      category: newCategory
    }];
  });

  mock.onPost(`${ROOT_URL}/find`).reply(config => {
    console.log('run find', config)

    const mockUtils = new MockUtils();
    const {
      queryParams
    } = JSON.parse(config.data);
    const filteredProducts = mockUtils.baseFilter(postsCategoryTableMock, queryParams);
    console.log(filteredProducts)
    return [200, filteredProducts];
  });

  mock.onPost(`${ROOT_URL}/deleteCategories`).reply(config => {
    const {
      ids
    } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = postsCategoryTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        postsCategoryTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost(`${ROOT_URL}/updateStatusForCategories`).reply(config => {
    const {
      ids,
      status
    } = JSON.parse(config.data);
    postsCategoryTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });


  mock.onGet(/api\/posts\/category\/\d+/).reply(config => {
    const id = config.url.match(/api\/posts\/category\/(\d+)/)[1];
    const product = postsCategoryTableMock.find(el => el.id === +id);
    if (!product) {
      return [400];
    }

    return [200, product];
  });

  mock.onPut(/api\/posts\/category\/\d+/).reply(config => {
    const id = config.url.match(/api\/posts\/category\/(\d+)/)[1];
    const {
      product
    } = JSON.parse(config.data);
    const index = postsCategoryTableMock.findIndex(el => el.id === +id);
    if (index === 0) {
      postsCategoryTableMock[0] = {
        ...product
      };
      return [200];
    }

    if (!index) {
      return [400];
    }

    postsCategoryTableMock[index] = {
      ...product
    };
    return [200];
  });

  mock.onDelete(/api\/posts\/category\/\d+/).reply(config => {
    const id = config.url.match(/api\/posts\/category\/(\d+)/)[1];
    const index = postsCategoryTableMock.findIndex(el => el.id === +id);
    postsCategoryTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateProductId() {
  const ids = postsCategoryTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}