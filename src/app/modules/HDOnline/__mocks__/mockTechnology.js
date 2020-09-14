import technologyTableMock from './technologyTableMock'
import MockUtils from "./mock.utils";

export default function mockTechnology(mock) {
  mock.onPost("api/technology").reply(({
    data
  }) => {
    const {
      product
    } = JSON.parse(data);
    const {
      profileImage = "https://robohash.org/dignissimosdebitisdolor.bmp?size=50x50&set=set1",
        techName = "Scrophulariaceae",
        slug = "/yhwxmlif"
    } = product;

    const id = generateProductId();
    const newPost = {
      id,
      profileImage,
      techName,
      slug
    };
    technologyTableMock.push(newPost);
    return [200, {
      post: newPost
    }];
  });

  mock.onPost("api/technology/find").reply(config => {
    const mockUtils = new MockUtils();
    const {
      queryParams
    } = JSON.parse(config.data);
    const filteredProducts = mockUtils.baseFilter(technologyTableMock, queryParams);
    return [200, filteredProducts];
  });

  mock.onPost("api/technology/deleteTechnology").reply(config => {
    const {
      ids
    } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = technologyTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        technologyTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/technology/updateStatusForTechnology").reply(config => {
    const {
      ids,
      status
    } = JSON.parse(config.data);
    technologyTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/posts\/\d+/).reply(config => {
    const id = config.url.match(/api\/products\/(\d+)/)[1];
    const post = technologyTableMock.find(el => el.id === +id);
    if (!post) {
      return [400];
    }

    return [200, post];
  });

  mock.onPut(/api\/posts\/\d+/).reply(config => {
    const id = config.url.match(/api\/posts\/(\d+)/)[1];
    const {
      product
    } = JSON.parse(config.data);
    const index = technologyTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    technologyTableMock[index] = {
      ...product
    };
    return [200];
  });

  mock.onDelete(/api\/posts\/\d+/).reply(config => {
    const id = config.url.match(/api\/posts\/(\d+)/)[1];
    const index = technologyTableMock.findIndex(el => el.id === +id);
    technologyTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateProductId() {
  const ids = technologyTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}