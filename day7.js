/* 

const book = {
    author: "James Clear",
    title: "Atomic Habbits",
    year: 2016,
    getBook: () => {
        // console.log(book.author);
        return book.author + " " + book.title;
    },
    update: (year) => {
        book.year = year;
    }
};

console.log(book);
console.log(book.author);
console.log(book.title);
console.log(book.getBook());
book.update(2012);

console.log(book);

 */

const library = {

    books: [
        {
            author: "Suman",
            title: "Hello sansar",
            year: 2016,
        },
        {
            author: "Anil",
            title: "Hii Mayalu",
            year: 2016,
        },
        {
            author: "Uttam",
            title: "Hii kataho",
            year: 2016,
        },
    ],
}

console.log(library);

const book = {
    author: "James Clear",
    title: "Atomic Habbits",
    year: 2016,
    getBook() {
        // console.log(book.author);
        // console.log(this.author);

        return this.author + "  " + this.title;
    }
};

console.log(book.getBook());

console.log("Objects iteration: ");
for (const key in book) {
    // console.log(book[key]);
    console.log(Object.keys());
    // console.log(Object.values);
}