// Author.js
export default class Author {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        book.author = this.name;
        this.books.push(book);
    }

    listBooks(){
        console.log(`Books by ${this.name}:`);
        this.books.forEach(book => book.displayBook());
    }
}