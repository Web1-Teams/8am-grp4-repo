import React from 'react';
import "./Book.css";

const Book = (props) => {   

    return (
        <div className="book">
            <a href={props.link}>
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