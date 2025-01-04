import React from "react";
import "./BookList.css";
import book1 from "../../assests/Images/imagesForC2/book1.jpg";
import book2 from "../../assests/Images/imagesForC2/hairCareBook.jpg";
import book3 from "../../assests/Images/imagesForC2/book3.jpg";
import book4 from "../../assests/Images/imagesForC2/cleanEtingBook.jpg";
import Book from "./Book";


function BookList() {
  return (
    <section id="books-info">
      <div>
        <h2> Books you can benefit from: </h2>
        <div className="book-container">
          <Book
            title="Skin Care Tips: Complete Guide to Taking Care of Your Skin Naturally"
            description="This book talks about ..."
            link="https://www.barnesandnoble.com/w/skin-care-tips-annie-ramsey/1122174683"
            image={book1}
          />
          <Book
            title="Natural Hair Care"
            description="This book talks about: 125+ Homemade Hair Care Recipes And Secrets For Beauty, Growth, Shine, Repair and Styling."
            link="https://www.amazon.com/Natural-Hair-Care-Homemade-Beautiful/dp/1978302177/ref=sr_1_3?crid=1F77PPMUC5NVK&dib=eyJ2IjoiMSJ9.vrTzsss4GtZnbXxVm1_Ni9wFXoJ8v6zfdx0HRMLpT3hnKcvHFcdf3PoxREfHJq7OSycIvqTl8eRKtGdKO17BxpI5H_lcFtUz-AyzbgliRe2oXtJSug27oyG8Fch908EEWeQx2wKXB2cqsstyEGeUvyA50dXXrVYS7HLi80vAnmsQhq3F8onOQm8xQ5BSsuW7G_Ml97idmPpDBwidprEpvwG2Y_AUUtvDlI8mK89RGfmNdcaLJ0KFqhiqyHO4haNIaEJNyUATbGFlTpjoNG5J0CBOF8lHtAsFQQYVaEJSMdDFfxhXg1GlM1lAB9Vch98wgVO_BzYT-Y6Yk5qWVxoR5pUPcnRm52AuP8YzuWuK4BvhM_L5hoQzM15QXbiIlicZCRoS3QYGmIu4cfnSuNfADp26tB1XpRAn1EvRKa_h-rxwwRD8zWtWUzqNHTAWqNUs.5P1HhDF4xsqYNEjF19akmU53anzD3Uv3mL6pE14j7Ek&dib_tag=se&keywords=Hair+care+book&qid=1736001053&sprefix=hair+care+book%2Caps%2C256&sr=8-3"
            image={book2}
          />
          <Book
            title="أسرار العناية بالبشرة (نظرية الجمال المتكاملة)"
            description="This book talks about ..."
            link="https://www.neelwafurat.com/itempage.aspx?id=lbb387719-384972&search=books"
            image={book3}

          />
          <Book
            title="Eat Pretty Live Well"
            description="This book talks about: A Guided Journal for Nourishing Beauty, Inside and Out (Food Journal, Health and Diet Journal, Nutritional Books)."
            link="https://www.amazon.com/Eat-Pretty-Live-Well-Nourishing/dp/145215192X/ref=sr_1_4?crid=7FM3SJSB2CRT&dib=eyJ2IjoiMSJ9.1YBq4QsEuq4_aMXGot0C3-k9qGTsBcmHgiYKhYuIqlpJgoQG1yw0nXukMo4Tl8W-l2GpWGxw4k3E3AtMHRuAU6aN3a9YZJBiQBzzU9qB7PI9z-u0TzsYsmp7dMvaziga8_vbLp4ZS7iNpzBh_6R-NR_1YYoWszO7kX6oUkEzZakvbBdMQGEcBgioVshhORZ40GtdEBkdvpmiabRHv5kozQ4FBvbrgBrvnd6VtSSlDhE.5MDEQNqLLmI1WIAO5fotKA_t26Fih15ygko5twGa8xc&dib_tag=se&keywords=Eat+Pretty%3A+Nutrition+for+Beauty%2C+Inside+and+Out&qid=1736000237&sprefix=eat+pretty+nutrition+for+beauty%2C+inside+and+out%2Caps%2C273&sr=8-4"
            image={book4}
         />

        </div>
      </div>
    </section>
  );
}

export default BookList;
