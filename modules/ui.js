// eslint-disable-next-line
import store from './store.js'; 
export default class ui {
    static display = () => {
      const bookList = document.querySelector('.bookList');
      bookList.innerHTML = ``
      const booksCollection = store.getBooksCollection();
      booksCollection.forEach((book) => {
        const bookFrame = document.createElement('div');
        bookFrame.classList.add('bookFrame');
        bookFrame.innerHTML = `
      <div class = "bookContent">
      <p><b>${book.title}</b></p>
      <p>by<span></span><b>${book.author}</b></p>
      </div>
      <button class = "remove">Remove</button>
      `;
        bookList.appendChild(bookFrame);
      });
    }

  static clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}