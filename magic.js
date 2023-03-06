let myLibrary = [];
let addBook = document.querySelector(".submit");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const inputForm = document.getElementById("book-form");
const index = 1;

addBook.addEventListener("click", function (event) {
  event.preventDefault();
  addBookToLibrary();
  inputForm.reset();
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

function addBookToLibrary() {
  let bookName = document.querySelector(".book").value;
  let bookAuthor = document.querySelector(".author").value;
  let bookPages = document.querySelector(".pages").value;
  let bookRead = document.querySelector(".read").checked;

  if (bookName != null || bookAuthor != null || bookPages != null) {
    myLibrary.push(new Book(bookName, bookAuthor, bookPages, bookRead));
  }

  // Now to update the the DOM now.
  //Inserting in the table
  let bookTable = document.getElementById("myTable");

  let row = bookTable.insertRow(index);

  //New Cell
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  cell1.innerHTML = bookName;
  cell2.innerHTML = bookAuthor;
  cell3.innerHTML = bookPages;
  cell4.innerHTML = bookRead;

  let removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "remove";
  removeBtn.innerHTML = "remove";
  removeBtn.onclick = function deleteThisRow() {
    bookTable.deleteRow(row.rowIndex);
  };
  cell5.appendChild(removeBtn);
}
