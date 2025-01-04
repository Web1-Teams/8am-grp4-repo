import React from "react";
import IntroSection from "./IntroSection";
import Recipes from "./Recipes";

import almondMilk from "../../assests/Images/imagesForC2/almondMilk.jpg";
import appleJuice from "../../assests/Images/imagesForC2/applejuice.jpg";
import apricot from "../../assests/Images/imagesForC2/apricot.jpg";
import avocado2CleanEating from "../../assests/Images/imagesForC2/avocado2CleanEating.jpg";
import avocadoCleanEating from "../../assests/Images/imagesForC2/avocadoCleanEating.jpg";
import beetrootAndCarrotsJuice from "../../assests/Images/imagesForC2/beetrootandcarrotsjuice.jpg";
import beetrootAndMint from "../../assests/Images/imagesForC2/Beetrootandmint.jpg";
import beetroot from "../../assests/Images/imagesForC2/beetroot.jpg";
import berry from "../../assests/Images/imagesForC2/berry.jpg";
import blackTea from "../../assests/Images/imagesForC2/blacktea.jpg";
import cherry from "../../assests/Images/imagesForC2/Cherry.jpg";
import chlorophyll from "../../assests/Images/imagesForC2/Chlorophyll.jpg";
import chocolateDrink from "../../assests/Images/imagesForC2/Chocolatedrink.jpg";
import coconutDrink from "../../assests/Images/imagesForC2/coconutdrink.jpg";
import coconutWater from "../../assests/Images/imagesForC2/coconutwater.jpg";
import coffee1 from "../../assests/Images/imagesForC2/coffee1.jpg";
import cranberry from "../../assests/Images/imagesForC2/Cranberry.jpg";
import fruitsAndAloeVeraGel from "../../assests/Images/imagesForC2/Fruitsandaloeveragel.jpg";
import grapefruit from "../../assests/Images/imagesForC2/grapefruit.jpg";
import lemonAndGinger from "../../assests/Images/imagesForC2/Lemonandginger.jpg";
import lemonAndGreenTea from "../../assests/Images/imagesForC2/lemonandgreentea.jpg";
import lemonJuice from "../../assests/Images/imagesForC2/lemonjuice.jpg";
import lemonHoneyGinger from "../../assests/Images/imagesForC2/Lemonhoneyginger.jpg";
import licorice from "../../assests/Images/imagesForC2/licorice.jpg";
import matcha from "../../assests/Images/imagesForC2/matcha.jpg";
import milkAndTurmeric from "../../assests/Images/imagesForC2/milkandturmeric.jpg";
import mint from "../../assests/Images/imagesForC2/mint.jpg";
import nuts from "../../assests/Images/imagesForC2/nuts.jpg";
import nuts2 from "../../assests/Images/imagesForC2/nuts2.jpeg";
import orangeAndCarrotJuice from "../../assests/Images/imagesForC2/orangeandcarrotjuice.jpg";
import pineappleAndGinger from "../../assests/Images/imagesForC2/pineappleandginger.jpg";
import pineappleAndLemon from "../../assests/Images/imagesForC2/pineappleandlemon.jpg";
import plum from "../../assests/Images/imagesForC2/plum.jpg";
import pomegranate from "../../assests/Images/imagesForC2/pomegranate.jpg";
import roselle from "../../assests/Images/imagesForC2/Roselle.jpg";
import sage from "../../assests/Images/imagesForC2/Sage.jpg";
import soyProtein from "../../assests/Images/imagesForC2/soyprotein.jpeg";
import spinach from "../../assests/Images/imagesForC2/spinach.jpeg";
import spinach2 from "../../assests/Images/imagesForC2/spinach2.jpeg";
import strawberry from "../../assests/Images/imagesForC2/strawberry.jpg";
import tamarind from "../../assests/Images/imagesForC2/tamarind.jpg";
import turmericTea from "../../assests/Images/imagesForC2/turmerictea.jpg";
import eggs from "../../assests/Images/imagesForC2/eggs.jpg";
import appleCider from "../../assests/Images/imagesForC2/ciderApple.jpg";
import neamTeaWithHoney from "../../assests/Images/imagesForC2/neamTeaWithHoney.jpg";
import sesameANDdate from "../../assests/Images/imagesForC2/sesameANDdate.jpg";
import greenTea from "../../assests/Images/imagesForC2/greentea2.jpg";
import darkChocolate from "../../assests/Images/imagesForC2/darkChocolate.jpg";
import BananaDateandAlmondSmoothie from "../../assests/Images/imagesForC2/BananaDateandAlmondSmoothie.jpg";
import ChiaSeedandAloeVeraDrink from "../../assests/Images/imagesForC2/ChiaSeedandAloeVeraDrink.jpg";
import PruneJuice from "../../assests/Images/imagesForC2/PruneJuice.jpg";
import HibiscusTea from "../../assests/Images/imagesForC2/hotOliveOil.jpg"
import almondmilkchocolate from "../../assests/Images/imagesForC2/almondchocolatemilk.webp";


