function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count=0;
  books.forEach((book)=>{
    if(book.borrows[0].returned===false){
      count++;
    }
  });
  return count;
}

function getMostCommonGenres(books) {
  const result = books.map((book) => `${book.genre}`);
  var arr=[];
  for(var i=0;i<result.length;i++){
    arr.push({
      name:result[i],
      count:1
    })
  }
 
  
  const res = arr.reduce((acc, e) => {
  const found = acc.find(x => e.name === x.name)
  found ? found.count += e.count : acc.push(e)
  return acc
  }, [])

  
  res.sort((res1, res2) => res2.count - res1.count);
   return res.slice(0, 5);

}

function getMostPopularBooks(books) {
  const final=[];
  books.forEach((book)=>{
    let val={};
    val.name=book.title;
    val.count=book.borrows.length;
    final.push(val);
  });
  final.sort((final1, final2) => final2.count - final1.count);
  return final.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let result=[];
  authors.forEach((author)=>{
    books.forEach((book)=>{
      let val={};
       let count=0;
      if(author.id==book.authorId){
        val.name= author["name"]["first"]+" "+author["name"]["last"]
        val.count=book.borrows.length
        result.push(val);
      }
     })
   });
  
  const res = result.reduce((acc, e) => {
  const found = acc.find(x => e.name === x.name)
  found ? found.count += e.count : acc.push(e)
  return acc
  }, [])
  
  res.sort((res1,res2)=>res2.count-res1.count);
  return res.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};