import { Book } from "./book.js"
import { Library } from "./library.js"




const book1 = new Book('How to Win Friends and Influence People', 'Dale Carnegie', 1936);
const book2 = new Book('Steve Jobs', 'Walter Isaacson', 2011);


const library = new Library('MKIC');

library.addBook(book1)
library.addBook(book2)


const allLibraryBooks = library.getBooks();

console.log(allLibraryBooks);