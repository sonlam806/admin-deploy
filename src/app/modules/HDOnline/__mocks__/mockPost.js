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
      title = "vel augue vestibulum ante ipsum primis in faucibus orci",
        image = "http://dummyimage.com/50x50.png/dddddd/000000",
        slug = "?sapien=in&a=quam&libero=fringilla&nam=rhoncus&dui=mauris&proin=enim&leo=leo&odio=rhoncus&porttitor=sed&id=vestibulum&consequat=sit&in=amet&consequat=cursus&ut=id&nulla=turpis&sed=integer&accumsan=aliquet&felis=massa&ut=id&at=lobortis&dolor=convallis&quis=tortor&odio=risus",
        status = false,
        categories = "F-Series Super Duty",
        tags = "Zaam-Dox",
        content = "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        createdAt = "2020-02-18T10:58:24Z"
    } = product;

    const id = generateProductId();
    const newPost = {
      id,
      title,
      image,
      slug,
      status,
      categories,
      tags,
      content,
      createdAt
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