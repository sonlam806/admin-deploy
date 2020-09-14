import postTableMock from "./postTableMock";
import MockUtils from "./mock.utils";

export default function mockPost(mock) {
  mock.onPost("api/posts").reply(({
    data
  }) => {
    const {
      product
    } = JSON.parse(data);
    const {
      profileImage = "https://picsum.photos/50",
        postName = "Castle in the Desert (Charlie Chan in Castle in the Desert)",
        slug = "Y-Solowarm",
        language = "Catalan",
        createDate = "03/03/2020",
        owner = "Darbee Giggie",
        species = "Business"
    } = product;

    const id = generateProductId();
    const newPost = {
      id,
      profileImage,
      postName,
      slug,
      language,
      createDate,
      owner,
      species
    };
    postTableMock.push(newPost);
    return [200, {
      post: newPost
    }];
  });

  mock.onPost("api/posts/find").reply(config => {
    const mockUtils = new MockUtils();
    const {
      queryParams
    } = JSON.parse(config.data);
    const filteredProducts = mockUtils.baseFilter(postTableMock, queryParams);
    return [200, filteredProducts];
  });

  mock.onPost("api/posts/deletePosts").reply(config => {
    const {
      ids
    } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = postTableMock.findIndex(el => el.id === id);
      if (index > -1) {
        postTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/posts/updateStatusForPosts").reply(config => {
    const {
      ids,
      status
    } = JSON.parse(config.data);
    postTableMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/posts\/\d+/).reply(config => {
    const id = config.url.match(/api\/products\/(\d+)/)[1];
    const post = postTableMock.find(el => el.id === +id);
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
    const index = postTableMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    postTableMock[index] = {
      ...product
    };
    return [200];
  });

  mock.onDelete(/api\/posts\/\d+/).reply(config => {
    const id = config.url.match(/api\/posts\/(\d+)/)[1];
    const index = postTableMock.findIndex(el => el.id === +id);
    postTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateProductId() {
  const ids = postTableMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}