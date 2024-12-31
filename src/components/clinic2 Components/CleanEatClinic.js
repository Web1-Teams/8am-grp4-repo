import React from "react";
import "../../styles/Styles_C2.css";
import IntroSection from "./IntroSection";
import Navbar from "../navbar/Navbar";
import RecipeCard from "./RecipeCard";
import BookList from "../Books/BookList";
import Footer from "../Footer";

const CleanEatClinic = () => {

    
    const EatClean = [
        
        {
          title: "Strawberry Smoothie",
          description: "Rich in vitamin C to support hair growth.",
          image: "/images/strawberry.jpg",
          ingredients: [
            { name: "1/2 cup strawberries", info: "Rich in vitamin C." },
            { name: "1/4 cup oats", info: "Rich in antioxidants." },
          ],
          instructions: "1. Blend ingredients. 2. Serve chilled.",
        },
        {
          title: "Spinach Smoothie",
          description: "Packed with nutrients like iron and folic acid.",
          image: "/images/spinach.jpg",
          ingredients: [
            { name: "1/2 cup spinach", info: "Boosts scalp health." },
            { name: "1/2 banana", info: "Provides natural sweetness." },
          ],
          instructions: "1. Blend ingredients. 2. Enjoy immediately.",
        },
        {
            title: "Carrot & Orange Juice",
            description:
              "Carrots and oranges are rich in vitamin C, which helps the body produce collagen, essential for building strong hair. They also aid in iron absorption, promoting better hair growth. This juice can improve scalp circulation, stimulating hair follicles for enhanced hair growth.",
            image: "/project/images/carrot orange juice.jpg", // تأكد من مسار الصورة
            ingredients: [
              { name: "1 large carrot", info: "Rich in vitamin C, essential for collagen production and hair strength." },
              { name: "1 cup coconut water or filtered water", info: "Provides hydration and supports nutrient absorption." },
              { name: "1 orange", info: "Packed with vitamin C to enhance iron absorption and promote hair growth." },
              { name: "1 small piece of ginger", info: "Stimulates circulation and provides antioxidants for scalp health." },
              { name: "Sugar or salt (optional)", info: "Adds taste based on preference." },
            ],
            instructions:
              "1. Chop one or two peeled carrots into small pieces and blend them in a blender with 1 cup of coconut water.\n2. Add sugar or salt as desired for taste.\n3. Add the orange pulp and a small piece of ginger to the mixture.\n4. Blend the mixture until it becomes a smooth, semi-liquid consistency.\n5. You can either strain the juice or enjoy it as is. Serve immediately.",
          },
      ];

    return (
        <div>
            <Navbar />

            <IntroSection
            title="The Power of Nutrition"
            subtitle="Discover how clean eating enhances your beauty and vitality." />
            
            <div className="Eat-container">
                {EatClean.map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
                ))}
            </div>

            <BookList/>
            <Footer/>
        </div>
    );
    
};

export default CleanEatClinic;
