// 9 (3p)
// Du ska skapa två klasser med ES6 syntax, Book och Author.
// Book ska ha följande egenskaper:
// title, author, rating
// och metoden 
// displayBook som visar information om boken
// Author ska ha följande egenskaper:
// name, books (en array med böcker som är tom från början)
// och metoden
// addBook som lägger till en bok till författarens lista
// listBooks som visar en lista på författarens böcker

class Book {
    constructor(title, author, rating){
        this.title = title;
        this.author = author;
        this.rating = rating;
    }

    displayBook(){
        console.log(`Title: ${this.title}, author: ${this.author}, rating: ${this.rating}`)
    }
}




class Author {
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

/* const book1 = new Book ("Natten", "", 4); // Author will be assigned later
const book2 = new Book ("Dagen", "", 3);  // Author will be assigned later

const author1 = new Author("David H.");
const author2 = new Author("Pelle G.");

author1.addBook(book1);
author2.addBook(book2);

book1.displayBook();  // Display book 1
book2.displayBook();  // Display book 2

author1.listBooks();  // List books by author1
author2.listBooks();  // List books by author2 */