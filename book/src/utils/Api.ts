import callApi from './Axios';
import { BookList, CreateBook } from './Api_type';

const ApiUrl:string = 'https://demo.api-platform.com';
// GET /books
const getBooksList = async (params: BookList) => {
  const BooksList = await callApi({
    method: 'GET',
    url: `${ApiUrl}/books`,
    timeout: 60000,
    params,
  });
  return BooksList;
};

// POST /books
const creatrBook = async (data: CreateBook) => {
  const Create = await callApi({
    method: 'POST',
    url: `${ApiUrl}/books`,
    timeout: 60000,
    data,
  });
  return Create;
};

// GET /books/{id}
const getBook = async (bookid: string) => {
  const GetBook = await callApi({
    method: 'GET',
    url: `${ApiUrl}/books/${bookid}`,
    timeout: 60000,
  });
  return GetBook;
};

// PATCH /books/{id}
const updateBook = async (bookid: string, data: CreateBook) => {
  const Update = await callApi({
    method: 'PATCH',
    url: `${ApiUrl}/books/${bookid}`,
    timeout: 60000,
    data,
    headers: {
      'Content-Type': 'application/merge-patch+json',
    },
  });
  return Update;
};
// DELETE/books/{id}
// GET/books/{id}/reviews

export {
  getBooksList,
  getBook,
  creatrBook,
  updateBook,
};
