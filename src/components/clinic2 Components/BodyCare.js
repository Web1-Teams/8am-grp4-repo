import React from "react";
import Recipes from "./Recipes";
import IntroSection from "./IntroSection";
import image1 from "../../assests/Images/imagesForC2/coconuttoil.jpg";
import image2 from "../../assests/Images/imagesForC2/honeyandavocado.jpg";
import image3 from "../../assests/Images/imagesForC2/honeyandyogurt.jpg";
import image4 from "../../assests/Images/imagesForC2/sheabutter.jpg";
import image5 from "../../assests/Images/imagesForC2/aloeVeraa.jpg";
import image6 from "../../assests/Images/imagesForC2/glycerin and lemon.webp";
import image7 from "../../assests/Images/imagesForC2/honeyandoats.webp";
import image8 from "../../assests/Images/imagesForC2/milk.jpg";
import image9 from "../../assests/Images/imagesForC2/coffee.webp";
import image10 from "../../assests/Images/imagesForC2/massage.webp";
import image11 from "../../assests/Images/imagesForC2/epsomsaltbath.jpeg";
import image12 from "../../assests/Images/imagesForC2/clay.jpg";
import image13 from "../../assests/Images/imagesForC2/exercises.webp";
import image14 from "../../assests/Images/imagesForC2/milkandturmeric.jpg";
import image15 from "../../assests/Images/imagesForC2/potato.jpg";
import image16 from "../../assests/Images/imagesForC2/greentea2.jpg";
import image17 from "../../assests/Images/imagesForC2/oatsandyogurt.webp";
import image18 from "../../assests/Images/imagesForC2/papayaandhoney.jpg";
import image19 from "../../assests/Images/imagesForC2/cucumberandlemonjuice.jpg";
import image20 from "../../assests/Images/imagesForC2/warmbath.jpg";
import image21 from "../../assests/Images/imagesForC2/sheabutterandalmondoil.webp";
import image22 from "../../assests/Images/imagesForC2/sugarandoliveoilscrub.webp";
import image23 from "../../assests/Images/imagesForC2/Gelatinandaloevera.webp";
import image24 from "../../assests/Images/imagesForC2/Whitevinegar.jpg";
import image25 from "../../assests/Images/imagesForC2/coconuttoil.jpg";
import image26 from "../../assests/Images/imagesForC2/appleCiderVinegar.webp";
import image27 from "../../assests/Images/imagesForC2/Sage.jpg";
import image28 from "../../assests/Images/imagesForC2/Lemonandbakingsoda.jpeg";
import image29 from "../../assests/Images/imagesForC2/Blackteabags.jpeg";
import image30 from "../../assests/Images/imagesForC2/coconutoil.jpg";
import image31 from "../../assests/Images/imagesForC2/tomatojuice.jpg";
import image32 from "../../assests/Images/imagesForC2/Whitesandalwoodpowder.jpg";
import image33 from "../../assests/Images/imagesForC2/Wheatjuice.jpg";
import image34 from "../../assests/Images/imagesForC2/teaTreeeOil.jpeg";
import image35 from "../../assests/Images/imagesForC2/aloeVeraa.jpg";
import image36 from "../../assests/Images/imagesForC2/Sheabutterandcocoabutter.jpeg";
import image37 from "../../assests/Images/imagesForC2/oliveandalmondsoil.webp";
import image38 from "../../assests/Images/imagesForC2/honeyandsugerscrub.webp";
import image39 from "../../assests/Images/imagesForC2/CentellaAsiatica.jpg";
import image40 from "../../assests/Images/imagesForC2/appleCiderVinegar.webp";
import image41 from "../../assests/Images/imagesForC2/honeyAndLemon.jpg";
import image42 from "../../assests/Images/imagesForC2/oatsandmilk.webp";
import image43 from "../../assests/Images/imagesForC2/turmericandyogurt.jpeg";
import image44 from "../../assests/Images/imagesForC2/lemonandalmondsoil.webp";
import image45 from "../../assests/Images/imagesForC2/Ricewater.gif";
import image46 from "../../assests/Images/imagesForC2/Honeyandcinnamon.jpg";
import image47 from "../../assests/Images/imagesForC2/bakingsoda.jpg";
import image48 from "../../assests/Images/imagesForC2/teaTreeeOil.jpeg";
import image49 from "../../assests/Images/imagesForC2/appleCiderVinegar.webp";
import image50 from "../../assests/Images/imagesForC2/aloeVeraa.jpg";
import image51 from "../../assests/Images/imagesForC2/greenTea.png";


const CleanEatIntro = (
  <div>
    <p className="intro-subtitle">
      Nourish your body, and it will reward you with vibrant hair, glowing skin, and boundless energy. <br />
      Step into a world where every <span className="intro-highlight">meal fuels beauty</span>, every bite supports strength, <br />
      and every choice leads you closer to your healthiest self.
    </p>
    <p className="intro-subtitle">
      Your diet isn’t just about food – it’s about <span className="intro-highlight">health</span>, radiance, and the foundation of your inner and outer beauty.
    </p>
    <p className="intro-subtitle">
      Glow brighter, feel stronger, and live better – because true beauty starts from within. Let’s redefine your wellness journey.
    </p>
  </div>
);



