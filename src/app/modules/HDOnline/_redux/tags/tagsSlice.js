import {
  createSlice
} from "@reduxjs/toolkit";

const initialTagsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  tagForEdit: undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState: initialTagsState,
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
    tagFetched: (state, action) => {
      state.actionsLoading = false;
      state.tagForEdit = action.payload.tagForEdit;
      state.error = null;
    },
    // findProducts
    tagsFetched: (state, action) => {
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
    tagCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.tag);
    },
    // updateProduct
    tagUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.tag.id) {
          return action.payload.tag;
        }
        return entity;
      });
    },
    // deleteProduct
    tagDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteProducts
    tagsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.id)
      );
    },
    // productsUpdateState
    tagsStatusUpdated: (state, action) => {
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