import React from "react";
import "../../styles/Styles_C2.css";
import BookList from "../books/BookList";
import BookList from "../Books/BookList";
const booksData = [
    {
        id: 1,
        title: "Skin Care Tips: Complete Guide to Taking Care of Your Skin Naturally",
        description: "يتحدث هذا الكتاب عن ...",
        link: "https://www.barnesandnoble.com/w/skin-care-tips-annie-ramsey/1122174683",
        image: "../../assests/Images/images for c2/book1.jpg",
    },
    {
        title: "كيمياء البشرة",
        description: "يتحدث هذا الكتاب عن ...",
        link: "https://www.neelwafurat.com/itempage.aspx?id=lbb255840-238679&search=books",
        image: "../../assests/Images/images for c2/book2.png",
    },
    {
        id: 3,
        title: "أسرار العناية بالبشرة (نظرية الجمال المتكاملة)",
        description: "يتحدث هذا الكتاب عن ...",
        link: "https://www.neelwafurat.com/itempage.aspx?id=lbb387719-384972&search=books",
        image: "../../assests/Images/images for c2/book3.jpg",
    },
    {
        id: 4,
        title: "طرق سهلة ومجربة للعناية بالشعر",
        description: "يتحدث هذا الكتاب عن ...",
        link: "https://www.neelwafurat.com/itempage.aspx?id=lbb197488-170288&search=books",
        image: "../../assests/Images/images for c2/book4.jpg",
    },
];

function Clinic2() {
    return (
        <div className="Clinic2">
            <BookList books={booksData}/>
        </div>
    )
}

export default Clinic2;
