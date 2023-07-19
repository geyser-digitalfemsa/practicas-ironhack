type Person = {
    name: string,
    age: number,
    email: string,
}

const person: Person = {
    name: 'Geyser',
    age: 33,
    email: 'geyser.gallardo@digitalfemsa.com'
}

interface Book {
    title: string;
    author: string;
    pages: number;
}

let books: Book[] = [{
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    pages: 600,
}, {
    title: 'El señor de los anillos',
    author: 'J. R. R. Tolkien',
    pages: 400,
}, {
    title: 'Un mundo feliz',
    author: 'Aldous Huxley',
    pages: 500,
}];

function displayBookInfo (book: Book) {
    console.log('title: ', book.title);
    console.log('author: ', book.author);
    console.log('pages: ', book.pages);
}

for (let index = 0; index < books.length; index++) {
    const book = books[index];
    displayBookInfo(book);
}