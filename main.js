import Book from './Book.js';
import Author from './Author.js';

// Skapa en författare
const author = new Author('John Doe');

// Lägg till böcker till författaren
const book1 = new Book('Book 1', '');
const book2 = new Book('Book 2', '');

author.addBook(book1);
author.addBook(book2);

// Skriv ut författarens böcker och information om böckerna, samt författarens namn
console.log(`Author: ${author.name}`);
author.listBooks();