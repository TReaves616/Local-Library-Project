function findAuthorById(authors, id) {
  const result = authors.find((author) => id === author.id)
  return result;
}


function findBookById(books, id) {
  const result = books.find((book)=> id === book.id);
  return result;
};


function partitionBooksByBorrowedStatus(books) {
  let available = [];
  let unavailable = [];
  const bookStatuses = [];
  books.forEach((book) => {
    const isBookReturned = book.borrows[0].returned;
  
  if (isBookReturned) { // if book is not returned
    unavailable.push(book);
  } else { // if book is returned
    available.push(book);
  }
  });
  bookStatuses.push(available);
  bookStatuses.push(unavailable);
  return bookStatuses;
  }

  function getBorrowersForBook(book, accounts) {
    let result = [];
    let borrowArray = book.borrows;  
    borrowArray.forEach(borrow=>{
      let account = accounts.find(acc => acc.id === borrow.id);
      let obj = account;
      obj['returned'] =  borrow.returned;
      result.push(obj);
    })
    console.log(result);
    return result.slice(0,10);
  }
  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
