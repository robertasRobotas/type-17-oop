
export class Book {
    constructor(title, author, releaseDate){
        this.title = title;
        this.author = author;
        this.releaseDate = releaseDate;
    }

    title;
    author;
    releaseDate;
    isRead = false;


    open(){
        console.log('Open a book');
    }

    close(){
        console.log('Close a book');
    }

    setIsRead(){
        this.isRead = true;
    }

    getIsReadStatus(){
        return  this.isRead;
    }

}
