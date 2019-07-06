import { State } from './state';

function setBookList(state: State, booksList: any) {
  const tmp = state;
  const AllBooksData = booksList['hydra:member'];
  AllBooksData.forEach((book: any) => {
    const DateParse = Date.parse(book.publicationDate);
    const date = new Date(DateParse);
    const Month = date.getMonth() + 1;
    const Day = date.getDate();
    const Year = date.getFullYear();
    const publicationDate = `${Year}-${Month}-${Day}`;
    /* eslint-disable no-param-reassign */
    book.publicationDate = publicationDate;
  });
  tmp.bookList = AllBooksData;
}

function setLoadBooksNumber(state: State) {
  const tmp = state;
  tmp.loadTimes = 1 + tmp.loadTimes;
  const loadBooksNumber: number = tmp.loadTimes * 8;
  tmp.loadBooksNumber = loadBooksNumber;
}

const mutations = {
  setBookList,
  setLoadBooksNumber,
};

export default mutations;
