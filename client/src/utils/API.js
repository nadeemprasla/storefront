import axios from "axios";

export default {
  getUsers: function(body) {
    return axios.post("/api/auth", body);
  },
  saveUser: function(body, config) {
    return axios.post("/api/users/register", body, config);
  },
  loginUser: function(userData) {
    return axios.post("/api/auth/login", userData);
  },
  getDaily: function(data) {
    return axios.post("/api/item", data);
  },
  postItem: function(data) {
    return axios.post("/api/item/addItem", data);
  }
};
