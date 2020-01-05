import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
//   getBook: function(id) {
//     return axios.get("/api/users/" + id);
//   },
//   deleteBook: function(id) {
//     return axios.delete("/api/users/" + id);
//   },
  saveUser: function(bookData) {
    return axios.post("/api/users", bookData);
  }
};
