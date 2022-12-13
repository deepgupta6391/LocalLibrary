function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed=[];
  let returned=[];
  let final=[];
  books.forEach((book)=>{
    if(book.borrows[0].returned===true){
      returned.push(book.id);
    }else{
      borrowed.push(book.id);
    }
  });
  final.push(borrowed);
  final.push(returned);
  return final;
}

function getBorrowersForBook(book, accounts) {
  let final=[];
  book.borrows.forEach((person) =>{
    for(let i=0;i<accounts.length;i++){
      if(accounts[i].id===person.id && person.returned===true){
        accounts[i].returned=person.returned;
        final.push(accounts[i]);
      }
    }
  });
  console.log(final)
  return final;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
