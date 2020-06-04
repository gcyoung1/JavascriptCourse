function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "" : "not "}read`;
    }
}

function createBook(form){
    console.log("yo");
    body = document.querySelector('body');
    book = new Book(form.title.value, form.author.value, form.pages.value, form.read.value);
    addBookToLibrary(book);
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function render(myLibrary){
    body = document.querySelector('body');

}

let myLibrary = [];
form = document.querySelector('form');
submit=form.querySelector('button')
submit.addEventListener("click", ()=>{return createBook(this.form)});
