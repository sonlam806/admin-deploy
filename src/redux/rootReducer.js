import {
  all
} from "redux-saga/effects";
import {
  combineReducers
} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {
  customersSlice
} from "../app/modules/ECommerce/_redux/customers/customersSlice";
import {
  productsSlice
} from "../app/modules/ECommerce/_redux/products/productsSlice";
import {
  remarksSlice
} from "../app/modules/ECommerce/_redux/remarks/remarksSlice";
import {
  specificationsSlice
} from "../app/modules/ECommerce/_redux/specifications/specificationsSlice";
import {
  postsSlice
} from '../app/modules/HDOnline/_redux/posts/postsSlice';
import {
  technologySlice
} from '../app/modules/HDOnline/_redux/technology/technologySlice';
import {
  tagsSlice
} from '../app/modules/HDOnline/_redux/tags/tagsSlice';
import {
  categorySlice
} from '../app/modules/HDOnline/_redux/projects-category/projectCategorySlice'
import {
  categorySlice as postCategorySlice
} from '../app/modules/HDOnline/_redux/posts-category/postCategorySlice'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  products: productsSlice.reducer,
  remarks: remarksSlice.reducer,
  specifications: specificationsSlice.reducer,
  posts: postsSlice.reducer,
  technology: technologySlice.reducer,
  tags: tagsSlice.reducer,
  categories: categorySlice.reducer,
  postCategories: postCategorySlice.reducer
});

export function* rootSaga() {
  yield all([auth.saga()]);
}