interface BookDetail {
  '@context'?: string;
  '@id': string;
  '@type'?: string;
  isbn?: string;
  title?: string;
  author?: string;
  description?: string;
  publicationDate: Date;
  reviews?: object[];
}

interface bookForm {
  isbn?: string;
  title?: string;
  author?: string;
  description?: string;
  publicationDate: Date;
  reviews?: object[];
}

export default interface State {
  isLoading: boolean;
  bookDetail: BookDetail;
  bookForm: bookForm;
}
