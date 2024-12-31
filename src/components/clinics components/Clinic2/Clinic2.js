import React from "react";
import "../../styles/Styles_C2.css";
import BookList from "../Books/BookList";
import IntroSection from "../clinic2 Components/IntroSection";
import Navbar from "../navbar/Navbar";
import RecipeCard from "../clinic2 Components/RecipeCard";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import HairCareClinic from "../clinic2 Components/HairCareClinic";
import RecipesS from "../clinic2 Components/RecipesS";
import CleanEatClinic from "../clinic2 Components/CleanEatClinic";
import Recipes from "../clinic2 Components/Recipes";
import TipCard from "../clinic2 Components/TipCard";
import TestimonialBox from "../clinic2 Components/TestimonialBox";
import Footer from "../Footer";
import HeaderSection from "../clinic2 Components/HeaderSection";

// const booksData = [
//     {
//         id: 1,
//         title: "Skin Care Tips: Complete Guide to Taking Care of Your Skin Naturally",
//         description: "يتحدث هذا الكتاب عن ...",
//         link: "https://www.barnesandnoble.com/w/skin-care-tips-annie-ramsey/1122174683",
//         image : {book1},
//     },
//     {
//         id: 2,
//         title: "كيمياء البشرة",
//         description: "يتحدث هذا الكتاب عن ...",
//         link: "https://www.neelwafurat.com/itempage.aspx?id=lbb255840-238679&search=books",
//         image: "../../assests/Images/images for c2/book2.png",
//     },
//     {
//         id: 3,
//         title: "أسرار العناية بالبشرة (نظرية الجمال المتكاملة)",
//         description: "يتحدث هذا الكتاب عن ...",
//         link: "https://www.neelwafurat.com/itempage.aspx?id=lbb387719-384972&search=books",
//         image: "../../assests/Images/images for c2/book3.jpg",
//     },
//     {
//         id: 4,
//         title: "طرق سهلة ومجربة للعناية بالشعر",
//         description: "يتحدث هذا الكتاب عن ...",
//         link: "https://www.neelwafurat.com/itempage.aspx?id=lbb197488-170288&search=books",
//         image: "../../assests/Images/images for c2/book4.jpg",
//     },
// ];

// const Clinic2=()=>{
//     return (
//         <div className="Clinic2">

//             <div className="container">
//                 <h1 className="details-content">العناية بالشّعر</h1>
//                 <section>
//                 <div className="grid-container">
//                     <details>
//                         <summary>وصفات للشعر المتقصف</summary>
//                         <div className="details-content">
//                             <h2>ماسك زيت جوز الهند والعسل</h2> <br/>
//                             <img className="img-content" src="../../../src/assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
//                             <p> جوز الهند هو المكوّن السحري لشعرك. يعمل زيت جوز الهند على ترطيب
//                                 الشعر من الجذور إلى الأطراف وتعزيز لمعانه. أما فوائد العسل فتساعد
//                                 على ترطيب الشعر ونعومته.</p>
//                             <h3>المكونات:</h3>
//                             <ul>
//                                 <li>1 ملعقة كبيرة زيت جوز الهند</li>
//                                 <li>1 ملعقة كبيرة عسل</li>
//                             </ul>
//                             <h3>الطريقة:</h3>
//                             <ol>
//                                 <li>اخلطي جميع المكونات في وعاء.</li>
//                                 <li>سخّني الخليط قليلاً حتى يذوب.</li>
//                                 <li>ضعي المزيج على الشعر وغطيه بقبعة استحمام لمدة 15-20 دقيقة.</li>
//                                 <li>اغسلي شعرك جيدًا.</li>
//                             </ol>
//                         </div>
//                     </details>
//                     <details>
//                         <summary>تساقط الشعر</summary>
//                         <div className="details-content">
//                             <h2>ماسك الحلبة</h2> <br/>
//                             <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
//                             <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
//                             <h3>المكونات:</h3>
//                             <ul>
//                                 <li>2 ملعقة كبيرة بذور الحلبة</li>
//                                 <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
//                             </ul>
//                             <h3>الطريقة:</h3>
//                             <ol>
//                                 <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
//                                 <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
//                                 <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
//                             </ol>
//                         </div>
//                     </details>
//                     <details>
//                         <summary>تساقط الشعر</summary>
//                         <div className="details-content">
//                             <h2>ماسك الحلبة</h2> <br/>
//                             <img className="img-content" src="../../../src/assests/Images/images for c2/spinach.jpg" alt="فراولة"></img>
//                             <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
//                             <h3>المكونات:</h3>
//                             <ul>
//                                 <li>2 ملعقة كبيرة بذور الحلبة</li>
//                                 <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
//                             </ul>
//                             <h3>الطريقة:</h3>
//                             <ol>
//                                 <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
//                                 <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
//                                 <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
//                             </ol>
//                         </div>
//                     </details>
//                     <details>
//                         <summary>تساقط الشعر</summary>
//                         <div className="details-content">
//                             <h2>ماسك الحلبة</h2> <br/>
//                             <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
//                             <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
//                             <h3>المكونات:</h3>
//                             <ul>
//                                 <li>2 ملعقة كبيرة بذور الحلبة</li>
//                                 <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
//                             </ul>
//                             <h3>الطريقة:</h3>
//                             <ol>
//                                 <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
//                                 <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
//                                 <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
//                             </ol>
//                         </div>
//                     </details>
//                     </div>
//                 </section>
//             </div>

