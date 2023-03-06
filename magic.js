let myLibrary = [];
let addBook = document.querySelector(".submit");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

addBook.addEventListener("click", function (event) {
  event.preventDefault();
  addBookToLibrary();
});

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);

    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");

    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function Book(book, author, pages, read) {
  //For making a new book
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let water;
function addBookToLibrary() {
  let bookName = document.querySelector(".book").value;
  let bookAuthor = document.querySelector(".author").value;
  let bookPages = document.querySelector(".pages").value;
  let bookRead = document.querySelector(".read").checked;

  if (bookName != null || bookAuthor != null || bookPages != null) {
    myLibrary.push(new Book(bookName, bookAuthor, bookPages, bookRead));
  }
}

// Now to update the the DOM now.
