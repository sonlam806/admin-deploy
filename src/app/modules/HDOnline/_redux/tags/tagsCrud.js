import axios from "axios";

export const TAG_URL = "api/projects/tags"; // CREATE =>  POST: add a new post to the server
export function createTag(tag) {
  return axios.post(TAG_URL, {
    tag
  });
}

// READ
export function getAllTags() {
  return axios.get(TAG_URL);
}

export function getTagById(tagId) {
  return axios.get(`${TAG_URL}/${tagId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findTags(queryParams) {
  return axios.post(`${TAG_URL}/find`, {
    queryParams
  });
}

// UPDATE => PUT: update the procuct on the server
export function updateTag(tag) {
  return axios.put(`${TAG_URL}/${tag.id}`, {
    tag
  });
}

// UPDATE Status
export function updateStatusForTags(ids, status) {
  return axios.post(`${TAG_URL}/updateStatusForTags`, {
    ids,
    status
  });
}

// DELETE => delete the post from the server
export function deleteTag(tagId) {
  return axios.delete(`${TAG_URL}/${tagId}`);
}

// DELETE Products by ids
export function deleteTags(ids) {
  return axios.post(`${TAG_URL}/deleteTags`, {
    ids
  });
}