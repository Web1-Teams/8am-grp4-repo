import React from 'react';
import "./book.css";

const Book = (props) => {   

    return (
        <div className="book">
            <a href={props.link}>
                <img src={props.image} alt={props.title} className="book-img"/>
                <div className="caption">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <p>Click here</p>
                </div>
            </a>
        </div>
    );
}

export default Book;
