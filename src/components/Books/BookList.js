import React from "react";
import "./BookList.css";
import book1 from "../../assests/Images/imagesForC2/skinCareBook2.jpg";
import book2 from "../../assests/Images/imagesForC2/book2.png";
import book3 from "../../assests/Images/imagesForC2/bodycareBook.jpg";
import book4 from "../../assests/Images/imagesForC2/book4.jpg";
import Book from "./Book";


function BookList() {
  return (
    <section id="books-info">
      <div>
        <h2> Books you can benefit from: </h2>
        <div className="book-container">
          <Book
            title="Natural Homemade Skin Care"
            description="This book talks about 60 Cleansers, Toners, Moisturizers and More Made from Whole Food Ingredients"
            link="https://www.amazon.com/Natural-Homemade-Skin-Care-Moisturizers-ebook/dp/B07W77PYDX/ref=pd_sim_d_sccl_1_4/131-5435137-0995413?pd_rd_w=5mSas&content-id=amzn1.sym.fc475966-e837-48fc-9ed0-f4ca6ae9337b&pf_rd_p=fc475966-e837-48fc-9ed0-f4ca6ae9337b&pf_rd_r=SAXVND66FR649YY43WTB&pd_rd_wg=pLD65&pd_rd_r=e8a70da9-c5ca-4e55-b65b-1f3141abcb15&pd_rd_i=B07W77PYDX&psc=1"
            image={book1}
          />
          <Book
            title="كيمياء البشرة"
            description="This book talks about ..."
            link="https://www.neelwafurat.com/itempage.aspx?id=lbb255840-238679&search=books"
            image={book2}
          />
          <Book
            title="Organic Body Care"
            description="This book talks about 101 Homemade Beauty Products Recipes-Make Your Own Body Butters, Body Scrubs, Lotions, Shampoos, Masks And Bath Recipes "
            link="https://www.amazon.com/Organic-Body-Care-Homemade-Recipes-Make/dp/1517371376/ref=sr_1_6?crid=2D3T2Y593OU11&dib=eyJ2IjoiMSJ9.8yYpJdwF-lPbfnPn309bOVSGuDKKU223xpazER_LAdLKO6Rh-LKnbEUeyQra-8iMDx3Y4eIBwhWAYsD6K739c7DoL5mtBwFzF4O8jzz0QnUKpVjekxC8JgU3uCwQUuEYKEl0OhkAUtA3JJZPuQqnFeqLCCnfeOM96yprj1jJxNltn1RKb4-2c13EFOTWuCsWgEFJJ4ODZz-NU_Qp5UDP10c21JV8bp1JwVSQ6LeI0NY.Ma4yWxAd09NswS1ZKqENTc5h8B1m5dmvXYOdk7kdSJk&dib_tag=se&keywords=Body+care+book&qid=1736000368&s=books&sprefix=body+care+book%2Cstripbooks-intl-ship%2C256&sr=1-6"
            image={book3}

          />
          <Book
            title="طرق سهلة ومجربة للعناية بالشعر"
            description="This book talks about ..."
            link="https://www.neelwafurat.com/itempage.aspx?id=lbb197488-170288&search=books"
            image={book4}
         />

        </div>
      </div>
    </section>
  );
}

export default BookList;
