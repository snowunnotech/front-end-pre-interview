interface BookList {
  'order[id]'?: string;
  'order[title]'?: string;
  'order[author]'?: string;
  'order[isbn]'?: string;
  title?: string;
  author?: string;
  page: number;
}

interface CreateBook {
  title?: string;
  author?: string;
  description?: string;
}

export { BookList, CreateBook };
