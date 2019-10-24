import Api from "./Api.js";

export default {
  get(query) {
    return Api().get("books?" + "page=" + query.page);
  },
  post(bookinfo) {
    return Api().post("books", bookinfo);
  },
  index(bookId) {
    return Api().get(`books/${bookId}`);
  },
  update(bookId, updateInfo) {
    return Api().patch(`books/${bookId}`, updateInfo, {
      headers: {
        "Content-Type": "application/merge-patch+json"
      }
    });
  }
};
