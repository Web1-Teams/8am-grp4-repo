import React from 'react';
import "/book.css";

function Book({ book }){
    return (
        <div className="book">
            <a href={book.link} target="_blank" rel="">
                <img src={book.image} alt={book.title} className="book-img"/>
                <div className="caption">
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>إضغط هنا</p>
                </div>
            </a>
        </div>
    );
}

export default Book;