let myLibrary = [];
let addBook = document.querySelector("button");

addBook.addEventListener("click", addBookToLibrary);
function Book(book, author, pages, read) {
  //For making a new book
  this.book = book;
  this.author = author;
  this.pages = pages;
  read = false;
}

function addBookToLibrary() {}
