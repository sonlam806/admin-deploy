import axios from "axios";

export const CATEGORY_URL = "api/projects/category"; // CREATE =>  POST: add a new post to the server

export function createCategory(category) {
  return axios.post(CATEGORY_URL, {
    category
  });
}

// READ
export function getAllCategories() {
  return axios.get(CATEGORY_URL);
}

export function getCategoryById(categoryId) {
  return axios.get(`${CATEGORY_URL}/${categoryId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findCategories(queryParams) {
  return axios.post(`${CATEGORY_URL}/find`, {
    queryParams
  });
}

// UPDATE => PUT: update the procuct on the server
export function updateCategory(category) {
  return axios.put(`${CATEGORY_URL}/${category.id}`, {
    category
  });
}

// UPDATE Status
export function updateStatusForCategories(ids, status) {
  return axios.post(`${CATEGORY_URL}/updateStatusForCategories`, {
    ids,
    status
  });
}

// DELETE => delete the post from the server
export function deleteCategory(categoryId) {
  return axios.delete(`${CATEGORY_URL}/${categoryId}`);
}

// DELETE Products by ids
export function deleteCategories(ids) {
  return axios.post(`${CATEGORY_URL}/deleteCategories`, {
    ids
  });
}