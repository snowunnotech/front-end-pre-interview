import createAxios from '../utils/axiosEnhancer';

const axios = createAxios({
  baseURL: 'https://demo.api-platform.com/books'
});

export const getBooks = (options = {
  page: 1,
  author: null,
  title: null
}) => axios.$get('/', {
  params: {
    page: options.page,
    author: options.author,
    title: options.title
  }
});

export const addBook = data => axios.$post('', { ...data });
export const getBookById = id => axios.$get(`/${id}`);
export const updateBookById = ({ id, data }) => axios.$put(`/${id}`, { data });
export const deleteBookById = id => axios.$delete(`/${id}`);
