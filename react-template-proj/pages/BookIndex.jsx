const {useEffect, useState} = React

import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'



export function BookIndex( ){

    const [books, setBooks] = useState(null)
    // console.log('books: ',books);
    
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())


    useEffect(()=>{
        console.log('Hi ');

        loadBooks()

    },[filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(setBooks)
    }
   
    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() =>{
            // console.log('remove')
            setBooks(prevBooks => 
            prevBooks.filter(book => book.id !== bookId))
            })
    }

    function onSetFilterBy(filterBy){
        setFilterBy({...filterBy})
    }


 if (!books) return <div>Loading...</div>
  return (
        <section className="book-index">
          
            <h2>Book Index</h2>
       
           <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy}/>
      
           
           

           <BookList books={books} onRemoveBook={onRemoveBook}/>
            
        </section>
    )
}