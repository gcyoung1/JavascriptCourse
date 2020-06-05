function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    //this.info = function(){
    //    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "" : "not "}read`;
    //}
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
    table = document.querySelector("table");
    table.deleteTHead();
    let thead = table.createTHead();
    let row = thead.insertRow()
    let cell = row.insertCell();
    let text = document.createTextNode("Title");
    cell.appendChild(text);
    cell = row.insertCell();
    text = document.createTextNode("Author");
    cell.appendChild(text);
    cell = row.insertCell();
    text = document.createTextNode("Pages");
    cell.appendChild(text);
    cell = row.insertCell();
    text = document.createTextNode("Read?");
    cell.appendChild(text);

    myLibrary.forEach(book=>{
        row = thead.insertRow();
        for(key in book){
            cell = row.insertCell();
            text = document.createTextNode(book[key]);
            cell.appendChild(text);
        }
        cell = row.insertCell();
        remove = document.createElement('button');
    })
    form = document.querySelector('form');
    form.style.display = "None";
    return false;

}

function showForm(){
    form = document.querySelector('form');
    form.style.display = "Block";
}

let myLibrary = [];
form = document.querySelector('form');
form.style.display = "None";
newBook = document.querySelector("#newBook");
newBook.addEventListener("click", ()=>{showForm()});
submit=form.querySelector('button');
submit.addEventListener("click", ()=>{createBook(this.form); return render(myLibrary);});
