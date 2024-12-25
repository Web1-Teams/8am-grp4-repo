import React from "react";
import Book from "./book"
import "./BookList.css";
import book1 from '../../assests/Images/images for c2/book1.jpg'
function BookList({ books }) {
    return (
        <section id="books-info">
            <div>
                <h2> كتب يمكنك الاستفادة منها: </h2>
                <div className="book-container">
                    {/* {books.map((book) => (
                        <Book key={book.id} book={book} />
                    ))} */}
                     <Book 
                     title= "Skin Care Tips: Complete Guide to Taking Care of Your Skin Naturally"
                     description="يتحدث هذا الكتاب عن ..."
                     link= "https://www.barnesandnoble.com/w/skin-care-tips-annie-ramsey/1122174683"
                     image = {book1}/>

                </div>
            </div>

        </section>
    );
}

export default BookList;