import tagTableMock from './tagTableMock';
import MockUtils from './mock.utils';
const ROOT_URL = 'api/projects/tags';

export default function mockTags(mock) {
  mock.onPost(ROOT_URL).reply(({
    data
  }) => {
    const {
      tag
    } = JSON.parse(data);
    const {
      tagName = 'Castle in the Desert (Charlie Chan in Castle in the Desert)',
        slug = 'Y-Solowarm',
    } = tag;

    const id = generateProductId();
    const newTag = {
      id,
      tagName,
      slug,
    };

    tagTableMock.push(newTag);

    return [
      200,
      {
        tag: newTag,
      },
    ];
  });
  // `${ROOT_URL}/find`
  mock.onPost('api/projects/tags/find').reply((config) => {
    console.log('run config', config)
    const mockUtils = new MockUtils();
    const {
      queryParams
    } = JSON.parse(config.data);

    const filteredProducts = mockUtils.baseFilter(tagTableMock, queryParams);
    return [200, filteredProducts];
  });

  mock.onPost(`${ROOT_URL}/deleteTags`).reply((config) => {
    const {
      ids
    } = JSON.parse(config.data);
    ids.forEach((id) => {
      const index = tagTableMock.findIndex((el) => el.id === id);
      if (index > -1) {
        tagTableMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost(`${ROOT_URL}/updateStatusForTags`).reply((config) => {
    const {
      ids,
      status
    } = JSON.parse(config.data);
    tagTableMock.forEach((el) => {
      if (ids.findIndex((id) => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/projects\/tags\/\d+/).reply((config) => {
    console.log('config', config);
    const id = config.url.match(/api\/projects\/tags\/(\d+)/)[1];
    const post = tagTableMock.find((el) => el.id === +id);
    if (!post) {
      return [400];
    }

    return [200, post];
  });

  mock.onPut(/api\/projects\/tags\/\d+/).reply((config) => {
    console.log('config', config);
    const id = config.url.match(/api\/projects\/tags\/(\d+)/)[1];
    const {
      tag
    } = JSON.parse(config.data);
    const index = tagTableMock.findIndex((el) => el.id === +id);
    if (index === 0) {
      tagTableMock[0] = {
        ...tag,
      };
      return [200];
    }
    if (!index) {
      return [400];
    }

    tagTableMock[index] = {
      ...tag,
    };
    return [200];
  });

  mock.onDelete(/api\/projects\/tags\/\d+/).reply((config) => {
    console.log(config);
    const id = config.url.match(/api\/projects\/tags\/(\d+)/)[1];
    console.log(id);
    const index = tagTableMock.findIndex((el) => el.id === +id);
    tagTableMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generateProductId() {
  const ids = tagTableMock.map((el) => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}