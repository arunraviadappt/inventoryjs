class Book {
    constructor(title, author,isbn, numOfCopies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.numOfCopies = numOfCopies;
    }

    //getAvailablilty()
    //sell(numSold)
    //restock(numCopies)

    getAvailablilty () {
        if(this.numOfCopies == 0 ){
            return 'out of stock'
        } else if(this.numOfCopies < 10) {
            return 'low stock'
        } else {
            return 'in stock'
        }
    }

    sell(numSold = 1){
        return this.numOfCopies = this.numOfCopies - numSold;
    }

    restock(numCopies = 5) {
        return this.numOfCopies = this.numOfCopies + numCopies;

    }

  }

  let book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K Rowling", "9780807286005", 2)
  console.log("status:", book1.getAvailablilty());
  console.log("book1", book1)
  console.log(book1.numOfCopies)
  book1.sell(5)
  console.log(book1.numOfCopies)
  book1.restock(5)
  console.log("after restock", book1.numOfCopies)
  console.log("status:", book1.getAvailablilty());





