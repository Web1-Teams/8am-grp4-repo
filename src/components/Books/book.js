import React from 'react';
import "./book.css";

// function Book ({ book }) {
const Book = (props) => {    // const imagePath = require(`${book.image}`);

    return (
        <div className="book">
            <a href={props.link} target="_blank" rel="">
                <img src={props.image} alt={props.title} className="book-img"/>
                <div className="caption">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <p>إضغط هنا</p>
                </div>
            </a>
        </div>
    );
}

export default Book;