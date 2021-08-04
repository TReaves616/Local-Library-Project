//Returns an array of authors with the given ID
function findAuthorById(authors, id) {
  //Uses find.
  return authors.find((author) => author.id === id );
}

//Returns an array of the books with the given ID
function findBookById(books, id) {
  //Uses find
  return books.find((book) => book.id.includes(id));
}

//Returns an array of two arrays: 
//- An array of the available books.
//- An array of the books currently borrowed.
function partitionBooksByBorrowedStatus(books) {
  //Uses filter
  const availableList = books.filter((book) => book.borrows[0].returned === true);
  const borrowedList = books.filter((book) => book.borrows[0].returned === false);
  return [borrowedList, availableList];
}

//Returns an array of all of the transactions within a books borrows array.
function getBorrowersForBook(book, accounts) {
  const result = [];
  //Uses for of loop.
  for (let account of accounts) {
    for (let i = 0; i < book.borrows.length; i++) {
      if(account.id === book.borrows[i].id) {
        const returned = book.borrows[i].returned
        result.push({...account, returned })
      }
    }
  }
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
