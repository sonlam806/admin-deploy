import {
  createSlice
} from "@reduxjs/toolkit";

const initialPostsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  postForEdit: undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    // getProductById
    postFetched: (state, action) => {
      state.actionsLoading = false;
      state.postForEdit = action.payload.postForEdit;
      state.error = null;
    },
    // findProducts
    postsFetched: (state, action) => {
      const {
        totalCount,
        entities
      } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createProduct
    postCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.post);
    },
    // updateProduct
    postUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.post.id) {
          return action.payload.post;
        }
        return entity;
      });
    },
    // deleteProduct
    postDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteProducts
    postsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.id)
      );
    },
    // productsUpdateState
    postsStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const {
        ids,
        status
      } = action.payload;
      state.entities = state.entities.map(entity => {
        if (ids.findIndex(id => id === entity.id) > -1) {
          entity.status = status;
        }
        return entity;
      });
    }
  }
});