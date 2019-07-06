export interface State {
  bookList: string[];
  loadTimes: number;
  loadBooksNumber: number;
}

export const state: State = {
  bookList: [],
  loadTimes: 1,
  loadBooksNumber: 8,
};

export default state;
