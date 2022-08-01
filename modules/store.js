export default class Store {
  static getBooksCollection = () => {
    let BooksCollection;
    if (localStorage.getItem('BooksCollection') === null) {
      BooksCollection = [];
    } else {
      BooksCollection = JSON.parse(localStorage.getItems('Tasks'));
    }
    return BooksCollection;
  }

  static setBook = (book) => {
    const BooksCollection = this.getBooksCollection();
    BooksCollection.push(book);
    localStorage.setItem('BooksCollection', JSON.stringify(BooksCollection));
  }

  static deleteBooks = (el) => {
    const BooksCollection = this.getBooksCollection();
    BooksCollection.forEach((book, i) => {
      if (el === book.title) {
        BooksCollection.splice(i, 1);
      }
    });
    localStorage.setItem('BooksCollection', JSON.stringify(BooksCollection));
  }
}