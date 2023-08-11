
export class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    name;
    books;

    addBook(book){
        this.books.push(book)
    }

    getBooks(){
        return this.books;
    }

    getLibraryName(){
        return this.name;
    }

}

