import * as requestFromServer from "./postsCrud";
import {
  postsSlice,
  callTypes
} from "./postsSlice";

const {
  actions
} = postsSlice;

export const fetchPosts = queryParams => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.list
  }));
  return requestFromServer
    .findPosts(queryParams)
    .then(response => {
      const {
        totalCount,
        entities
      } = response.data;
      dispatch(actions.postsFetched({
        totalCount,
        entities
      }));
    })
    .catch(error => {
      error.clientMessage = "Can't find posts";
      dispatch(actions.catchError({
        error,
        callType: callTypes.list
      }));
    });
};

export const fetchPost = id => dispatch => {
  if (!id) {
    return dispatch(actions.postFetched({
      productForEdit: undefined
    }));
  }

  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .getPostById(id)
    .then(response => {
      const product = response.data;
      dispatch(actions.postFetched({
        productForEdit: product
      }));
    })
    .catch(error => {
      error.clientMessage = "Can't find product";
      dispatch(actions.catchError({
        error,
        callType: callTypes.action
      }));
    });
};

export const deletePost = id => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .deletePost(id)
    .then(response => {
      dispatch(actions.postDeleted({
        id
      }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete product";
      dispatch(actions.catchError({
        error,
        callType: callTypes.action
      }));
    });
};

export const createPost = postForCreation => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .createPost(postForCreation)
    .then(response => {
      const {
        product
      } = response.data;
      dispatch(actions.postCreated({
        product
      }));
    })
    .catch(error => {
      error.clientMessage = "Can't create product";
      dispatch(actions.catchError({
        error,
        callType: callTypes.action
      }));
    });
};

export const updatePost = post => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .updatePost(post)
    .then(() => {
      dispatch(actions.postUpdated({
        post
      }));
    })
    .catch(error => {
      error.clientMessage = "Can't update product";
      dispatch(actions.catchError({
        error,
        callType: callTypes.action
      }));
    });
};

export const updatePostsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .updateStatusForPosts(ids, status)
    .then(() => {
      dispatch(actions.postsStatusUpdated({
        ids,
        status
      }));
    })
    .catch(error => {
      error.clientMessage = "Can't update products status";
      dispatch(actions.catchError({
        error,
        callType: callTypes.action
      }));
    });
};

export const deletePosts = ids => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .deletePosts(ids)
    .then(() => {
      dispatch(actions.postsDeleted({
        ids
      }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete products";
      dispatch(actions.catchError({
        error,
        callType: callTypes.action
      }));
    });
};