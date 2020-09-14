import axios from "axios";

export const POST_URL = "api/technology"; // CREATE =>  POST: add a new post to the server
export function createProduct(post) {
  return axios.post(POST_URL, {
    post
  });
}

// READ
export function getAllProducts() {
  return axios.get(POST_URL);
}

export function getProductById(postId) {
  return axios.get(`${POST_URL}/${postId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findProducts(queryParams) {
  return axios.post(`${POST_URL}/find`, {
    queryParams
  });
}

// UPDATE => PUT: update the procuct on the server
export function updateProduct(post) {
  return axios.put(`${POST_URL}/${post.id}`, {
    post
  });
}

// UPDATE Status
export function updateStatusForProducts(ids, status) {
  return axios.post(`${POST_URL}/updateStatusForTechnology`, {
    ids,
    status
  });
}

// DELETE => delete the post from the server
export function deleteProduct(postId) {
  return axios.delete(`${POST_URL}/${postId}`);
}

// DELETE Products by ids
export function deleteProducts(ids) {
  return axios.post(`${POST_URL}/deleteTechnology`, {
    ids
  });
}