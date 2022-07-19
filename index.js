/* eslint-disable import/extensions */
import ui from './modules/ui.js';
import store from './modules/store.js';
import { DateTime } from './modules/luxon.js';

class Books {
  constructor(Title, Author) {
    this.title = Title;
    this.author = Author;
  }
}

// add book//
document.addEventListener('DOMContentLoaded', ui.display());
document.querySelector('#form').addEventListener('submit', () => {
  const Title = document.querySelector('#title').value;
  const Author = document.querySelector('#author').value;
  const book = new Books(Title, Author);
  store.setBook(book);
  ui.clearFields();
});
// delete Book//
const remove = document.querySelector('.bookList');
remove.addEventListener('click', (e) => {
  store.deleteBooks(e.target.previousElementSibling.firstElementChild.textContent);
  window.reload();
});

const List = document.querySelector('.List');
const Add = document.querySelector('.Add');
const Contact = document.querySelector('.Contact');

Add.addEventListener('click', () => {
  document.querySelector('.book-list-container').style.display = 'none';
  document.querySelector('.input').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
});

List.addEventListener('click', () => {
  document.querySelector('.book-list-container').style.display = 'block';
  document.querySelector('.input').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  // eslint-disable-next-line
  location.reload();
});

Contact.addEventListener('click', () => {
  document.querySelector('.book-list-container').style.display = 'none';
  document.querySelector('.input').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
});

const dt = DateTime.now();
const newDate = document.querySelector('.time');
newDate.innerHTML = `${dt.toLocaleString(DateTime.DATETIME_MED)}`;
