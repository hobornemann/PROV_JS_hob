// Book.js
export default class Book {
    constructor(title, author, rating){
        this.title = title;
        this.author = author;
        this.rating = rating;
    }

    displayBook(){
        console.log(`Title: ${this.title}, author: ${this.author}, rating: ${this.rating}`);
    }
}