//             <div className="container">
//                 <h1 className="details-content">العناية بالشّعر</h1>
//                 <section>
//                 <div className="grid-container">
//                     <details>
//                         <summary>وصفات للشعر المتقصف</summary>
//                         <div className="details-content">
//                             <h2>ماسك زيت جوز الهند والعسل</h2> <br/>
//                             <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
//                             <p> جوز الهند هو المكوّن السحري لشعرك. يعمل زيت جوز الهند على ترطيب
//                                 الشعر من الجذور إلى الأطراف وتعزيز لمعانه. أما فوائد العسل فتساعد
//                                 على ترطيب الشعر ونعومته.</p>
//                             <h3>المكونات:</h3>
//                             <ul>
//                                 <li>1 ملعقة كبيرة زيت جوز الهند</li>
//                                 <li>1 ملعقة كبيرة عسل</li>
//                             </ul>
//                             <h3>الطريقة:</h3>
//                             <ol>
//                                 <li>اخلطي جميع المكونات في وعاء.</li>
//                                 <li>سخّني الخليط قليلاً حتى يذوب.</li>
//                                 <li>ضعي المزيج على الشعر وغطيه بقبعة استحمام لمدة 15-20 دقيقة.</li>
//                                 <li>اغسلي شعرك جيدًا.</li>
//                             </ol>
//                         </div>
//                     </details>
//                     <details>
//                         <summary>تساقط الشعر</summary>
//                         <div className="details-content">
//                             <h2>ماسك الحلبة</h2> <br/>
//                             <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
//                             <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
//                             <h3>المكونات:</h3>
//                             <ul>
//                                 <li>2 ملعقة كبيرة بذور الحلبة</li>
//                                 <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
//                             </ul>
//                             <h3>الطريقة:</h3>
//                             <ol>
//                                 <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
//                                 <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
//                                 <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
//                             </ol>
//                         </div>
//                     </details>
//                     <details>
//                         <summary>تساقط الشعر</summary>
//                         <div className="details-content">
//                             <h2>ماسك الحلبة</h2> <br/>
//                             <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
//                             <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
//                             <h3>المكونات:</h3>
//                             <ul>
//                                 <li>2 ملعقة كبيرة بذور الحلبة</li>
//                                 <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
//                             </ul>
//                             <h3>الطريقة:</h3>
//                             <ol>
//                                 <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
//                                 <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
//                                 <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
//                             </ol>
//                         </div>
//                     </details>
//                     <details>
//                         <summary>تساقط الشعر</summary>
//                         <div className="details-content">
//                             <h2>ماسك الحلبة</h2> <br/>
//                             <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
//                             <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
//                             <h3>المكونات:</h3>
//                             <ul>
//                                 <li>2 ملعقة كبيرة بذور الحلبة</li>
//                                 <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
//                             </ul>
//                             <h3>الطريقة:</h3>
//                             <ol>
//                                 <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
//                                 <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
//                                 <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
//                             </ol>
//                         </div>
//                     </details>
//                     </div>
//                 </section>
//             </div>

