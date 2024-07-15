import axios from "axios";

const BASE_URL = "http://localhost:8080/todo";

const dummyFiles = [
  {
    id: 0,
    text: "Never gonna give you up",
  },
  {
    id: 1,
    text: "Never gonna let you down",
  },
  {
    id: 2,
    text: "Never gonna run around and hurt you",
  },
  {
    id: 3,
    text: "Never gonna make you cry",
  },
  {
    id: 4,
    text: "Never gonna tell a lie and hurt you",
  },
];

function listMembers() {
  return axios.get(BASE_URL);
}

function saveMember(todo: any) {
  return axios.post(BASE_URL, todo);
}

export { listMembers, dummyFiles, saveMember };
