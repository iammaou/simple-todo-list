import axios from "axios";

const BASE_URL = "http://localhost:8080/todo";

function listMembers() {
  return axios.get(BASE_URL);
}

function saveMember(todo: any) {
  return axios.post(BASE_URL, todo);
}

function getMember(id: String) {
  return axios.get(`${BASE_URL}/${id.replace(":", "")}`);
}

function updateMember(id: String, todo: any) {
  return axios.put(`${BASE_URL}/${id.replace(":", "")}`, todo);
}

function deleteMember(id: String) {
  return axios.delete(`${BASE_URL}/${id.replace(":", "")}`);
}

export { listMembers, saveMember, getMember, updateMember, deleteMember };