const BodyCare = (props) => {
    return (
        <div>

       <IntroSection 
  title="Radiance starts here"
  subtitle1="Because your body deserves care as unique as you are."
  subtitle2="Step into a haven of wellness where every "
  specific1="touch nurtures vitality"
  subtitle3=", every treatment is a celebration, and every moment brings you closer to total rejuvenation."
  subtitle4="Your body isn’t just a body – it’s "
  specific2="strength"
  subtitle5=", grace, and the essence of your inner beauty."
  subtitle6="Feel empowered, glow naturally, and embrace the care you deserve – because body care is self-love. Let’s make your transformation unforgettable."
/>

            <details>
        <summary>Dryness treatment</summary>
        <div className="container">
        <p> Discover nourishing remedies to combat dryness and restore your skin's natural moisture. These simple and effective recipes are designed to hydrate and revitalize, leaving your skin soft, smooth, and radiant.</p>
        </div>
        <Recipes 
  recipeName="Coconut Oil Moisturizer"
  image={image1}
  description="Coconut oil is a great option for moisturizing the skin. It contains natural fats that prevent moisture loss and has antibacterial and anti-inflammatory properties, making it ideal for cracked and dry skin."
  ingName1="A few drops of coconut oil"
  ingDescription1="Coconut oil contains natural fats that prevent moisture loss and has antibacterial and anti-inflammatory properties, making it ideal for cracked and dry skin."
  instructions="1. Warm a few drops of coconut oil in your hands.
   2. Massage the oil onto dry skin before bedtime.
    3. Leave it on overnight to let the skin absorb its nutrients."
/>
<br/>
<Recipes 
  recipeName="Avocado and Honey Mask"
  image={image2}
  description="Avocado is rich in monounsaturated fats and vitamin E, which deeply nourish dry skin. It also promotes skin cell renewal and improves skin elasticity."
  ingName1="1/2 avocado"
  ingDescription1="Avocado is rich in monounsaturated fats and vitamin E, which deeply nourish and hydrate dry skin."
  ingName2="1 tsp olive oil"
  ingDescription2="Olive oil provides extra hydration and helps lock in moisture."
  ingName3="1 tbsp honey"
  ingDescription3="Honey is a natural humectant that locks in moisture and soothes the skin."
  instructions="1. Mash 1/2 avocado and mix it with olive oil and honey.
   2. Apply the mixture to your skin and leave it on for 15-20 minutes.
    3. Rinse it off with water."
/>
<br/>
<Recipes 
  recipeName="Yogurt and Honey Scrub"
  image={image3}
  description="Yogurt contains lactic acid, which gently exfoliates dry skin and removes dead cells. Its natural fats provide hydration, while honey acts as a powerful natural moisturizer, drawing moisture from the air to the skin. Honey also has antibacterial properties that protect the skin from infections caused by dryness and cracking."
  ingName1="1/2 cup yogurt"
  ingDescription1="Yogurt contains lactic acid, which gently exfoliates the skin and helps remove dead cells, while its natural fats provide hydration."
  ingName2="2 tsp honey"
  ingDescription2="Honey is a natural humectant that locks in moisture and has antibacterial properties to protect the skin."
  ingName3="3 tbsp sugar"
  ingDescription3="Sugar acts as a gentle exfoliant, helping to remove dead skin cells and leave the skin soft and smooth."
  instructions="1. Mix all the ingredients well in a bowl.
   2. Use the mixture as a scrub by massaging it gently onto your skin.
    3. Wash it off with cold water after 5-6 minutes."
/>
<br/>
<Recipes 
  recipeName="Shea Butter Moisturizer"
  image={image4}
  description="Shea butter contains vitamins A and E, which nourish the skin and restore its natural moisture barrier. It is ideal for deep hydration, especially during winter."
  ingName1="Shea butter"
  ingDescription1="Shea butter is rich in vitamins A and E, providing intense nourishment and restoring the skin's natural moisture barrier."
  instructions="1. Apply a thick layer of shea butter to dry areas of the skin.
   2. Cover the area with a clean cloth and leave it on overnight to allow the skin to absorb the nutrients."
/>
<br/>
<Recipes 
  recipeName="Aloe Vera Gel"
  image={image5}
  description="Aloe vera gel is known for its soothing and anti-inflammatory properties. It contains enzymes and nutrients that help hydrate the skin and promote cell renewal."
  ingName1="Pure aloe vera gel"
  ingDescription1="Aloe vera gel is packed with soothing enzymes and nutrients that hydrate the skin and promote cell regeneration."
  instructions="1. Apply the pure gel to dry skin.
   2. Leave it on until fully absorbed."
/>
<br/>
<Recipes 
  recipeName="Glycerin and Lemon Juice Mix"
  image={image6}
  description="Glycerin is a powerful natural moisturizer that draws moisture to the skin. Lemon juice contains vitamin C, which enhances skin brightness and balances moisture levels. Rose water adds softness and soothes irritation."
  ingName1="2 tbsp lemon juice"
  ingDescription1="Lemon juice is rich in vitamin C, which brightens the skin and balances moisture levels."
  ingName2="1 tbsp glycerin"
  ingDescription2="Glycerin acts as a natural humectant, attracting moisture to the skin."
  ingName3="3 tbsp rose water"
  ingDescription3="Rose water soothes irritation, adds softness, and enhances hydration."
  instructions="1. Mix all ingredients together in a bowl.
   2. Use a clean cotton pad to apply the mixture to your skin for hydration and cleansing."
/>
<br/>
<Recipes 
  recipeName="Oatmeal and Honey Paste"
  image={image7}
  description="Oatmeal acts as a soothing agent for dry and sensitive skin. It contains natural anti-inflammatory compounds (beta-glucans) that help reduce irritation and lock in moisture."
  ingName1="2 tbsp oatmeal"
  ingDescription1="Oatmeal is a natural soothing agent with anti-inflammatory properties that help calm irritated skin and retain moisture."
  ingName2="1 tbsp honey"
  ingDescription2="Honey is a natural moisturizer that locks in hydration and soothes the skin."
  ingName3="A small amount of water"
  ingDescription3="Water is used to adjust the consistency of the paste for easy application."
  instructions="1. Mix all the ingredients together to form a paste.
   2. Apply the paste to your skin and leave it on for 15 minutes.
    3. Rinse it off with water."
/>
<br/>
<Recipes 
  recipeName="Milk Skin Soother"
  image={image8}
  description="Milk contains natural fats and proteins that help soothe dry and irritated skin. Additionally, lactic acid acts as a gentle exfoliant, removing dead skin cells and hydrating the skin."
  ingName1="1 cup warm milk"
  ingDescription1="Warm milk contains natural fats and proteins that soothe and hydrate dry skin, along with lactic acid for gentle exfoliation."
  ingName2="Dry cotton pads"
  ingDescription2="Cotton pads are used to apply the milk to the skin."
  instructions="1. Dip a cotton pad into the warm milk and gently wipe it across your skin.
   2. Leave it on for 10 minutes, then rinse with cold water."
/>
<br/>
        </details>
        <br/>
        <details>
        <summary>Cellulite treatment</summary>
        <div className="container">
        <p> Discover effective remedies to reduce cellulite and improve your skin's texture. These easy-to-follow recipes are designed to nourish and firm your skin, leaving it smooth and radiant.</p>
        </div>
        <Recipes 
  recipeName="Coffee Scrub"
  image={image9}
  description="Caffeine stimulates blood circulation, exfoliates dead skin cells, and tightens the skin, helping to reduce the appearance of cellulite."
  ingName1="1/2 cup ground coffee"
  ingDescription1="Ground coffee helps exfoliate the skin, while caffeine stimulates circulation and tightens the skin."
  ingName2="1/4 cup brown sugar or sea salt"
  ingDescription2="Brown sugar or sea salt acts as a gentle exfoliant to remove dead skin cells."
  ingName3="1/4 cup warm coconut oil"
  ingDescription3="Warm coconut oil moisturizes the skin and helps bind the ingredients together."
  instructions="1. Mix all the ingredients together until you get a uniform mixture.
   2. Massage the scrub onto areas with cellulite in circular motions for 5-10 minutes.
    3. Rinse off with warm water. Repeat this scrub 2-3 times a week for noticeable results."
/>
<br/>
<Recipes 
  recipeName="Dry Brushing Massage"
  image={image10}
  description="Dry brushing improves blood circulation and promotes lymphatic drainage, reducing the appearance of cellulite."
  ingName1="Brush with natural bristles"
  ingDescription1="A brush with natural bristles is ideal for gently exfoliating the skin and stimulating blood flow."
  instructions="1. Clean the skin before showering.
   2. Start with gentle circular motions from the feet upward toward the heart.
    3. Continue for 5-10 minutes and repeat daily for the best results."
/>
<br/>
<Recipes 
  recipeName="Epsom Salt Bath"
  image={image11}
  description="An Epsom salt bath helps detoxify the body, soothe the skin, and improve circulation."
  ingName1="1/4 cup Epsom salt"
  ingDescription1="Epsom salt is known for its ability to relieve muscle tension and detoxify the body."
  ingName2="1/4 cup baking soda"
  ingDescription2="Baking soda helps soften the skin and enhances the detoxifying effects of the bath."
  ingName3="1/4 cup sea salt"
  ingDescription3="Sea salt adds minerals to the water and helps promote relaxation."
  ingName4="Few drops of essential oil (optional)"
  ingDescription4="Essential oils can provide additional soothing effects and fragrance for the bath."
  instructions="1. Add all the ingredients to warm water in the bathtub.
   2. Soak your body for 20 minutes, then gently pat your skin dry."
/>
<br/>
<Recipes 
  recipeName="Natural Clay Wrap"
  image={image12}
  description="Clay helps detoxify the skin and tighten it, reducing the appearance of cellulite."
  ingName1="2 tbsp clay"
  ingDescription1="Clay is known for its detoxifying properties and ability to tighten the skin."
  ingName2="2 tbsp olive oil"
  ingDescription2="Olive oil moisturizes and nourishes the skin."
  ingName3="Warm water to make a paste"
  ingDescription3="Warm water is used to mix the ingredients into a smooth paste."
  instructions="1. Mix the ingredients together until a smooth paste forms.
   2. Apply the mixture to areas affected by cellulite.
    3. Wrap the skin with plastic wrap and leave it for 30 minutes.
     4. Rinse off with warm water. Repeat once a week for best results."
/>
<br/>
<Recipes 
  recipeName="Exercise"
  image={image13}
  description="Improving muscle strength and reducing fat under the skin helps reduce the appearance of cellulite."
  ingName1="Squats"
  ingDescription1="Squats help strengthen the legs and glutes while improving muscle tone."
  ingName2="Lunges"
  ingDescription2="Lunges target the lower body muscles, helping to firm and tone the legs and buttocks."
  ingName3="Walking and cycling"
  ingDescription3="Walking and cycling are excellent cardio exercises that help burn fat and improve circulation."
  instructions="Note: Exercise regularly (3-5 times a week) to achieve sustainable results."
/>

<br/>

        </details>
        <br/>
        <details>
        <summary>Pigmentation treatment</summary>
        <div className="container">
        <p>Discover natural remedies to reduce pigmentation and achieve an even skin tone. These simple recipes are designed to brighten and rejuvenate your skin, leaving it smooth and radiant.</p>
        </div>
        <Recipes 
  recipeName="Turmeric and Milk"
  image={image14}
  description="Turmeric is rich in antioxidants and has anti-inflammatory properties that help lighten dark spots."
  ingName1="1 tsp turmeric"
  ingDescription1="Turmeric is known for its antioxidant and anti-inflammatory benefits."
  ingName2="2 tsp milk"
  ingDescription2="Milk helps soothe and nourish the skin while enhancing the turmeric's effects."
  instructions="1. Mix the ingredients together to form a paste.
   2. Apply the paste to the affected areas for 15-20 minutes.
    3. Rinse off with warm water. Repeat 2-3 times a week for best results."
/>
<br/>
<Recipes 
  recipeName="Potato"
  image={image15}
  description="Potatoes contain natural bleaching agents that help lighten pigmentation."
  ingName1="1 potato, sliced thinly"
  ingDescription1="Potato slices contain enzymes that help lighten skin pigmentation."
  instructions="1. Place the potato slices on your skin and gently rub them for 5-10 minutes.
   2. Leave the juice on your skin for an additional 10 minutes before rinsing with water."
/>
<br/>
<Recipes 
  recipeName="Green Tea"
  image={image16}
  description="Green tea contains antioxidants that reduce melanin production in the skin."
  ingName1="1 cup of green tea"
  ingDescription1="Green tea is rich in antioxidants that help lighten pigmentation."
  instructions="1. Prepare a cup of green tea and let it cool.
   2. Soak a cotton pad in the tea and apply it to the pigmented areas for 10-15 minutes, then rinse with water."
/>
<br/>
<Recipes 
  recipeName="Yogurt and Oats"
  image={image17}
  description="Yogurt contains lactic acid which brightens the skin, while oats act as a natural exfoliator."
  ingName1="2 tablespoons of yogurt"
  ingDescription1="Yogurt is rich in lactic acid that helps brighten the skin."
  ingName2="1 tablespoon of oats"
  ingDescription2="Oats work as a natural exfoliant for smooth skin."
  instructions="1. Mix the yogurt and oats well.
   2. Apply the mixture to the skin for 10-15 minutes, then rinse with lukewarm water.
    3. Wrap the skin with plastic wrap and leave it for 30 minutes."
/>
<br/>
<Recipes 
  recipeName="Papaya and Honey"
  image={image18}
  description="Papaya contains the enzyme papain, which helps exfoliate the skin and remove pigmentation, while honey hydrates the skin."
  ingName1="1 ripe papaya"
  ingDescription1="Papaya contains papain, an enzyme that exfoliates and removes pigmentation."
  ingName2="1 tablespoon of honey"
  ingDescription2="Honey hydrates the skin and helps with moisture retention."
  instructions="1. Mash a piece of ripe papaya and mix it with honey.
   2. Apply the mixture to dark spots for 20-30 minutes.
    3. Wash it off with warm water, use this treatment twice a week."
/>
<br/>
<Recipes 
  recipeName="Cucumber and Lemon Juice"
  image={image19}
  description="Cucumber cools the skin, while lemon acts as a natural bleach."
  ingName1="½ cup of lemon juice"
  ingDescription1="Lemon is a natural bleaching agent that lightens the skin."
  ingName2="½ cup of cucumber juice"
  ingDescription2="Cucumber cools and hydrates the skin."
  ingName3="Cotton pad"
  ingDescription3="Used for applying the mixture onto the skin."
  instructions="1. Mix lemon juice and cucumber juice together.
   2. Apply the mixture to the skin using a cotton pad and leave it for 10-15 minutes, then wash it off with water.
    3. It is recommended to use this treatment once a day and avoid sun exposure during that time."
/>

<br/>
        </details>
        <br/>
        <details>
        <summary>Cracked heels treatment</summary>
        <div className="container">
        <p>Discover soothing remedies to heal cracked heels and restore softness to your feet. These simple and effective recipes provide deep hydration and care, leaving your feet smooth and revitalized.</p>
        </div>
        <Recipes 
  recipeName="Warm Lemon and Honey Foot Bath"
  image={image20}
  description="Lemon helps exfoliate dead skin, while honey acts as a natural moisturizer and antibacterial agent."
  ingName1="Lemon"
  ingDescription1="Rich in natural acids that exfoliate and brighten the skin."
  ingName2="Honey"
  ingDescription2="A natural moisturizer and antibacterial agent for smooth, healthy skin."
  instructions="1. Mix 1 cup of lemon juice with 2 tablespoons of honey.
   2. Add the mixture to warm water in a basin.
    3. Soak your feet for 15-20 minutes.
     4. Use a pumice stone to remove dead skin for soft, refreshed feet."
/>
<br/>
<Recipes 
  recipeName="Shea Butter and Almond Oil"
  image={image21}
  description="Shea butter and almond oil effectively hydrate and soften the skin."
  ingName1="Shea Butter"
  ingDescription1="A rich natural moisturizer that deeply nourishes and hydrates dry skin."
  ingName2="Almond Oil"
  ingDescription2="A lightweight oil that softens the skin and improves elasticity."
  instructions="1. Mix 2 tablespoons of shea butter with 1 teaspoon of almond oil.
   2. Apply the mixture to the cracked areas and gently massage.
    3. Repeat this step daily for best results."
/>
<br/>
<Recipes 
  recipeName="Sugar and Olive Oil Scrub"
  image={image22}
  description="Sugar exfoliates dead skin while olive oil provides deep hydration."
  ingName1="Sugar"
  ingDescription1="A natural exfoliant that removes dead skin cells and smoothens the skin."
  ingName2="Olive Oil"
  ingDescription2="A nourishing oil that deeply moisturizes and protects the skin barrier."
  instructions="1. Mix 2 tablespoons of sugar with 1 tablespoon of olive oil.
                2. Rub the mixture on your feet for a few minutes in circular motions. 
                3. Rinse with lukewarm water and dry thoroughly."
/>
<br/>
<Recipes 
  recipeName="Gelatin and Aloe Vera Mask"
  image={image23}
  description="Aloe vera hydrates and soothes the skin, while gelatin improves skin elasticity."
  ingName1="Aloe Vera Gel"
  ingDescription1="A natural moisturizer that soothes and hydrates dry or irritated skin."
  ingName2="Gelatin"
  ingDescription2="A protein-rich ingredient that helps improve skin elasticity and texture."
  instructions="1. Extract fresh aloe vera gel from the plant.  
                2. Mix it with 1 teaspoon of gelatin dissolved in warm water.  
                3. Apply the mixture to your feet and leave it on for 20 minutes.  
                4. Rinse with water and pat dry."
/>
<br/>
<Recipes 
  recipeName="White Vinegar and Water Soak"
  image={image24}
  description="Vinegar helps soften dead skin, making it easier to exfoliate."
  ingName1="White Vinegar"
  ingDescription1="An effective natural ingredient that softens hardened, dead skin."
  ingName2="Warm Water"
  ingDescription2="Helps to open pores and enhance the vinegar's effects."
  instructions="1. Add half a cup of white vinegar to a bowl of warm water.  
                2. Soak your feet in the mixture for 10-15 minutes.  
                3. Rinse your feet thoroughly, pat dry, and apply a moisturizer immediately."
/>
<br/>
<Recipes 
  recipeName="Coconut Oil"
  image={image25}
  description="Coconut oil has antimicrobial and anti-inflammatory properties, deeply moisturizing the feet and preventing infections."
  ingName1="Coconut oil"
  ingDescription1="Known for its deep moisturizing and antimicrobial properties, ideal for dry and cracked feet."
  instructions="1. Massage a small amount of coconut oil onto your feet at night before sleeping.
   2. Wear cotton socks to seal in the moisture.
    3. Leave it on overnight for maximum benefit."
/>
<br/>
        </details>
        <br/>
        <details>
        <summary>Excessive sweating treatment</summary>
        <div className="container">
        <p>Discover natural remedies to manage excessive sweating and stay fresh throughout the day. These simple and effective solutions are designed to help you feel comfortable and confident in any situation.</p>
        </div>
        <Recipes 
  recipeName="Apple Cider Vinegar"
  image={image26}
  description="Apple cider vinegar acts as a natural astringent, reducing pore openings and balancing body pH."
  ingName1="Apple Cider Vinegar"
  ingDescription1="A natural ingredient with astringent properties that helps control sweat and balance skin pH."
  ingName2="Honey (optional for drink)"
  ingDescription2="A natural humectant that complements vinegar's detoxifying effects when consumed."
  instructions="1. **Topical Use:** Soak a cotton pad in apple cider vinegar and apply it to sweaty areas. Leave it on overnight. Wash the skin in the morning and apply talcum powder.  
                2. **Drink:** Mix 2 tablespoons of apple cider vinegar with 1 tablespoon of honey in a cup of water. Drink daily on an empty stomach for internal benefits."
/>
<br/>
<Recipes 
  recipeName="Sage Tea"
  image={image27}
  description="Sage contains magnesium and vitamin B, which reduce the activity of sweat glands and have astringent properties."
  ingName1="Sage Leaves"
  ingDescription1="A natural herb rich in magnesium and vitamin B, known for its sweat-reducing and astringent effects."
  instructions="1. **Topical Use:** Boil a teaspoon of sage leaves in a cup of water. Let it cool and use it to wash sweaty areas daily.  
                2. **Drink:** Prepare sage tea by boiling sage leaves in water. Drink it twice daily for internal benefits."
/>
<br/>
<Recipes 
  recipeName="Baking Soda and Lemon Juice"
  image={image28}
  description="Baking soda absorbs moisture and reduces odors, while lemon juice kills bacteria effectively."
  ingName1="Baking Soda"
  ingDescription1="Neutralizes odors and absorbs excess moisture."
  ingName2="Lemon Juice"
  ingDescription2="A natural antibacterial agent that helps eliminate odor-causing bacteria."
  instructions="1. Mix one teaspoon of baking soda with enough lemon juice to form a paste.  
                2. Apply the paste to sweaty areas and leave it on for 15 minutes.  
                3. Rinse off with water and pat dry."
/>
<br/>
<Recipes 
  recipeName="Black Tea"
  image={image29}
  description="Rich in tannic acid, black tea acts as a natural astringent and antiperspirant."
  ingName1="Black Tea Bags"
  ingDescription1="Contains tannic acid to help reduce sweat production and fight bacteria."
  instructions="1. Steep black tea bags in hot water and let them cool.  
                2. Wipe sweaty areas with the cooled tea using a cloth or cotton.  
                3. Alternatively, soak your hands or feet in black tea for 20 minutes."
/>
<br/>
<Recipes 
  recipeName="Coconut Oil"
  image={image30}
  description="Coconut oil contains lauric acid, which eliminates odor-causing bacteria while leaving a refreshing scent."
  ingName1="Coconut Oil"
  ingDescription1="Rich in lauric acid, it combats odor-causing bacteria and provides a soothing, hydrating effect."
  ingName2="Baking Soda"
  ingDescription2="Helps neutralize odors and absorb excess moisture."
  ingName3="Essential Oil (optional)"
  ingDescription3="Adds a pleasant, refreshing fragrance."
  instructions="1. **Direct Use:** Massage sweaty areas with pure coconut oil.  
                2. **Natural Deodorant:** Mix 3 teaspoons of coconut oil with baking soda and a few drops of your favorite essential oil. Apply as needed."
/>
<br/>
<Recipes 
  recipeName="Tomato Juice"
  image={image31}
  description="A natural astringent that helps tighten pores and reduce sweating."
  ingName1="Fresh Tomato Juice"
  ingDescription1="Acts as a natural astringent to reduce sweat and tighten pores."
  instructions="1. Apply fresh tomato juice to the skin and leave it for 10 minutes, then rinse it off.  
                2. Drinking a cup of tomato juice daily can also be beneficial."
/>
<br/>
<Recipes 
  recipeName="White Sandalwood Powder"
  image={image32}
  description="Helps absorb excess moisture and leaves the skin refreshed with its aromatic scent."
  ingName1="White Sandalwood Powder"
  ingDescription1="A natural powder known for its aromatic and moisture-absorbing properties."
  ingName2="Rose Water"
  ingDescription2="Soothing and hydrating, often used to mix with powders for skincare."
  ingName3="Lemon Juice"
  ingDescription3="Contains natural astringent properties to enhance the formula."
  instructions="1. Mix one tablespoon of sandalwood powder with rose water and a little lemon juice.  
                2. Apply the paste to the skin and let it dry.  
                3. Rinse it off with water."
/>
<br/>
<Recipes 
  recipeName="Wheatgrass Juice"
  image={image33}
  description="Rich in vitamins and minerals that balance sweat gland activity and detoxify the body."
  ingName1="Fresh Wheatgrass"
  ingDescription1="A nutrient-dense plant known for its detoxifying properties."
  instructions="1. Extract juice from fresh wheatgrass to make one cup.  
                2. Drink it daily on an empty stomach."
/>
<br/>
<Recipes 
  recipeName="Tea Tree Oil"
  image={image34}
  description="Has antifungal and astringent properties that help reduce sweating."
  ingName1="Tea Tree Oil"
  ingDescription1="A natural antifungal agent with astringent properties."
  instructions="1. Apply tea tree oil directly to sweaty areas using a cotton pad.  
                2. If you have sensitive skin, dilute the oil with water before application."
/>
<br/>
        </details>
        <br/>
        <details>
        <summary>Stretch marks treatment</summary>
        <div className="container">
        <p>Discover gentle remedies to reduce the appearance of stretch marks and improve your skin's elasticity. These simple and nourishing solutions are designed to leave your skin smooth, hydrated, and rejuvenated.</p>
        </div>
        <Recipes 
  recipeName="Aloe Vera Gel"
  image={image35}
  description="Aloe vera gel helps soothe and hydrate the skin while boosting collagen production to repair damaged tissue."
  ingName1="Fresh Aloe Vera Gel"
  ingDescription1="Extracted directly from the aloe vera plant for maximum skin benefits."
  instructions="1. Extract fresh aloe vera gel and gently massage it onto stretch marks.  
                2. Leave it on for 20-30 minutes, then rinse with warm water.  
                3. Repeat daily for best results."
/>
<br/>
<Recipes 
  recipeName="Shea Butter and Cocoa Butter"
  image={image36}
  description="These butters deeply hydrate the skin, improving its elasticity and reducing the appearance of marks with regular use."
  ingName1="Shea Butter"
  ingDescription1="Known for its deep moisturizing properties, Shea Butter softens and nourishes the skin."
  ingName2="Cocoa Butter"
  ingDescription2="Rich in antioxidants, Cocoa Butter helps to improve skin texture and elasticity."
  instructions="1. Massage a small amount of Shea Butter or Cocoa Butter onto the affected areas.
                2. Apply twice daily, once in the morning and once before bed."
/>
<br/>
<Recipes 
  recipeName="Sweet Almond Oil and Olive Oil"
  image={image37}
  description="These oils contain Vitamin E and antioxidants that help improve skin elasticity and reduce discoloration of marks."
  ingName1="Sweet Almond Oil"
  ingDescription1="Rich in Vitamin E, Sweet Almond Oil nourishes and moisturizes the skin."
  ingName2="Olive Oil"
  ingDescription2="Packed with antioxidants, Olive Oil helps to repair and protect the skin."
  instructions="1. Warm the oils slightly.
                2. Massage the affected areas in circular motions for 5-10 minutes.
                3. Leave the oil on the skin or wash it off after 2 hours."
/>
<br/>
<Recipes 
  recipeName="Sugar and Honey Scrub"
  image={image38}
  description="Sugar acts as a natural exfoliator to remove dead skin cells, while honey moisturizes the skin and improves its elasticity."
  ingName1="Sugar"
  ingDescription1="Sugar is a natural exfoliant that removes dead skin cells, leaving the skin smooth."
  ingName2="Honey"
  ingDescription2="Honey is a natural moisturizer that nourishes the skin and improves its elasticity."
  ingName3="Olive Oil"
  ingDescription3="Olive Oil helps to moisturize the skin, preventing dryness and improving skin texture."
  instructions="1. Mix 1 tablespoon of sugar with 1 teaspoon of honey and olive oil.
                2. Use the mixture as a scrub for the affected areas for 2-3 minutes.
                3. Rinse with warm water. Repeat twice a week."
/>
<br/>
<Recipes 
  recipeName="Centella Asiatica (Gotu Kola)"
  image={image39}
  description="This herb boosts collagen production and helps strengthen tissues."
  ingName1="Centella Asiatica Extract"
  ingDescription1="Centella Asiatica helps in collagen production and tissue repair, promoting skin elasticity and healing."
  instructions="Look for creams containing Centella Asiatica extract and apply them according to the instructions on the packaging."
/>
<br/>
<Recipes 
  recipeName="Diluted Apple Cider Vinegar"
  image={image40}
  description="Apple cider vinegar is believed to lighten the color of marks and improve the appearance of the skin."
  ingName1="Apple Cider Vinegar"
  ingDescription1="Apple cider vinegar is thought to help lighten marks and improve skin texture."
  instructions=" 1. Mix 1 tablespoon of apple cider vinegar with an equal amount of water. 2. Soak a cotton pad in the mixture and apply it to the marks before bedtime. Wash it off in the morning."
/>
<br/>
        </details>
        <br/>
        <details>
        <summary>Melasma and dark spots treatment</summary>
        <div className="container">
        <p>Discover effective remedies to fade melasma and dark spots, revealing a more even and radiant complexion. These simple and natural solutions are designed to brighten your skin and restore its natural glow.</p>
        </div>
        <Recipes 
  recipeName="Lemon and Honey Mask"
  image={image41}
  description="Lemon contains Vitamin C and antioxidants that lighten dark spots, while honey moisturizes the skin and protects it from dryness."
  ingName1="Lemon Juice"
  ingDescription1="Lemon contains Vitamin C and antioxidants that help lighten dark spots."
  ingName2="Honey"
  ingDescription2="Honey moisturizes the skin and prevents dryness."
  instructions=" 1. Mix 1 teaspoon of lemon juice with 1 teaspoon of honey. 2. Apply the mixture to the dark spots and leave it for 10-15 minutes. 3. Rinse with lukewarm water and repeat the recipe twice a week."
/>
<br/>
<Recipes 
  recipeName="Oatmeal and Milk Scrub"
  image={image42}
  description="Oatmeal gently exfoliates the skin and removes dead cells, while milk contains lactic acid that brightens and nourishes the skin."
  ingName1="Oatmeal"
  ingDescription1="Oatmeal gently exfoliates the skin and removes dead skin cells."
  ingName2="Milk"
  ingDescription2="Milk contains lactic acid, which brightens and nourishes the skin."
  instructions=" 1. Mix 1 tablespoon of oatmeal with 2 tablespoons of milk to form a paste. 2. Gently rub the mixture on dark spots in circular motions. 2. Leave it for 10 minutes, then rinse with water. 3. Repeat twice a week."
/>
<br/>
<Recipes 
  recipeName="Turmeric and Yogurt Mask"
  image={image43}
  description="Turmeric is an anti-inflammatory and natural brightener, while yogurt moisturizes the skin and helps reduce the appearance of dark spots."
  ingName1="Turmeric"
  ingDescription1="Turmeric has anti-inflammatory properties and is a natural brightener."
  ingName2="Yogurt"
  ingDescription2="Yogurt moisturizes the skin and helps lighten dark spots."
  instructions=" 1. Mix 1/2 teaspoon of turmeric with 2 tablespoons of yogurt. 2. Apply to the affected areas and leave it for 15-20 minutes. 3. Rinse with lukewarm water. 4. Use this remedy three times a week."
/>
<br/>
<Recipes 
  recipeName="Sweet Almond Oil and Lemon Juice"
  image={image44}
  description="Almond oil nourishes the skin and improves its elasticity, while lemon juice helps reduce dark spots."
  ingName1="Sweet Almond Oil"
  ingDescription1="Almond oil nourishes the skin and improves its elasticity."
  ingName2="Lemon Juice"
  ingDescription2="Lemon juice helps in lightening and reducing dark spots."
  instructions=" 1. Mix 1 teaspoon of sweet almond oil with a few drops of lemon juice. 2. Massage the mixture into the dark spots in circular motions. 3. Leave it on for 30 minutes before washing off. 4. It is recommended to use this remedy daily."
/>
<br/>
<Recipes 
  recipeName="Rice Water"
  image={image45}
  description="Rice water contains antioxidants and vitamins that brighten the skin and reduce dark spots."
  ingName1="Rice Water"
  ingDescription1="Rice water is rich in antioxidants and vitamins that brighten the skin and reduce pigmentation."
  instructions=" 1. After washing the rice, retain the soaking water. 2. Use the rice water as a natural cleanser daily."
/>
<br/>
        </details>
        <br/>
        <details>
        <summary>Body acne treatment</summary>
        <div className="container">
        <p>Discover simple and effective remedies to treat body acne and achieve clear, smooth skin. These natural solutions are designed to cleanse, soothe, and rejuvenate your skin, leaving it healthy and refreshed.</p>
        </div>
        <Recipes 
  recipeName="Honey and Cinnamon"
  image={image46}
  description="Honey is antibacterial, while cinnamon helps reduce inflammation."
  ingName1="Honey"
  ingDescription1="Honey is known for its antibacterial properties that help fight acne."
  ingName2="Cinnamon Powder"
  ingDescription2="Cinnamon helps in reducing inflammation and has antimicrobial properties."
  instructions=" 1. Mix 1 teaspoon of honey with half a teaspoon of cinnamon powder. 2. Apply the mixture as a mask on the affected areas for 10-15 minutes. 3. Rinse with warm water. 4. Use the recipe once or twice a week."
/>
<br/>
<Recipes 
  recipeName="Baking Soda (Sodium Bicarbonate)"
  image={image47}
  description="Baking soda acts as a gentle exfoliator to remove dead skin and reduce clogged pores."
  ingName1="Baking Soda"
  ingDescription1="Baking soda works as an exfoliant, helping to remove dead skin cells and prevent clogged pores."
  ingName2="Water"
  ingDescription2="Water is used to create a paste with baking soda for easy application."
  instructions=" 1. Mix a small amount of baking soda with water to form a paste. 2. Gently rub it on the affected areas in circular motions for a few minutes. 3. Rinse thoroughly with water. 4. Use once or twice a week."
/>
<br/>
<Recipes 
  recipeName="Tea Tree Oil"
  image={image48}
  description="Tea tree oil has antibacterial properties that help reduce acne-causing bacteria."
  ingName1="Tea Tree Oil"
  ingDescription1="Tea tree oil is known for its antibacterial properties, helping to reduce acne-causing bacteria."
  ingName2="Coconut Oil"
  ingDescription2="Coconut oil is used as a carrier oil and helps moisturize the skin."
  instructions=" 1. Mix 1-2 drops of tea tree oil with a teaspoon of coconut oil. 2. Apply directly to the acne using a cotton ball. 3. Leave it to dry, then rinse with water. 4. Repeat daily."
/>
<br/>
<Recipes 
  recipeName="Diluted Apple Cider Vinegar"
  image={image49}
  description="Apple cider vinegar has antibacterial and anti-inflammatory properties that help kill acne-causing bacteria and reduce redness."
  ingName1="Apple Cider Vinegar"
  ingDescription1="Apple cider vinegar has antibacterial and anti-inflammatory properties that help kill acne-causing bacteria and reduce redness."
  instructions=" 1. Mix two parts water with one part apple cider vinegar. 2. Use a cotton ball to apply the solution to the affected areas. 3. Leave it on for 5-10 minutes, then rinse with lukewarm water. 4. Repeat once or twice daily."
/>
<br/>
<Recipes 
  recipeName="Natural Aloe Vera Gel"
  image={image50}
  description="Aloe vera is known for its soothing and antibacterial properties, helping to accelerate acne healing."
  ingName1="Fresh Aloe Vera Gel"
  ingDescription1="Fresh aloe vera gel has soothing and antibacterial properties that help accelerate the healing of acne."
  instructions=" 1. Extract fresh gel from an aloe vera leaf. 2. Apply it directly to the affected areas. 3. Leave it on until it dries, then rinse with water. 4. Use it twice daily."
/>
<br/>
<Recipes 
  recipeName="Green Tea"
  image={image51}
  description="Rich in antioxidants that reduce inflammation and help decrease oil production."
  ingName1="Green Tea Bags"
  ingDescription1="Green tea bags contain antioxidants that help reduce inflammation and control oil production."
  instructions=" 1. Soak the green tea bags in hot water, then allow them to cool. 2. Use a cotton pad to wipe the skin with the tea water. 3. Do not rinse and let it dry. 4. You can repeat this process daily."
/>
<br/>
        </details>
        <br/>
        </div>
    )
}
export default BodyCare;