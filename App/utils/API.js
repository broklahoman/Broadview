import axios from "axios";

const API = {
  // Retrieves all quotes from the db
  getSneaker: function() {
    return axios.get("/api/sneakers");
  },
  // Saves a new quote to the db
  saveSneaker: function(text) {
    return axios.post("/api/sneakers", { text });
  },
  // Deletes a quote from the db
  deleteSneaker: function(id) {
    return axios.delete(`/api/sneakers/${id}`);
  },
};

export default API;