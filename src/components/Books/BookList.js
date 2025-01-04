import React from "react";
import "./BookList.css";
import book1 from "../../assests/Images/imagesForC2/skinCareBook2.jpg";
import book2 from "../../assests/Images/imagesForC2/hairCareBook.jpg";
import book3 from "../../assests/Images/imagesForC2/bodycareBook.jpg";
import book4 from "../../assests/Images/imagesForC2/cleanEtingBook.jpg";

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
            title="Natural Hair Care"
            description="This book talks about: 125+ Homemade Hair Care Recipes And Secrets For Beauty, Growth, Shine, Repair and Styling."
            link="https://www.amazon.com/Natural-Hair-Care-Homemade-Beautiful/dp/1978302177/ref=sr_1_3?crid=1F77PPMUC5NVK&dib=eyJ2IjoiMSJ9.vrTzsss4GtZnbXxVm1_Ni9wFXoJ8v6zfdx0HRMLpT3hnKcvHFcdf3PoxREfHJq7OSycIvqTl8eRKtGdKO17BxpI5H_lcFtUz-AyzbgliRe2oXtJSug27oyG8Fch908EEWeQx2wKXB2cqsstyEGeUvyA50dXXrVYS7HLi80vAnmsQhq3F8onOQm8xQ5BSsuW7G_Ml97idmPpDBwidprEpvwG2Y_AUUtvDlI8mK89RGfmNdcaLJ0KFqhiqyHO4haNIaEJNyUATbGFlTpjoNG5J0CBOF8lHtAsFQQYVaEJSMdDFfxhXg1GlM1lAB9Vch98wgVO_BzYT-Y6Yk5qWVxoR5pUPcnRm52AuP8YzuWuK4BvhM_L5hoQzM15QXbiIlicZCRoS3QYGmIu4cfnSuNfADp26tB1XpRAn1EvRKa_h-rxwwRD8zWtWUzqNHTAWqNUs.5P1HhDF4xsqYNEjF19akmU53anzD3Uv3mL6pE14j7Ek&dib_tag=se&keywords=Hair+care+book&qid=1736001053&sprefix=hair+care+book%2Caps%2C256&sr=8-3"
            image={book2}
          />
          <Book
            title="Organic Body Care"
            description="This book talks about 101 Homemade Beauty Products Recipes-Make Your Own Body Butters, Body Scrubs, Lotions, Shampoos, Masks And Bath Recipes "
            link="https://www.amazon.com/Organic-Body-Care-Homemade-Recipes-Make/dp/1517371376/ref=sr_1_6?crid=2D3T2Y593OU11&dib=eyJ2IjoiMSJ9.8yYpJdwF-lPbfnPn309bOVSGuDKKU223xpazER_LAdLKO6Rh-LKnbEUeyQra-8iMDx3Y4eIBwhWAYsD6K739c7DoL5mtBwFzF4O8jzz0QnUKpVjekxC8JgU3uCwQUuEYKEl0OhkAUtA3JJZPuQqnFeqLCCnfeOM96yprj1jJxNltn1RKb4-2c13EFOTWuCsWgEFJJ4ODZz-NU_Qp5UDP10c21JV8bp1JwVSQ6LeI0NY.Ma4yWxAd09NswS1ZKqENTc5h8B1m5dmvXYOdk7kdSJk&dib_tag=se&keywords=Body+care+book&qid=1736000368&s=books&sprefix=body+care+book%2Cstripbooks-intl-ship%2C256&sr=1-6"
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
