function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((acc1,acc2) => (acc1.name.last.toLowerCase()>acc2.name.last.toLowerCase()) ? 1:((acc2.name.last.toLowerCase()>acc1.name.last.toLowerCase()) ? -1 : 0)) 
}

function getTotalNumberOfBorrows(account, books) {
  let count=0;
  books.forEach(book=>{
    for(let i=0;i<book.borrows.length;i++){
       if(book.borrows[i].id===account.id){
          count++;
        }
      }
  });
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  let final=[];
 books.forEach(book => {
     for(let i=0;i<book.borrows.length;i++){
       if(book.borrows[i].id===account.id && book.borrows[i].returned===false){
         let found=authors.find((author)=> author.id === book.authorId)
         console.log(found.name);
         book.author={};
         book["author"]["name"] = found.name;
         final.push(book);
        }
      }
  });
  console.log(final);
  return final;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
