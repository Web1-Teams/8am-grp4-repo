import React from "react";
import Book from "./book";
import "./BookList.css";

function BookList({ books }) {
    return (
        <section id="books-info">
            <div>
                <h2> كتب يمكنك الاستفادة منها: </h2>
                <div className="book-container">
                    {books.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BookList;