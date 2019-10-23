import Api from "./Api.js";

export default {
  get(query) {
    return Api().get("books?" + "page=" + query.page);
  },
  post(bookinfo) {
    return Api().post("books", bookinfo);
  },
  index(bookId) {
    return Api().get("books", {
      params: bookId
    });
  },
  update(bookId, updateInfo) {
    return Api().patch(`books/${bookId}`, {
      isbn: bookId,
      title: updateInfo.title,
      description: updateInfo.description,
      author: updateInfo.author,
      publicationDate: updateInfo.publicationDate,
      reviews: [
        {
          body: updateInfo.reviews.body,
          rating: updateInfo.reviews.rating,
          author: updateInfo.reviews.author,
          publicationDate: updateInfo.reviews.publicationDate
        }
      ]
    });
  }
};
