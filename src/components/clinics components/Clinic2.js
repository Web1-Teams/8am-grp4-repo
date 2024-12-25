import React from "react";
import "../../styles/Styles_C2.css";
import BookList from "../books/BookList";

const booksData = [
    {
        id: 1,
        title: "Skin Care Tips: Complete Guide to Taking Care of Your Skin Naturally",
        description: "يتحدث هذا الكتاب عن ...",
        link: "https://www.barnesandnoble.com/w/skin-care-tips-annie-ramsey/1122174683",
        image : {book1},
    },
    {
        id: 2,
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

const Clinic2=()=>{
    return (
        <div className="Clinic2">

            <div className="container">
                <h1 className="details-content">العناية بالشّعر</h1>
                <section>
                <div className="grid-container">
                    <details>
                        <summary>وصفات للشعر المتقصف</summary>
                        <div className="details-content">
                            <h2>ماسك زيت جوز الهند والعسل</h2> <br/>
                            <img className="img-content" src="../../../src/assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
                            <p> جوز الهند هو المكوّن السحري لشعرك. يعمل زيت جوز الهند على ترطيب
                                الشعر من الجذور إلى الأطراف وتعزيز لمعانه. أما فوائد العسل فتساعد
                                على ترطيب الشعر ونعومته.</p>
                            <h3>المكونات:</h3>
                            <ul>
                                <li>1 ملعقة كبيرة زيت جوز الهند</li>
                                <li>1 ملعقة كبيرة عسل</li>
                            </ul>
                            <h3>الطريقة:</h3>
                            <ol>
                                <li>اخلطي جميع المكونات في وعاء.</li>
                                <li>سخّني الخليط قليلاً حتى يذوب.</li>
                                <li>ضعي المزيج على الشعر وغطيه بقبعة استحمام لمدة 15-20 دقيقة.</li>
                                <li>اغسلي شعرك جيدًا.</li>
                            </ol>
                        </div>
                    </details>
                    <details>
                        <summary>تساقط الشعر</summary>
                        <div className="details-content">
                            <h2>ماسك الحلبة</h2> <br/>
                            <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
                            <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
                            <h3>المكونات:</h3>
                            <ul>
                                <li>2 ملعقة كبيرة بذور الحلبة</li>
                                <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
                            </ul>
                            <h3>الطريقة:</h3>
                            <ol>
                                <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
                                <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
                                <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
                            </ol>
                        </div>
                    </details>
                    <details>
                        <summary>تساقط الشعر</summary>
                        <div className="details-content">
                            <h2>ماسك الحلبة</h2> <br/>
                            <img className="img-content" src="../../../src/assests/Images/images for c2/spinach.jpg" alt="فراولة"></img>
                            <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
                            <h3>المكونات:</h3>
                            <ul>
                                <li>2 ملعقة كبيرة بذور الحلبة</li>
                                <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
                            </ul>
                            <h3>الطريقة:</h3>
                            <ol>
                                <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
                                <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
                                <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
                            </ol>
                        </div>
                    </details>
                    <details>
                        <summary>تساقط الشعر</summary>
                        <div className="details-content">
                            <h2>ماسك الحلبة</h2> <br/>
                            <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
                            <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
                            <h3>المكونات:</h3>
                            <ul>
                                <li>2 ملعقة كبيرة بذور الحلبة</li>
                                <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
                            </ul>
                            <h3>الطريقة:</h3>
                            <ol>
                                <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
                                <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
                                <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
                            </ol>
                        </div>
                    </details>
                    </div>
                </section>
            </div>

            <div className="container">
                <h1 className="details-content">العناية بالشّعر</h1>
                <section>
                <div className="grid-container">
                    <details>
                        <summary>وصفات للشعر المتقصف</summary>
                        <div className="details-content">
                            <h2>ماسك زيت جوز الهند والعسل</h2> <br/>
                            <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
                            <p> جوز الهند هو المكوّن السحري لشعرك. يعمل زيت جوز الهند على ترطيب
                                الشعر من الجذور إلى الأطراف وتعزيز لمعانه. أما فوائد العسل فتساعد
                                على ترطيب الشعر ونعومته.</p>
                            <h3>المكونات:</h3>
                            <ul>
                                <li>1 ملعقة كبيرة زيت جوز الهند</li>
                                <li>1 ملعقة كبيرة عسل</li>
                            </ul>
                            <h3>الطريقة:</h3>
                            <ol>
                                <li>اخلطي جميع المكونات في وعاء.</li>
                                <li>سخّني الخليط قليلاً حتى يذوب.</li>
                                <li>ضعي المزيج على الشعر وغطيه بقبعة استحمام لمدة 15-20 دقيقة.</li>
                                <li>اغسلي شعرك جيدًا.</li>
                            </ol>
                        </div>
                    </details>
                    <details>
                        <summary>تساقط الشعر</summary>
                        <div className="details-content">
                            <h2>ماسك الحلبة</h2> <br/>
                            <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
                            <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
                            <h3>المكونات:</h3>
                            <ul>
                                <li>2 ملعقة كبيرة بذور الحلبة</li>
                                <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
                            </ul>
                            <h3>الطريقة:</h3>
                            <ol>
                                <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
                                <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
                                <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
                            </ol>
                        </div>
                    </details>
                    <details>
                        <summary>تساقط الشعر</summary>
                        <div className="details-content">
                            <h2>ماسك الحلبة</h2> <br/>
                            <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
                            <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
                            <h3>المكونات:</h3>
                            <ul>
                                <li>2 ملعقة كبيرة بذور الحلبة</li>
                                <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
                            </ul>
                            <h3>الطريقة:</h3>
                            <ol>
                                <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
                                <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
                                <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
                            </ol>
                        </div>
                    </details>
                    <details>
                        <summary>تساقط الشعر</summary>
                        <div className="details-content">
                            <h2>ماسك الحلبة</h2> <br/>
                            <img className="img-content" src="../../assests/Images/images for c2/strawberryjuice.jpg" alt="فراولة"></img>
                            <p>الحلبة تحتوي على البروتينات والحديد وتساعد في منع تساقط الشعر وتعزيز نموه.</p>
                            <h3>المكونات:</h3>
                            <ul>
                                <li>2 ملعقة كبيرة بذور الحلبة</li>
                                <li>1-2 ملعقة كبيرة زيت الزيتون أو زيت جوز الهند أو زيت الأرجان</li>
                            </ul>
                            <h3>الطريقة:</h3>
                            <ol>
                                <li>اطحن بذور الحلبة واخلطها مع الزيت المفضل.</li>
                                <li>سخّن الخليط قليلًا، ثم ضع الماسك على فروة الرأس والشعر.</li>
                                <li>اترك الماسك لمدة 10 دقائق، ثم اغسل شعرك بالشامبو والماء الدافئ.</li>
                            </ol>
                        </div>
                    </details>
                    </div>
                </section>
            </div>

            <div> 
            {/* <Header
            ClinicName="Mental Health Clinic"
            ClinicAyah="{Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.}"
            className="page2Background"
            /> */}
            </div>
            { <BookList /> }

        </div>
    )
}

export default Clinic2;
