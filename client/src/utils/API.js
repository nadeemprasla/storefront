import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/auth");
  },
//   getBook: function(id) {
//     return axios.get("/api/users/" + id);
//   },
//   deleteBook: function(id) {
//     return axios.delete("/api/users/" + id);
//   },
  saveUser: function(body, config) {
    return axios.post('/api/users/register', body, config);
  },
  loginUser: function(userData){
      return axios.post("/api/users/login", userData    )
  }
};
