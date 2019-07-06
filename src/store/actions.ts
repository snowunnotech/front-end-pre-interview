import axios from 'axios';

async function loadBooksList(context: any) {
  try {
    const response = await axios.get('https://demo.api-platform.com/books');
    const booksList = response.data;
    context.commit('setBookList', booksList);
  } catch (error) {
    const { status } = error;
  }
}

async function addNewBook(context: any, newBookData: any) {
  try {
    const response = await axios.post('https://demo.api-platform.com/books', newBookData);
  } catch (error) {
    const { status } = error;
  }
}

function loadMoreBooks(context: any, loadTimes: number) {
  context.commit('setLoadBooksNumber');
}

const actions = {
  loadBooksList,
  loadMoreBooks,
  addNewBook,
};

export default actions;
