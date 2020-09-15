import technologyTableMock from './technologyTableMock'
import MockUtils from "./mock.utils";

export default function mockTechnology(mock) {
  mock.onPost("api/technology").reply(({
    data
  }) => {
    const {
      post
    } = JSON.parse(data);
    const {
      profileImage = "https://robohash.org/dignissimosdebitisdolor.bmp?size=50x50&set=set1",
        techName = "Scrophulariaceae",
        slug = "/yhwxmlif"
    } = post;

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
    console.log('ids', ids)
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
  // Get technology post for edit 
  mock.onGet(/api\/technology\/\d+/).reply(config => {
    const id = config.url.match(/api\/technology\/(\d+)/)[1];
    const post = technologyTableMock.find(el => el.id === +id);
    if (!post) {
      return [400];
    }

    return [200, post];
  });
  // Route for update techName, slug
  mock.onPut(/api\/technology\/\d+/).reply(config => {
    const id = config.url.match(/api\/technology\/(\d+)/)[1];
    const {
      post
    } = JSON.parse(config.data);
    const index = technologyTableMock.findIndex(el => el.id === +id);
    // Fix if index === 0 is not update
    if (index === 0) {
      technologyTableMock[0] = {
        ...post
      }
      return [200];
    }
    if (!index) {
      return [400];
    }

    technologyTableMock[index] = {
      ...post
    };
    return [200];
  });

  mock.onDelete(/api\/technology\/\d+/).reply(config => {
    const id = config.url.match(/api\/technology\/(\d+)/)[1];
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