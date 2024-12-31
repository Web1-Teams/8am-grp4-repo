import React from "react";
import "../../styles/Styles_C2.css";
import IntroSection from "./IntroSection";
import Navbar from "../navbar/Navbar";
import RecipeCard from "./RecipeCard";
import BookList from "../Books/BookList";
import Footer from "../Footer";

const CleanEatClinic = (props) => {
return (
    <div className="main-container">
    <div className="main-frame">
        <h1>The Impact of Healthy and Clean Nutrition on Hair Health</h1>

    <details>
    <summary>The Impact of Nutrition on Promoting Hair Growth</summary>
    <div class="container">
      <p>
        Learn how proper nutrition can promote hair growth. These easy-to-follow tips provide the nutrients your hair needs to grow healthier and stronger.
      </p>
    </div>
        <Recipes
        recipeName="Strawberry Smoothie"
        image="./images/strawberry.jpg"
        description="Rich in vitamin C to support hair growth."
        ingName1="1/2 cup strawberries"
        ingDescription1="Rich in vitamin C."
        ingName2="1/4 cup oats"
        ingDescription2="Rich in antioxidants."
        instructions="1. Blend ingredients. 2. Serve chilled."
      />      
      <Recipes
      recipeName="Spinach Smoothie"
      image="./images/spinach.jpg"
      description="Packed with nutrients like iron and folic acid."
      ingName1="1/2 cup spinach"
      ingDescription1="Boosts scalp health."
      ingName2="1/2 banana"
      ingDescription2="Provides natural sweetness."
      instructions="1. Blend ingredients. 2. Enjoy immediately."
    />
    
    <Recipes
      recipeName="Carrot & Orange Juice"
      image="./project/images/carrot orange juice.jpg"
      description="Carrots and oranges are rich in vitamin C, which helps the body produce collagen, essential for building strong hair. They also aid in iron absorption, promoting better hair growth. This juice can improve scalp circulation, stimulating hair follicles for enhanced hair growth."
      ingName1="1 large carrot"
      ingDescription1="Rich in vitamin C, essential for collagen production and hair strength."
      ingName2="1 cup coconut water or filtered water"
      ingDescription2="Provides hydration and supports nutrient absorption."
      ingName3="1 orange"
      ingDescription3="Packed with vitamin C to enhance iron absorption and promote hair growth."
      ingName4="1 small piece of ginger"
      ingDescription4="Stimulates circulation and provides antioxidants for scalp health."
      ingName5="Sugar or salt (optional)"
      ingDescription5="Adds taste based on preference."
      instructions="1. Chop one or two peeled carrots into small pieces and blend them in a blender with 1 cup of coconut water.\n2. Add sugar or salt as desired for taste.\n3. Add the orange pulp and a small piece of ginger to the mixture.\n4. Blend the mixture until it becomes a smooth, semi-liquid consistency.\n5. You can either strain the juice or enjoy it as is. Serve immediately."
    />
        </details>
</div>
</div>
    )
};   

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
