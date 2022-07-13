/*eslint-disable */
export class store {
 static getBooksCollection = () => {
   let booksCollection;
   if (localStorage.getItem('booksCollection') === null) {
     booksCollection = [];
   } else booksCollection = JSON.parse(localStorage.getItem('booksCollection'));
   return booksCollection;
 }

  static setBook = (book) => {
    const booksCollection = store.getBooksCollection();
    booksCollection.push(book);
    localStorage.setItem('booksCollection', JSON.stringify(booksCollection));
  }

  static deleteBooks = (e) => {
    const booksCollection = store.getBooksCollection();
    booksCollection.splice(e, 1);
    localStorage.setItem('booksCollection', JSON.stringify(booksCollection));
  }
}
