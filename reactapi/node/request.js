async function bookTitles() {
    let response = await fetch("http://localhost:8877/api/books");
    return await response.text();
}

bookTitles().then((response) => {
    const result = JSON.parse(response);
    console.log(result);
    if (Array.isArray(result.books)) {
        const books = result.books;
        const booksContainer = document.getElementById('books_container');

        books.forEach(book => {
            const bookDiv = document.createElement('div');
            const title = document.createElement('h3');
            const description = document.createElement('p');

            title.textContent = book.title;
            description.textContent = book.descript;

            bookDiv.appendChild(title);
            bookDiv.appendChild(description);

            booksContainer.appendChild(bookDiv);
        });
    } else {
        console.error('Parrsed data is not an array', result);
    }
}).catch(error => {
    console.error('Error fetching books: ', error);
});

document.getElementById('submit_button').addEventListener('click', function () {
        const titleInput = document.getElementsByClassName('title-input');
        const descInput = document.getElementsByClassName('desc_input');

        const bookTitle = titleInput.value;
        const bookDesc = descInput.value;

        const newBook = { title: bookTitle, description: bookDesc};
        books.push(newBook)

        displayBooks();

        titleInput.value = '';
        descInput.value = '';
});

function displayBooks () {
    const booksContainer = document.getElementById('books_container');
    booksContainer.innerHTML = '';

    books.forEach( book => {
        const bookDiv = document.createElement('div');
        const title = document.createElement('h2');
        const description = document.createElement('p');

        title.textContent = book.title;
        description.textContent = book.description;

        bookDiv.appendChild(title);
        bookDiv.appendChild(description);

        booksContainer.appendChild(bookDiv);
    })
}
