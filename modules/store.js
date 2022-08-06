export default class Store {
  static getBooksCollection = () => {
    let booksCollection;
    if (localStorage.getItem('booksCollection') === null) {
      booksCollection = [];
    } else {
      booksCollection = JSON.parse(localStorage.getItem('booksCollection'));
    }
    return booksCollection;
  }

  static setBook = (book) => {
    const booksCollection = this.getBooksCollection();
    booksCollection.push(book);
    localStorage.setItem('booksCollection', JSON.stringify(booksCollection));
  }

  static deleteBooks = (el) => {
    const booksCollection = this.getBooksCollection();
    booksCollection.forEach((book, i) => {
      if (el === book.title) {
        booksCollection.splice(i, 1);
      }
    });
    localStorage.setItem('booksCollection', JSON.stringify(booksCollection));
  }
}