//             <div> 
//             {/* <Header
//             ClinicName="Mental Health Clinic"
//             ClinicAyah="{Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.}"
//             className="page2Background"
//             /> */}
//             </div>
//             { <BookList /> }

//         </div>
//     )
// }



const Clinic2 = () => {

    // const HairTreatments = [
    //     {
    //       title: "Coconut Oil & Honey Mask",
    //       description: "Coconut oil nourishes hair deeply while honey retains moisture.",
    //       image: "/path/to/image.jpg",
    //       ingredients: [
    //         { name: "1 tbsp coconut oil", info: "Deeply nourishes hair." },
    //         { name: "1 tbsp honey", info: "Retains moisture." },
    //       ],
    //       instructions: `1. Mix all ingredients. 2. Heat the mixture. 3. Apply to hair. 4. Leave for 20 minutes.`,
    //     },
    //     // Add more treatments...
    //   ];

    //   const EatClean = [
    //     {
    //       title: "Strawberry Smoothie",
    //       description: "Rich in vitamin C to support hair growth.",
    //       image: "/images/strawberry.jpg",
    //       ingredients: [
    //         { name: "1/2 cup strawberries", info: "Rich in vitamin C." },
    //         { name: "1/4 cup oats", info: "Rich in antioxidants." },
    //       ],
    //       instructions: "1. Blend ingredients. 2. Serve chilled.",
    //     },
    //     {
    //       title: "Spinach Smoothie",
    //       description: "Packed with nutrients like iron and folic acid.",
    //       image: "/images/spinach.jpg",
    //       ingredients: [
    //         { name: "1/2 cup spinach", info: "Boosts scalp health." },
    //         { name: "1/2 banana", info: "Provides natural sweetness." },
    //       ],
    //       instructions: "1. Blend ingredients. 2. Enjoy immediately.",
    //     },
    //   ];

    const skinTips = [
        { icon: "💧", title: "Stay Hydrated", description: "Drinking water is essential for glowing skin." },
        { icon: "🧴", title: "Use Sunscreen", description: "Protect your skin from harmful UV rays every day." },
        { icon: "😴", title: "Get Enough Sleep", description: "Sleeping well is key to healthy, refreshed skin." },
        { icon: "🥦", title: "Eat Healthy", description: "Nutrition plays a vital role in skin health." },
        { icon: "🧖‍♀️", title: "Cleanse Regularly", description: "Clean your face daily to remove dirt and excess oil." },
        { icon: "🌸", title: "Moisturize Daily", description: "Keep your skin hydrated with a good moisturizer." },
        { icon: "✨", title: "Exfoliate Weekly", description: "Exfoliate to remove dead skin cells and improve texture." },
        { icon: "🧘", title: "Manage Stress", description: "Stress can harm your skin; practice relaxation techniques." },
      ];
    
      const hairTips = [
        { icon: "🚿", title: "Wash Gently", description: "Use a gentle shampoo and avoid overwashing to maintain natural oils." },
        { icon: "💆‍♀️", title: "Condition Regularly", description: "Apply conditioner to keep your hair soft and manageable." },
        { icon: "🔥", title: "Protect from Heat", description: "Use heat protectant sprays before styling with heat tools." },
        { icon: "🥗", title: "Eat Nutrient-Rich Foods", description: "A balanced diet promotes strong and healthy hair." },
        { icon: "✂️", title: "Trim Regularly", description: "Get regular trims to prevent split ends and maintain hair health." },
        { icon: "💧", title: "Stay Hydrated", description: "Drinking water keeps your scalp and hair hydrated." },
        { icon: "🚫💇‍♀️", title: "Avoid Harsh Chemicals", description: "Limit the use of dyes and harsh treatments to prevent damage." },
        { icon: "🌞", title: "Protect from Sun", description: "Wear a hat or use UV protection for your hair when in the sun." },
      ];
  
      const testimonials = [
        {
          image: "../../../public/Clinics/images For C2/images For C2/Ninja.webp",
          name: "محمد ن.",
          location: "فلسطين",
          stars: 5,
          comment: "وصفات مفيدة",
        },
        {
          image: "../../../public/Clinics/images For C2/images For C2/Ninja.webp",
          name: "دانة محمد",
          location: "فلسطين",
          stars: 4,
          comment: "رائع",
        },
        {
          image: "../../../public/Clinics/images For C2/images For C2/Ninja.webp",
          name: "فاطمة",
          location: "الإمارات",
          stars: 5,
          comment: "أحسنتم.",
        },
        {
          image: "../../../public/Clinics/images For C2/images For C2/Ninja.webp",
          name: "هاني",
          location: "مصر",
          stars: 3,
          comment: "جيد.",
        },
      ];

    return (
        <div> 
            <Navbar />

            <div>
                <HeaderSection
                title="Nourish your natural beauty"
                subtitle="Experience the power of nature with our collection of premium organic beauty products"
                />
            </div>

            <Router>
                <div className="services-container">
                    <h3>Our Services</h3>
                    <div className="services-grid">
                        <Link
                        to="../clinic2 Components/RecipesS.js"
                        className="service-card hover"
                        style={{
                            backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('../images/For C2/skincare-background.jpeg')",
                        }}>
                        <h4>Skincare Treatments</h4>
                        <p>Personalized care for glowing, healthy skin.</p>
                        </Link>

                        <Link
                        to="../clinic2 Components/HairCareClinic.js"
                        className="service-card hover"
                        style={{
                            backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('./haircare_background.jpg')",
                        }}>
                        <h4>Hair Care Solutions</h4>
                        <p>Rejuvenate your hair with our organic products.</p>
                        </Link>

                        <Link
                        to="../clinic2 Components/Recipes.js"
                        className="service-card hover"
                        style={{
                            backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('./body care=main.jpeg')",
                        }}>
                        <h4>Body Care Routines</h4>
                        <p>Nourishing treatments for total wellness.</p>
                        </Link>

                        <Link
                        to="../clinic2 Components/CleanEatClinic.js"
                        className="service-card hover"
                        style={{
                            backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('./clean eating-background.png')",
                        }}>
                        <h4>Clean Eating Recipes</h4>
                        <p>Rejuvenate your hair with our organic products.</p>
                        </Link>
                    </div>
                </div>

                {/* Routes to render components */}
                <Routes>
                    <Route path="../clinic2 Components/HairCareClinic.js" element={<HairCareClinic />} />
                    <Route path="../clinic2 Components/RecipesS.js" element={<RecipesS />} />
                    <Route path="../clinic2 Components/CleanEatClinic.js" element={<CleanEatClinic />} />
                    <Route path="../clinic2 Components/Recipes.js" element={<Recipes />} />
                </Routes>
            </Router>

            <div className="tips-section">
                <div className="tips-container">
                    <h3>Beauty Tips</h3>
                    <h4>Tips for Maintaining Healthy and Glowing Skin</h4>
                        <div className="tips-row">
                            {skinTips.map((tip, index) => (
                            <TipCard key={index} {...tip} />
                            ))}
                        </div>
                </div>
                <br />
                <div className="tips-container">
                    <h4>Tips for strong and healthy hair</h4>
                    <div className="tips-row">
                        {hairTips.map((tip, index) => (
                        <TipCard key={index} {...tip} />
                        ))}
                    </div>
                </div>
            </div>

            <div id="testimonials">
                <div className="testimonial-heading">
                    <span>Visitor reviews on our website :</span>
                    <h4>We'd love to hear your thoughts!</h4>
                </div>
                <div className="testimonial-box-container">
                    {testimonials.map((testimonial, index) => (
                    <TestimonialBox key={index} {...testimonial} />
                    ))}
                </div>
            </div>

            <Footer/>

    </div>
    );
};
export default Clinic2;
