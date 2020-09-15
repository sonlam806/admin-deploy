import * as requestFromServer from "./tagsCrud";
import {
  tagsSlice,
  callTypes
} from "./tagsSlice";

const {
  actions
} = tagsSlice;

export const fetchTags = queryParams => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.list
  }));
  return requestFromServer
    .findTags(queryParams)
    .then(response => {
      const {
        totalCount,
        entities
      } = response.data;
      dispatch(actions.tagsFetched({
        totalCount,
        entities
      }));
    })
    .catch(error => {
      error.clientMessage = "Can't find products";
      dispatch(actions.catchError({
        error,
        callType: callTypes.list
      }));
    });
};

export const fetchTag = id => dispatch => {
  if (!id) {
    return dispatch(actions.tagFetched({
      tagForEdit: undefined
    }));
  }

  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .getTagById(id)
    .then(response => {
      const tag = response.data;
      dispatch(actions.tagFetched({
        tagForEdit: tag
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

export const deleteTag = id => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .deleteTag(id)
    .then(response => {
      dispatch(actions.tagDeleted({
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

export const createTag = tagForCreation => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .createTag(tagForCreation)
    .then(response => {
      const {
        tag
      } = response.data;
      dispatch(actions.tagCreated({
        tag
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

export const updateTag = tag => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .updateTag(tag)
    .then(() => {
      dispatch(actions.tagUpdated({
        tag
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

export const updateTagsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .updateStatusForTags(ids, status)
    .then(() => {
      dispatch(actions.tagsStatusUpdated({
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

export const deleteTags = ids => dispatch => {
  dispatch(actions.startCall({
    callType: callTypes.action
  }));
  return requestFromServer
    .deleteTags(ids)
    .then(() => {
      dispatch(actions.tagsDeleted({
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