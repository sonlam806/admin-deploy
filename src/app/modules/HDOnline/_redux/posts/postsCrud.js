import axios from "axios";

export const POST_URL = "api/posts"; // CREATE =>  POST: add a new post to the server
export function createPost(post) {
  return axios.post(POST_URL, {
    post
  });
}

// READ
export function getAllPosts() {
  return axios.get(POST_URL);
}

export function getPostById(postId) {
  return axios.get(`${POST_URL}/${postId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findPosts(queryParams) {
  return axios.post(`${POST_URL}/find`, {
    queryParams
  });
}

// UPDATE => PUT: update the procuct on the server
export function updatePost(post) {
  return axios.put(`${POST_URL}/${post.id}`, {
    post
  });
}

// UPDATE Status
export function updateStatusForPosts(ids, status) {
  return axios.post(`${POST_URL}/updateStatusForPosts`, {
    ids,
    status
  });
}

// DELETE => delete the post from the server
export function deletePost(postId) {
  console.log('postId', postId)
  return axios.delete(`${POST_URL}/${postId}`);
}

// DELETE Posts by ids
export function deletePosts(ids) {
  return axios.post(`${POST_URL}/deletePosts`, {
    ids
  });
}