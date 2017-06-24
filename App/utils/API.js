import axios from "axios";

const API = {
  // Retrieves all quotes from the db
  getArticle: function() {
    return axios.get("/api/articles");
  },
  // Saves a new quote to the db
  saveArticle: function(text) {
    return axios.post("/api/articles", { text });
  },
  // Deletes a quote from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  },
  nytSearch: function (searchTerm, startYear, endYear) {
    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm;
    if (parseInt(startYear)) {
    queryURL = queryURL + "&begin_date=" + startYear + "0101";
    }

  // If the user provides a startYear -- the endYear will be included in the queryURL
  if (parseInt(endYear)) {
    queryURL = queryURL + "&end_date=" + endYear + "0101";
    }
    return axios.get(queryURLBase)
  }
};

export default API;