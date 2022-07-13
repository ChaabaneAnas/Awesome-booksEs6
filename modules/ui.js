/*eslint-disable */
import { store } from './store.js';

export class ui {
    static display = () => {
      const booksCollection = store.getBooksCollection();
      booksCollection.forEach((book) => {
        const bookList = document.querySelector('.bookList');
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
  static removeBook
}