import React from 'react';
import "./book.css";

// function Book ({ book }) {
const Book = (props) => {    // const imagePath = require(`${book.image}`);
    const Images ={
        book1 :'../../assests/Images/images For C2/book1.jpg',
        book2 :'../../assests/Images/images For C2/book2.png',
        book3 :'../../assests/Images/images For C2/book3.jpg',
        book4 :'../../assests/Images/images For C2/book4.jpg',
         };
    return (
        <div className="book">
            <a href={props.link}>
                <img src={Images} alt={props.title} className="book-img"/>
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