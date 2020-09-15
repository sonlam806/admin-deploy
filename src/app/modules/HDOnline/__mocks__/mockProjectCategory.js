import projectsCategoryTableMock from "./projectsCategoryTableMock";
import MockUtils from "./mock.utils";

const ROOT_URL = 'api/projects/category'

export default function mockProducts(mock) {
  mock.onPost(ROOT_URL).reply(({
    data
  }) => {
    const {
      category
    } = JSON.parse(data);
    const {
      categoryName = "",
        slug = "",
        categoryParent = ""
    } = category;

    const id = generateProductId();
    const newCategory = {
      id,
      categoryName,
      slug,
      categoryParent
    };
    projectsCategoryTableMock.push(newCategory);
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
    const filteredProducts = mockUtils.baseFilter(projectsCategoryTableMock, queryParams);
    console.log(filteredProducts)
    return [200, filteredProducts];
  });

  mock.onPost(`${ROOT_URL}/deleteCategories`).reply(config => {
    const {
      ids
    } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = projectsCategoryTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        projectsCategoryTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost(`${ROOT_URL}/updateStatusForCategories`).reply(config => {
    const {
      ids,
      status
    } = JSON.parse(config.data);
    projectsCategoryTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });


  mock.onGet(/api\/projects\/category\/\d+/).reply(config => {
    const id = config.url.match(/api\/projects\/category\/(\d+)/)[1];
    const product = projectsCategoryTableMock.find(el => el.id === +id);
    if (!product) {
      return [400];
    }

    return [200, product];
  });

  mock.onPut(/api\/projects\/category\/\d+/).reply(config => {
    const id = config.url.match(/api\/projects\/category\/(\d+)/)[1];
    const {
      product
    } = JSON.parse(config.data);
    const index = projectsCategoryTableMock.findIndex(el => el.id === +id);
    if (index === 0) {
      projectsCategoryTableMock[0] = {
        ...product
      };
      return [200];
    }

    if (!index) {
      return [400];
    }

    projectsCategoryTableMock[index] = {
      ...product
    };
    return [200];
  });

  mock.onDelete(/api\/projects\/category\/\d+/).reply(config => {
    const id = config.url.match(/api\/projects\/category\/(\d+)/)[1];
    const index = projectsCategoryTableMock.findIndex(el => el.id === +id);
    projectsCategoryTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateProductId() {
  const ids = projectsCategoryTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}