const CleanEatClinic = (props) => {
return (
    <div>
      <IntroSection 
       title="The Power of Nutrition"
       subtitle1="Nourish your body, and it will reward you with vibrant hair, glowing skin, and boundless energy."
       subtitle2="Step into a world where every "
       specific1="meal fuels beauty"
       subtitle3=", every bite supports strength, and every choice leads you closer to your healthiest self."
       subtitle4="Your diet isn’t just about food – it’s "
       specific2="health"
       subtitle5=", radiance, and the foundation of your inner and outer beauty."
       subtitle6="Glow brighter, feel stronger, and live better – because true beauty starts from within. Let’s redefine your wellness journey."
     />


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
        image = {strawberry}
        description="Rich in vitamin C to support hair growth."
        ingName1="1/2 cup strawberries"
        ingDescription1="Rich in vitamin C."
        ingName2="1/4 cup oats"
        ingDescription2="Rich in antioxidants."
        instructions="1. Blend ingredients. 2. Serve chilled."
      />      
          <br/>

      <Recipes
    recipeName="Spinach Smoothie"
    image = {spinach}
    description="Spinach is a nutrient-rich leafy green packed with essentials like folic acid, iron, and vitamins that help promote hair growth and improve scalp health, supporting the growth of new hair follicles. Matcha powder is rich in antioxidants that stimulate hair growth. Bananas are high in silica, a mineral that strengthens hair, prevents hair loss, and boosts collagen production."
    ingName1="1/2 cup banana slices or avocado slices"
    ingDescription1="Rich in silica, which strengthens hair and stimulates collagen production."
    ingName2="1/2 cup spinach leaves"
    ingDescription2="Rich in essential nutrients like folic acid and iron to promote scalp health."
    ingName3="1/2 cup coconut milk"
    ingDescription3="Provides hydration and nourishment for overall hair health."
    ingName4="1 tsp matcha powder"
    ingDescription4="Rich in antioxidants that stimulate hair growth."
    ingName5="Sugar or honey (optional)"
    ingDescription5="Adds natural sweetness to enhance the taste."
    instructions="1. In a blender, add the banana or avocado slices, spinach leaves (washed thoroughly), and sugar or honey if desired. Blend into a smooth paste.
     2. Add the coconut milk and blend until well combined.
      3. Pour the smoothie into a glass and serve immediately.
       4. Optionally, garnish with a sprinkle of matcha powder for added flavor and nutrition."
 />
        <br/>

    <Recipes
      recipeName="Carrot & Orange Juice"
      image = {orangeAndCarrotJuice}
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
      instructions="1. Chop one or two peeled carrots into small pieces and blend them in a blender with 1 cup of coconut water.
      2. Add sugar or salt as desired for taste.
      3. Add the orange pulp and a small piece of ginger to the mixture.
      4. Blend the mixture until it becomes a smooth, semi-liquid consistency.
      5. You can either strain the juice or enjoy it as is. Serve immediately."
    />
        </details>
        
        <details>
    <summary>Nutrition and Hair Loss Treatment</summary>
    <div class="container">
      <p>
        Discover how proper nutrition can help reduce hair loss and promote healthier hair growth. These simple and natural tips focus on providing essential nutrients to strengthen hair follicles and improve overall scalp health.
      </p>
    </div>
    <Recipes
    recipeName="Almond Milk Chocolate Drink"
    image = {almondmilkchocolate}
    description="This delicious and nutritious chocolate banana drink combines the rich benefits of bananas and chocolate. Packed with essential nutrients like potassium, magnesium, and vitamins from bananas, it promotes better blood circulation to the scalp and strengthens hair follicles. Dark chocolate offers antioxidants that combat free radicals, maintaining scalp health. Milk provides vital proteins and calcium, essential for hair growth and strength."
    ingName1="1 ripe banana"
    ingDescription1="Rich in potassium and vitamins to improve blood flow to the scalp."
    ingName2="1 cup milk (preferably whole milk for a creamy texture)"
    ingDescription2="Provides proteins and calcium essential for hair growth."
    ingName3="1 tsp raw cocoa powder or a small piece of melted dark chocolate"
    ingDescription3="Packed with antioxidants to combat free radicals and maintain scalp health."
    ingName4="1 tsp honey (optional)"
    ingDescription4="Adds natural sweetness to enhance the flavor."
    ingName5="Ice cubes (optional)"
    ingDescription5="For a refreshing cold drink."
    instructions="1. Peel the ripe banana and place it in a blender.
     2. Add 1 cup of milk and raw cocoa powder or melted dark chocolate.
      3. If desired, add 1 tsp of honey for sweetness.
       4. Blend the ingredients until smooth and creamy.
        5. For a cold drink, add ice cubes and blend again.
         6. Pour the drink into a glass and enjoy its benefits for healthier hair growth."
 />
     <br/>

<Recipes
    recipeName="Soy Protein Drink"
    image = {soyProtein}
    description="Soy protein powder contains lysine and Vitamin B-6, essential for strengthening hair. This drink can be made with water or mixed with almond or cow's milk for added nutrients to promote healthier hair."
    ingName1="1 cup soy milk"
    ingDescription1="A great source of protein and nutrients to promote hair growth."
    ingName2="2 tbsp soy protein powder"
    ingDescription2="Rich in lysine and Vitamin B-6 for stronger hair."
    ingName3="1 tsp cocoa powder (optional)"
    ingDescription3="Adds flavor while providing antioxidants."
    ingName4="1 tsp honey (optional)"
    ingDescription4="Adds natural sweetness to the drink."
    ingName5="Ice cubes (optional)"
    ingDescription5="For a refreshing cold drink."
    instructions="1. Add soy milk to a blender.
     2. Add soy protein powder and 1 tsp of cocoa powder for extra flavor if desired.
      3. Add 1 tsp of honey to sweeten the drink.
       4. Blend all ingredients until smooth and well combined.
        5. For a chilled drink, add ice cubes and blend again.
        v 6. Pour the drink into a glass and enjoy its hair-strengthening benefits."
 />

    </details>
<details>
    <summary>The Impact of Nutrition on Hair Nourishment</summary>
    <div class="container">
      <p>
        Learn how proper nutrition can deeply nourish your hair, making it healthier, shinier, and stronger. A balanced diet rich in vitamins, minerals, and proteins provides the essential nutrients needed to maintain the strength of hair follicles and promote overall hair health.
      </p>
    </div>
    <Recipes
    recipeName="Eggs for Hair Nourishment"
    image = {eggs}
    description="Eggs are one of the best foods for supporting hair health and growth. They are rich in high-quality protein, which helps build hair structure and repair damage. Additionally, eggs contain biotin, a vitamin that promotes hair growth and prevents hair loss. The vitamins (A, D, E) and minerals like iron and zinc also help nourish the scalp and enhance natural oil production to keep hair hydrated and shiny. Regular consumption of eggs can improve hair strength and thickness."
    ingName1="Eggs"
    ingDescription1="Rich in high-quality protein, biotin, and vitamins A, D, E, iron, and zinc, all of which help promote hair health."
    instructions="Regular consumption of eggs can improve hair strength and thickness by providing essential nutrients."
 />
    <br/>

<Recipes
    recipeName="Berries for Hair Growth"
    image = {berry}
    description="Berries are packed with beneficial compounds and vitamins that can support hair growth. They are particularly rich in vitamin C, which contains powerful antioxidants. These antioxidants help protect hair follicles from free radicals, harmful molecules found in the body and environment. Moreover, vitamin C is used by the body to produce collagen, a protein that strengthens hair and prevents breakage."
    ingName1="Berries"
    ingDescription1="Packed with vitamin C and antioxidants that protect hair follicles from free radicals and strengthen hair."
    instructions="Regular consumption of berries helps support hair growth by boosting collagen production and aiding in the absorption of iron."
 />
    <br/>

<Recipes
    recipeName="Spinach for Hair Growth"
    image = {spinach2}
    description="Spinach is a leafy green vegetable that is packed with nutrients like folic acid, iron, and vitamins A and C, all of which may help support hair growth. Vitamin A produces sebum, a natural oil that moisturizes the scalp and promotes healthy hair growth. Spinach is also rich in iron, which helps deliver oxygen throughout the body, boosting energy and supporting hair growth and repair."
    ingName1="Spinach"
    ingDescription1="Packed with folic acid, iron, and vitamins A and C that may help support hair growth."
    instructions="Regular consumption of spinach helps boost iron levels and promotes healthy hair growth."
 />

<br/>

<Recipes
    recipeName="Avocado for Hair Health"
    image = {avocadoCleanEating}
    description="Avocados are rich in vitamin E, which may help support hair growth. Like vitamin C, vitamin E is an antioxidant that helps prevent oxidative stress by neutralizing free radicals. It also protects the scalp and other sensitive skin areas from oxidative stress and damage. Poor hair quality and insufficient follicles can lead to scalp damage."
    ingName1="Avocados"
    ingDescription1="Rich in vitamin E and essential fatty acids that help promote healthy hair growth and protect the scalp."
    instructions="Regular consumption of avocado can help improve hair quality and prevent oxidative stress."
 />
    <br/>

<Recipes
    recipeName="Nuts for Healthy Hair"
    image = {nuts}
    description="If you're looking to achieve healthy and strong hair, nuts are an excellent choice. They are delicious and convenient, offering a wide variety of nutrients that may help promote hair growth. Nuts are also rich in B vitamins, zinc, and essential fatty acids. Deficiencies in any of these nutrients have been linked to hair loss."
    ingName1="Nuts"
    ingDescription1="Rich in B vitamins, zinc, and essential fatty acids that promote healthy hair growth."
    instructions="Regular consumption of nuts helps support healthy hair growth by providing essential nutrients."
 />

    </details>
    </div>
    </div>
    <div class="main-container">
  <div class="main-frame">
      <h1>The Impact of Healthy and Clean Nutrition on Skin Health</h1>
      
      <details>
    <summary>Juice Recipes for Glowing Skin</summary>
    
  <div class="container">
    <p>
      Discover the power of natural juices to enhance your skin’s radiance. Packed with essential vitamins and antioxidants, these refreshing juice recipes are designed to nourish your skin from the inside out. Regularly consuming these nutrient-rich juices can help promote hydration, improve skin texture, and protect against environmental damage, giving you a healthy, glowing complexion.
    </p>
    </div>
    <Recipes
    recipeName="Pomegranate Juice"
    image = {pomegranate}
    description="Pomegranate juice is a powerful drink that detoxifies the blood, making it an excellent choice for glowing skin. It also has anti-aging properties, helping to rejuvenate skin cells and give the skin a youthful glow. One cup of pomegranate juice daily can significantly enhance skin health and radiance."
    ingName1="1 pomegranate"
    ingDescription1="Rich in antioxidants that help fight free radicals and promote skin regeneration."
    instructions="1. Cut the pomegranate in half and remove the seeds.
                 2. Place the seeds in a blender and blend until smooth.
                 3. Strain the juice to remove any pulp.
                 4. Pour the juice into a glass and enjoy fresh, rejuvenating pomegranate juice.
                 5. Drink one cup daily for optimal skin benefits."
 />
     <br/>

<Recipes
    recipeName="Coconut Water Benefits"
    image = {coconutDrink}
    description="Coconut water is rich in essential nutrients like potassium, magnesium, and calcium. It helps hydrate the skin, reduce wrinkles, and fight acne with its antimicrobial properties. It also promotes faster healing of skin wounds, making it a great addition to your skincare routine."
    ingName1="Fresh coconut water"
    ingDescription1="Hydrates the skin and fights acne with its natural antimicrobial properties."
    instructions="1. Apply fresh coconut water to your face using a cotton pad.
                 2. Gently massage the skin for 2-3 minutes.
                 3. Leave it on for 10 minutes to allow the nutrients to absorb.
                 4. Rinse with cold water for a refreshed and glowing complexion."
 />
     <br/>

<Recipes
    recipeName="Apple Juice Benefits"
    image = {appleJuice}
    description="Apple juice is rich in collagen, which enhances skin elasticity and promotes a youthful glow. It also contains antioxidants that help delay the appearance of aging signs, making it beneficial for maintaining smooth and healthy skin."
    ingName1="Fresh apple juice"
    ingDescription1="Boosts collagen production and helps maintain skin elasticity."
    instructions="1. Drink a glass of fresh apple juice daily for improved skin elasticity and a radiant complexion.
                 2. You can also apply a small amount of the juice to your skin using a cotton pad for added benefits."
 />
     <br/>

<Recipes
    recipeName="Carrot and Beetroot Juice"
    image = {beetrootAndCarrotsJuice}
    description="Carrot and beetroot juice is rich in antioxidants, vitamins, and minerals that promote healthy, glowing skin, lighten the complexion, and delay the signs of aging."
    ingName1="500g of fresh beetroot"
    ingDescription1="Rich in antioxidants and beneficial nutrients for skin health."
    ingName2="3 carrots"
    ingDescription2="Helps enhance skin glow and brightness."
    ingName3="2 cucumbers"
    ingDescription3="Hydrates and refreshes the skin."
    ingName4="1/2 liter of orange juice"
    ingDescription4="Provides vitamin C for brightening and skin rejuvenation."
    ingName5="Sugar (optional)"
    ingDescription5="To adjust sweetness to your liking."
    instructions="1. Boil the beetroot and cut it into quarters.
                 2. Slice the carrots and cucumbers into rounds.
                 3. Add the vegetables and fruits to a blender along with sugar and orange juice.
                 4. Blend until smooth, ensuring no lumps remain.
                 5. Drink the juice immediately to enjoy its full nutritional value."
 />
     <br/>

<Recipes
    recipeName="Lemon Juice for Skin Brightening"
    image = {lemonJuice}
    description="Lemon juice is rich in Vitamin C and citric acid, making it perfect for brightening the skin, reducing wrinkles, and fighting acne. It boosts collagen production, giving the skin a youthful glow and helping treat sunburns and rashes."
    ingName1="1 fresh lemon"
    ingDescription1="Rich in Vitamin C and citric acid to brighten and exfoliate the skin."
    instructions="1. Cut the lemon in half and squeeze out the juice.
                 2. Apply the fresh lemon juice to the affected areas with a cotton pad.
                 3. Leave it on for 10-15 minutes to let the skin absorb the nutrients.
                 4. Rinse with lukewarm water and follow with a moisturizer."
 />
    </details>
    <details>
    <summary>Impact of Healthy Nutrition on Acne Treatment</summary>
    <div class="container">
      <p>
        Healthy nutrition plays a crucial role in managing acne. A balanced diet rich in antioxidants, vitamins, and minerals can help reduce inflammation and promote clear, healthy skin. Nutrients such as Vitamin A, Vitamin C, Zinc, and Omega-3 fatty acids are particularly beneficial for acne-prone skin. These nutrients help regulate sebum production, reduce inflammation, and support skin healing. Avoiding excessive sugar and processed foods can also help reduce acne outbreaks by preventing hormonal imbalances and insulin spikes. Consuming nutrient-dense foods can improve skin health and contribute to clearer, more radiant skin.
      </p>
    </div>
    <Recipes
    recipeName="Turmeric Milk"
    image = {milkAndTurmeric}
    description="Turmeric milk, also known as 'golden milk,' is a traditional remedy for acne due to its anti-inflammatory and antibacterial properties. It helps reduce acne inflammation, fight bacteria, and improve skin texture."
    ingName1="1 teaspoon of turmeric"
    ingDescription1="Contains curcumin, a powerful antioxidant and anti-inflammatory agent."
    ingName2="1 cup of warm milk"
    ingDescription2="Rich in nutrients and helps turmeric dissolve for easy consumption."
    ingName3="A pinch of black pepper"
    ingDescription3="Enhances the absorption of curcumin in the body."
    instructions="1. Add 1 teaspoon of turmeric to a cup of warm milk.
                 2. Add a pinch of black pepper to enhance absorption.
                 3. Stir well and drink the mixture once a day.
                 
                 For topical use: Mix turmeric with milk to form a paste.
                 4. Apply the paste to the affected areas of the skin and leave it on for 15-20 minutes.
                 5. Rinse with warm water and gently pat dry."
 />
     <br/>

<Recipes
    recipeName="Sage Tea"
    image = {sage}
    description="Sage is rich in antioxidants and helps fight aging signs. It can be used both topically and as a drink to promote healthy skin."
    ingName1="1 tablespoon of dried sage leaves"
    ingDescription1="Rich in antioxidants that fight aging signs and promote skin health."
    ingName2="Half a cup of hot water"
    ingDescription2="Helps infuse the sage leaves for maximum benefit."
    ingName3="1 tablespoon of sandalwood powder"
    ingDescription3="Soothes the skin and reduces inflammation."
    ingName4="1 tablespoon of tomato paste"
    ingDescription4="Helps rejuvenate and brighten the skin."
    instructions="1. Soak 1 tablespoon of dried sage leaves in half a cup of hot water for 20 minutes.
                 2. Add 1 tablespoon of sandalwood powder and 1 tablespoon of tomato paste to the mixture.
                 3. Gently massage the mixture onto your skin for 5 minutes.
                 4. Leave it on for 20 minutes, then rinse with warm water."
 />
     <br/>

<Recipes
    recipeName="Chlorophyll Drink"
    image = {chlorophyll}
    description="Chlorophyll helps cleanse the body and improve skin health by detoxifying and reducing acne, rosacea, and redness."
    ingName1="Chlorophyll supplement"
    ingDescription1="Rich in antioxidants, detoxifies the body and promotes clearer skin."
    ingName2="Water"
    ingDescription2="Helps to dilute the chlorophyll supplement for easier consumption."
    instructions="1. Add the recommended dose of chlorophyll supplement to a glass of water.
                 2. Stir well and drink the mixture once a day.
                 3. Continue for a few weeks for optimal results."
 />
     <br/>

<Recipes
    recipeName="Apple Cider Vinegar Drink"
    image = {appleCider}
    description="Apple cider vinegar helps to improve skin health by promoting cell renewal, inhibiting acne-causing bacteria, and tightening pores."
    ingName1="1 tablespoon of apple cider vinegar"
    ingDescription1="Stimulates skin cell renewal and balances the skin's pH level."
    ingName2="A glass of water"
    ingDescription2="Dilutes the apple cider vinegar for easy consumption."
    instructions="1. Mix 1 tablespoon of apple cider vinegar with a glass of water.
                 2. Drink it in the morning before breakfast."
 />
    <br/>

<Recipes
    recipeName="Raw Nuts"
    image = {nuts2}
    description="Raw nuts are an ideal snack to protect the skin from inflammation and enhance its youthfulness. They are rich in vitamins A, C, E, zinc, and selenium."
    ingName1="Raw nuts"
    ingDescription1="Rich in vitamins A, C, E, zinc, and selenium to protect and rejuvenate the skin."
    instructions="1. Consume a handful of raw nuts daily as a snack for healthy, youthful skin."
 />
    </details>
    <details>
    <summary>Recipes for Delaying Wrinkles</summary>
  <div class="container">
    <p>
      Explore effective and natural remedies to delay the appearance of wrinkles and maintain youthful, glowing skin. These recipes combine antioxidant-rich ingredients with essential vitamins to nourish your skin and protect against aging factors.
    </p>
  </div>
  <Recipes
    recipeName="Matcha Tea"
    image = {matcha}
    description="Matcha tea is packed with antioxidants, including chlorophyll and polyphenols, far more than regular green tea. It stimulates elastin production, improves blood circulation, and protects skin from UV damage."
    ingName1="1 teaspoon matcha powder"
    ingDescription1="Rich in antioxidants to fight free radicals and promote skin health."
    ingName2="1 cup hot water"
    ingDescription2="Base for brewing matcha tea."
    instructions="1. Add 1 teaspoon of matcha powder to a bowl.
                 2. Pour hot water over the matcha and whisk until frothy.
                 3. Drink daily to enhance skin elasticity and protect against aging."
 />
    <br/>

<Recipes
    recipeName="Turmeric Tea"
    image = {turmericTea}
    description="Turmeric tea, with its powerful anti-inflammatory properties, helps combat acne and reduce wrinkles. Regular consumption improves skin tone and boosts radiance."
    ingName1="1 teaspoon turmeric powder"
    ingDescription1="Contains curcumin, an antioxidant that fights skin aging."
    ingName2="1 cup hot water"
    ingDescription2="For brewing the tea."
    ingName3="Honey (optional)"
    ingDescription3="To add sweetness and enhance skin hydration."
    instructions="1. Mix turmeric powder with hot water.
                 2. Stir well and let it steep for 5 minutes.
                 3. Add honey if desired and enjoy warm."
 />
    <br/>

<Recipes
    recipeName="Licorice Root Juice"
    image = {licorice}
    description="Licorice root is rich in antioxidants, making it a potent remedy for delaying wrinkles and protecting skin from free radical damage."
    ingName1="1 tablespoon licorice root powder"
    ingDescription1="Antioxidant-rich to fight premature aging."
    ingName2="1 cup hot water"
    ingDescription2="For preparing the infusion."
    instructions="1. Add licorice root powder to hot water.
                 2. Let it steep for 10 minutes.
                 3. Strain and drink once a day for visible skin benefits."
 />
    <br/>

<Recipes
    recipeName="Neem and Honey Tea"
    image = {neamTeaWithHoney}
    description="Neem leaves combined with honey offer antibacterial and anti-inflammatory benefits, reducing wrinkles and hydrating the skin effectively."
    ingName1="1-2 teaspoons dried neem leaves"
    ingDescription1="Fights bacteria and enhances skin healing."
    ingName2="1 teaspoon honey"
    ingDescription2="Deeply hydrates and promotes collagen production."
    ingName3="1 cup hot water"
    ingDescription3="Base for the herbal tea."
    instructions="1. Add neem leaves to hot water and let it simmer for 20 minutes.
                 2. Strain the tea and mix in honey.
                 3. Drink warm, once daily, for maximum benefits."
 />
  </details>
  </div>
  </div>
  <div class="main-container">
      <div class="main-frame">
          <h1>The Impact of Healthy and Clean Nutrition on Body Health</h1>
          
          <details>
<summary>The Impact of Nutrition on the Immune System</summary>
<div class="container">
  <p>
    A healthy diet plays a vital role in strengthening the body's immune system. Consuming a balanced diet rich in vitamins, minerals, and antioxidants boosts the body's ability to fight infections and diseases. Nutrients such as vitamin C, vitamin D, zinc, and omega-3 fatty acids enhance the production and function of immune cells, while also reducing inflammation. By supporting the immune system with the right nutrients, clean nutrition promotes overall health and improves the body's resilience against illnesses.
  </p>
</div>
<Recipes
    recipeName="Refreshing Green Tea Recipe"
    image = {greenTea}
    description="Green tea is not just a refreshing beverage; it's a powerful ally for your immune system. Packed with antioxidants and bioactive compounds, it helps protect your body against infections, boosts overall immunity, and supports your health. This simple recipe will show you how to prepare a perfect cup of green tea with added flavors for maximum enjoyment."
    ingName1="1 cup water"
    ingDescription1="The base for brewing your green tea."
    ingName2="1 green tea bag or 1 tsp loose green tea"
    ingDescription2="Rich in antioxidants and the star of the recipe."
    ingName3="1 tsp honey (optional)"
    ingDescription3="Adds natural sweetness and enhances the flavor."
    ingName4="A slice of lemon (optional)"
    ingDescription4="For a citrusy twist and a boost of Vitamin C."
    instructions="1. Heat 1 cup of water until it reaches a simmer (not boiling).
                 2. Pour the hot water into a cup and add the green tea bag or loose green tea.
                 3. Let the tea steep for 3-5 minutes, depending on your desired strength.
                 4. Remove the tea bag or strain the loose tea.
                 5. Stir in honey if desired, and add a slice of lemon for extra flavor.
                 6. Serve hot or let it cool and pour over ice for a refreshing iced tea."
 />
    <br/>

<Recipes
    recipeName="Hot Turmeric Drink"
    image = {turmericTea}
    description="Turmeric offers many health benefits, especially in boosting immunity when consumed regularly. It helps prevent colds and various diseases. This drink is made with ingredients like unsweetened milk, turmeric, ginger, and cinnamon."
    ingName1="1 cup unsweetened milk"
    ingDescription1="Provides a base for the turmeric drink and hydrates the body."
    ingName2="1 tsp turmeric"
    ingDescription2="Boosts immunity and helps prevent illnesses."
    ingName3="1/2 tsp ginger"
    ingDescription3="Soothes and reduces inflammation in the body."
    ingName4="1/2 tsp cinnamon"
    ingDescription4="Supports digestive health and enhances flavor."
    instructions="1. In a saucepan, heat the milk with turmeric, ginger, and cinnamon.
                 2. Stir the mixture until it is well combined and heated through.
                 3. Pour into a cup and enjoy the soothing, immune-boosting drink.
                 4. Drink once a day for best results.
                 5. Be cautious with quantities, as excessive consumption may lead to discomfort or digestive issues."
 />
    <br/>

<Recipes
    recipeName="Tamarind Drink"
    image = {tamarind}
    description="Tamarind is a fruit with a sweet and sour taste, rich in vitamins and fiber. It helps prevent heart diseases, strengthens immunity, and prevents premature skin aging. It is recommended to consume it in moderation to avoid excess calorie intake."
    ingName1="1/4 cup tamarind pulp"
    ingDescription1="Rich in vitamins and antioxidants to boost immunity and skin health."
    ingName2="2 cups water"
    ingDescription2="Dilutes the tamarind pulp to create a refreshing drink."
    ingName3="1-2 tbsp honey (optional)"
    ingDescription3="Sweetens the drink naturally and adds additional health benefits."
    instructions="1. Soak the tamarind pulp in water for 30 minutes.
                 2. After soaking, mash the pulp to extract the juice.
                 3. Strain the mixture to remove seeds and fiber.
                 4. Add honey to taste and stir until well mixed.
                 5. Serve chilled or at room temperature for a refreshing drink.
                 6. Enjoy this drink in moderation as part of a healthy diet."
 />
    <br/>

<Recipes
    recipeName="Orange & Grapefruit Juice"
    image = {grapefruit}
    description="Oranges and grapefruits are major sources of vitamin C, which fights colds and flu. It is a powerful antioxidant that boosts the immune system and protects the body from diseases."
    ingName1="1 orange"
    ingDescription1="Rich in vitamin C to enhance the immune system and fight free radicals."
    ingName2="1/2 grapefruit"
    ingDescription2="Contains antioxidants and vitamin C to support overall health and immunity."
    ingName3="1 tbsp honey (optional)"
    ingDescription3="Adds natural sweetness and additional immune-boosting properties."
    instructions="1. Peel and segment the orange and grapefruit.
                 2. Place the segments in a blender and blend until smooth.
                 3. If desired, add honey to taste and blend again.
                 4. Pour the juice into a glass and serve chilled.
                 5. Enjoy this refreshing drink daily to boost your immune system."
 />
    <br/>

<Recipes
    recipeName="Lemon & Ginger Drink"
    image = {lemonAndGinger}
    description="Warm lemon juice with ginger slices is highly effective in treating colds and boosting immunity. You can add a little turmeric for additional antioxidant benefits and to detoxify the body."
    ingName1="1 lemon"
    ingDescription1="Lemon provides a high dose of vitamin C, which boosts immunity and aids in detoxification."
    ingName2="1-inch ginger slice"
    ingDescription2="Ginger has anti-inflammatory properties and helps soothe the throat and reduce congestion."
    ingName3="1/2 tsp turmeric (optional)"
    ingDescription3="Turmeric enhances the drink's antioxidant properties and supports detoxification."
    instructions="1. Slice the lemon and ginger.
                 2. Add the lemon slices and ginger to a cup of warm water.
                 3. If using, add turmeric to the mixture.
                 4. Stir the ingredients and let them steep for 5 minutes.
                 5. Drink this warm beverage to help with cold symptoms and boost immunity."
 />
</details>

<details>
    <summary>Drinks to Boost Memory and Focus</summary>
    <div class="container">
        <p>
            Discover a variety of drinks that help enhance memory and focus. These drinks are easy to prepare and provide your body with the energy needed for an active mind.
        </p>
    </div>
    <Recipes
    recipeName="Fresh Mint Drink"
    image = {mint}
    description="Mint helps reduce stress and fatigue while improving focus and performance. It contains essential nutrients such as manganese, iron, calcium, and vitamin A."
    ingName1="2 cups of water"
    ingDescription1="The base for the mint drink."
    ingName2="Fresh mint leaves"
    ingDescription2="The key ingredient providing a refreshing taste and health benefits."
    instructions="1. Boil 2 cups of water.
                 2. Add fresh mint leaves to the boiling water.
                 3. Cover the mixture and let it steep for 5 minutes.
                 4. Strain and serve warm."
 />
    <br/>

<Recipes
    recipeName="Avocado Juice"
    image = {avocado2CleanEating}
    description="Avocado promotes blood flow to the brain, enhancing memory and focus. It is also rich in fiber, keeping you full for longer periods."
    ingName1="1 ripe avocado"
    ingDescription1="Packed with healthy fats and nutrients for better brain health."
    ingName2="1 cup of milk (or plant-based alternative)"
    ingDescription2="A smooth base to blend with the avocado."
    ingName3="1 tsp honey (optional)"
    ingDescription3="Adds natural sweetness and enhances the flavor."
    instructions="1. Scoop out the avocado and blend it with milk until smooth.
                 2. Add honey if desired and blend again.
                 3. Serve chilled."
 />
    <br/>

<Recipes
    recipeName="Dark Chocolate Drink"
    image = {chocolateDrink}
    description="Dark chocolate and cocoa powder are rich in flavonoids, caffeine, and antioxidants, which boost memory and focus while protecting the brain from age-related memory loss."
    ingName1="2 tbsp cocoa powder"
    ingDescription1="The base flavor of the drink, rich in antioxidants."
    ingName2="1 cup of milk"
    ingDescription2="The creamy base for the drink."
    ingName3="1 tsp sugar or sweetener (optional)"
    ingDescription3="Sweetens the drink to taste."
    instructions="1. Heat the milk in a saucepan.
                 2. Stir in cocoa powder and sweetener until dissolved.
                 3. Serve warm."
 />
    <br/>

<Recipes
    recipeName="Berry Drink"
    image = {cranberry}
    description="Berry drinks protect against Alzheimer’s disease and enhance memory and focus for up to five hours. Perfect as a breakfast addition or a refreshing lunch beverage."
    ingName1="1 cup mixed berries (blueberries, strawberries, raspberries)"
    ingDescription1="A blend of antioxidant-rich berries to boost brain health."
    ingName2="1 cup water or coconut water"
    ingDescription2="Provides a light base to blend the berries."
    instructions="1. Blend the mixed berries with water until smooth.
                 2. Strain if necessary and serve chilled."
 />
    <br/>

<Recipes
    recipeName="Banana, Date & Almond Smoothie"
    image = {BananaDateandAlmondSmoothie}
    description="Packed with calcium, potassium, zinc, and vitamins, this smoothie boosts mental activity and enhances memory, especially in children, thanks to its potassium-rich content."
    ingName1="1 banana"
    ingDescription1="Rich in potassium, which helps in boosting brain function."
    ingName2="2 dates (pitted)"
    ingDescription2="Adds natural sweetness and fiber for digestive health."
    ingName3="1 tbsp almonds"
    ingDescription3="Provides healthy fats and vitamin E for brain health."
    ingName4="1 cup milk"
    ingDescription4="Smooth base for the smoothie."
    ingName5="1 tsp honey"
    ingDescription5="Sweetens the smoothie and adds extra nutrients."
    instructions="1. Blend milk, banana, dates, and almonds until smooth.
                 2. Add honey and blend again.
                 3. Serve immediately."
 />
    </details>

    <details>
    <summary>Drinks to Boost Energy and Vitality</summary>
    <div class="container">
        <p>
            Explore a selection of drinks designed to increase energy and enhance vitality. These beverages are packed with essential nutrients to keep your body active throughout the day.
        </p>
    </div>
    <Recipes
    recipeName="Milk"
    image = {milkAndTurmeric}
    description="Milk provides natural lactose, a carbohydrate that supplies energy. A single cup offers 13 essential nutrients, including protein, calcium, vitamins A, D, and B complex."
    ingName1="1 cup milk"
    ingDescription1="The base of the drink, packed with nutrients."
    instructions="1. Pour 1 cup of milk into a glass.
                 2. Optionally, you can add chocolate syrup or hot cocoa mix for a flavored milk.
                 3. Serve chilled or warm, as desired."
 />
    <br/>

<Recipes
    recipeName="Coffee"
    image = {coffee1}
    description="Coffee, rich in caffeine and polyphenol antioxidants, is a leading drink for boosting energy. It enhances alertness and reduces fatigue, increasing productivity."
    ingName1="1 cup brewed coffee"
    ingDescription1="The base of the coffee, packed with caffeine and antioxidants."
    ingName2="1 tsp sugar (optional)"
    ingDescription2="Adds sweetness if desired."
    ingName3="1/4 cup milk (optional)"
    ingDescription3="For a creamier texture, add milk."
    instructions="1. Brew a fresh cup of coffee.
                 2. Add sugar and/or milk to taste.
                 3. Serve hot and enjoy your energy boost."
 />
    <br/>

<Recipes
    recipeName="Pineapple and Ginger Juice"
    image = {pineappleAndGinger}
    description="Pineapple offers natural sugars for an energy boost, while ginger enhances circulation and vitality. This drink is packed with vitamin A, vitamin C, and bromelain."
    ingName1="Half a pineapple"
    ingDescription1="Rich in vitamin C and bromelain for digestion."
    ingName2="Small piece of ginger"
    ingDescription2="Enhances circulation and vitality."
    ingName3="1 cup water"
    ingDescription3="Dilutes the ingredients and helps blend them smoothly."
    ingName4="Juice of 1 lemon"
    ingDescription4="Adds extra vitamin C and tangy flavor."
    instructions="1. Chop half a pineapple and a small piece of ginger.
                 2. Blend the ingredients with 1 cup of water.
                 3. Strain and add lemon juice.
                 4. Serve chilled.
                 <strong>Note:</strong> Pregnant individuals or those with heart or diabetes conditions should consult a doctor before consuming this drink."
 />
    <br/>

<Recipes
    recipeName="Black Tea"
    image = {blackTea}
    description="Black tea contains caffeine, albeit in lower concentrations than coffee. It boosts energy and can be complemented with milk or honey for added benefits."
    ingName1="1 cup water"
    ingDescription1="The base for brewing the tea."
    ingName2="1 black tea bag or 1 tsp loose black tea"
    ingDescription2="The key ingredient for a rich, caffeinated brew."
    ingName3="1 tsp honey (optional)"
    ingDescription3="For added sweetness, if desired."
    instructions="1. Boil 1 cup of water.
                 2. Pour the hot water over the black tea bag or loose tea.
                 3. Let the tea steep for 3-5 minutes.
                 4. Remove the tea bag or strain the loose tea.
                 5. Add honey for sweetness, if desired.
                 6. Serve hot."
 />
    <br/>

<Recipes
    recipeName="Coconut Water Smoothie"
    image = {coconutWater}
    description="Coconut water is an excellent hydrating drink enriched with electrolytes and potassium, supporting brain and nerve function."
    ingName1="1/2 cup coconut water"
    ingDescription1="Provides hydration and electrolytes."
    ingName2="1/2 cup milk"
    ingDescription2="For creaminess and added nutrients."
    ingName3="1/2 banana"
    ingDescription3="For natural sweetness and creaminess."
    ingName4="1/2 orange"
    ingDescription4="Adds citrusy freshness and vitamin C."
    instructions="1. Blend 1/2 cup coconut water, 1/2 cup milk, 1/2 banana, and 1/2 orange.
                 2. Serve immediately as a refreshing, nutrient-packed smoothie."
 />
    </details>

    <details>
    <summary>Detox Drinks to Cleanse the Body</summary>
    <div class="container">
    <p>
        Detox drinks are extracts made from fruits and vegetables that help deliver essential nutrients. They aid in:
        <ul>
          <li>Increasing daily intake of fruits and vegetables through smoothies or fresh juices.</li>
          <li>Providing a healthy, satisfying alternative to high-calorie snacks.</li>
          <li>Reducing inflammation, improving skin health, and boosting metabolism for efficient toxin removal.</li>
        </ul>
      </p>
    </div>
{/* Chia Seed and Aloe Vera Drink */}
<Recipes
        recipeName="Chia Seed and Aloe Vera Drink"
        image = {ChiaSeedandAloeVeraDrink}
        description="A hydrating drink rich in fiber and nutrients, supporting digestion and skin health."
        ingName1="1 liter of water"
        ingDescription1="Hydrates the body."
        ingName2="1/2 cup aloe vera juice"
        ingDescription2="Soothes the digestive system and supports skin health."
        ingName3="1 tsp chia seeds"
        ingDescription3="Rich in omega-3 fatty acids and fiber."
        instructions="1. Add water, aloe vera juice, and chia seeds to a container.2. Let the mixture sit for 10 minutes.3. Add lemon juice, stir well, and serve."
      />
    <br/>

      {/* Ginger, Honey, and Lemon Drink */}
      <Recipes
        recipeName="Ginger, Honey, and Lemon Drink"
        image = {lemonHoneyGinger}
        description="This drink boosts immunity, improves digestion, and has anti-inflammatory properties."
        ingName1="1 tsp grated ginger"
        ingDescription1="Improves digestion and boosts immunity."
        ingName2="1 tsp lemon juice"
        ingDescription2="Rich in vitamin C and aids digestion."
        ingName3="1/2 tsp honey"
        ingDescription3="Natural sweetener with anti-inflammatory properties."
        instructions="1. Heat the water to a boil, then add ginger and lemon juice.2. Let it steep for 5 minutes, then add honey and stir.3. Serve warm."
      />
    <br/>

      {/* Green Tea with Lemon */}
      <Recipes
        recipeName="Green Tea with Lemon"
        image = {lemonAndGreenTea}
        description="A metabolism-boosting drink that aids in fat burning, especially around the abdomen."
        ingName1="1 cup green tea"
        ingDescription1="Rich in antioxidants and supports metabolism."
        ingName2="Juice of half a lemon"
        ingDescription2="Detoxifies the body and supports fat burning."
        ingName3="Small piece of ginger (optional)"
        ingDescription3="Enhances digestion and boosts metabolism."
        instructions="1. Mix green tea with lemon juice.2. Add ginger for enhanced benefits and serve warm or chilled."
      />
    <br/>

      {/* Beetroot and Mint Juice */}
      <Recipes
        recipeName="Beetroot and Mint Juice"
        image = {beetrootAndMint}
        description="A detoxifying drink that energizes and cleanses the body."
        ingName1="1 beetroot"
        ingDescription1="Rich in antioxidants and helps detoxify the body."
        ingName2="Handful of mint leaves"
        ingDescription2="Soothes the digestive system and provides a refreshing taste."
        ingName3="Pinch of salt"
        ingDescription3="Balances electrolytes and enhances flavor."
        instructions="1. Blend all ingredients in a blender.2. Serve chilled with ice."
      />
    <br/>

      {/* Pineapple and Lemon Juice */}
      <Recipes
        recipeName="Pineapple and Lemon Juice"
        image = {pineappleAndLemon}
        description="A refreshing detox drink with natural sugars and hydration properties."
        ingName1="1 pineapple, peeled and cubed"
        ingDescription1="Provides hydration and vitamin C."
        ingName2="2 cups water"
        ingDescription2="Hydrates and helps extract nutrients from the fruit."
        ingName3="Juice of 1 lemon"
        ingDescription3="Boosts vitamin C and detoxifies the body."
        instructions="1. Blend pineapple and lemon juice.2. Boil water with sugar and honey, then add to the pineapple mixture.3. Chill in the refrigerator and serve cold."
      />
</details>

<details>
    <summary>Iron-Boosting Drinks for Your Health</summary>
    <div class="container">
        <p>
            Iron deficiency often leads to anemia. While supplements are recommended, increasing your intake of iron-rich beverages can help restore iron levels. These drinks are particularly important for women due to iron loss during menstruation. </p>
           <p> Here are iron-rich beverages to help boost your hemoglobin levels:
        </p>
    </div>
    <Recipes
  recipeName="Prune Juice"
  image = {PruneJuice}
  description="A nutrient-rich drink providing 2.8 mg of iron per cup, offering 17% of the daily requirement."
  ingName1="Prunes"
  ingDescription1="Rich in iron, fiber, and antioxidants."
  ingName2="Water"
  ingDescription2="Hydrates and helps blend the ingredients."
  ingName3="Optional sweetener"
  ingDescription3="Sweeten to taste with honey or agave."
  instructions="1. Soak prunes in water for 4 hours.2. Blend prunes with water until smooth.3. Strain the juice and serve chilled."
/>
<br/>

<Recipes
  recipeName="Apricot Juice"
  image = {apricot}
  description="Regular consumption prevents anemia and combats fatigue."
  ingName1="Apricots"
  ingDescription1="Rich in Vitamin C, potassium, and iron."
  ingName2="Water"
  ingDescription2="Helps to blend and hydrate."
  ingName3="Optional sweetener"
  ingDescription3="Honey or sugar to taste."
  instructions="1. Wash and halve apricots to remove seeds.2. Blend in a juicer or blender until smooth.3. Store in airtight glass containers in the refrigerator for up to 4 days."
/>
<br/>

<Recipes
  recipeName="Beetroot Juice"
  image = {beetroot}
  description="Packed with iron, folate, manganese, and Vitamin C for improved absorption."
  ingName1="Beetroot"
  ingDescription1="Rich in iron, folate, and antioxidants."
  ingName2="Water"
  ingDescription2="Blends the ingredients smoothly."
  ingName3="Optional lemon juice"
  ingDescription3="Adds a citrusy flavor and aids digestion."
  instructions="1. Peel and chop beetroot into chunks.2. Blend beetroot with water until smooth.3. Strain the juice and serve chilled."
/>
<br/>

<Recipes
  recipeName="Hibiscus Tea"
  image = {HibiscusTea}
  description="Rich in iron, Vitamin C, and other essential minerals like potassium and zinc."
  ingName1="Dried hibiscus flowers"
  ingDescription1="Packed with Vitamin C and antioxidants."
  ingName2="Water"
  ingDescription2="Base for brewing the tea."
  ingName3="Optional honey or sweetener"
  ingDescription3="Sweetens the tea to taste."
  instructions="1. Boil 1 liter of water and add 2 tbsp dried hibiscus flowers.2. Let steep for 30 minutes to enhance flavor.3. Add ice, honey, and optional ingredients like fruits or cinnamon."
/>
<br/>

<Recipes
  recipeName="Sesame and Date Drink"
  image = {sesameANDdate}
  description="A creamy blend rich in iron and nutrients for a healthy boost."
  ingName1="Sesame seeds"
  ingDescription1="High in calcium, iron, and healthy fats."
  ingName2="Dates"
  ingDescription2="Rich in fiber, potassium, and natural sweetness."
  ingName3="Milk"
  ingDescription3="Provides creaminess and additional nutrients."
  instructions="1. Add milk and honey to a blender.
  2. Mix in soaked dates and sesame seeds.
  3. Blend until smooth and creamy."
/>
</details>
</div>
          </div>
</div>
    )
};   

export default CleanEatClinic;
