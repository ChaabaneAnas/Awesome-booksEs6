/*eslint-disable */
import { ui } from './modules/ui.js';
import { store } from './modules/store.js';

class Books {
  constructor(Title, Author) {
    this.title = Title;
    this.author = Author;
  }
}

// add book//
document.addEventListener('DOMContentLoaded', ui.display());
document.querySelector('#form').addEventListener('submit', (e) => {
  const Title = document.querySelector('#title').value;
  const Author = document.querySelector('#author').value;
  const booksCollection = store.getBooksCollection();
  const book = new Books(Title, Author);
  store.setBook(book);
});
// delete Book//
const remove = document.querySelector('.bookList');
remove.addEventListener('click', (e) => {
  store.deleteBooks(e.target.previousElementSibling.firstElementChild);
  location.reload();
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
  location.reload();
});

Contact.addEventListener('click', () => {
  document.querySelector('.book-list-container').style.display = 'none';
  document.querySelector('.input').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
});
const displaytime = document.querySelector('.time');
const shownDate = [Date().split(' ').splice(1, 4).join(' ')];
displaytime.append(shownDate);
