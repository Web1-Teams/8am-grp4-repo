import React from "react";
import Recipes from "./Recipes";

const BodyCare = (props) => {
    return (
        <div>
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
  instructions="1. Warm a few drops of coconut oil in your hands. 2. Massage the oil onto dry skin before bedtime. 3. Leave it on overnight to let the skin absorb its nutrients."
/>
<br></br>
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
  instructions="1. Mash 1/2 avocado and mix it with olive oil and honey. 2. Apply the mixture to your skin and leave it on for 15-20 minutes. 3. Rinse it off with water."
/>
<br></br>
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
  instructions="1. Mix all the ingredients well in a bowl. 2. Use the mixture as a scrub by massaging it gently onto your skin. 3. Wash it off with cold water after 5-6 minutes."
/>
<br></br>
<Recipes 
  recipeName="Shea Butter Moisturizer"
  image={image4}
  description="Shea butter contains vitamins A and E, which nourish the skin and restore its natural moisture barrier. It is ideal for deep hydration, especially during winter."
  ingName1="Shea butter"
  ingDescription1="Shea butter is rich in vitamins A and E, providing intense nourishment and restoring the skin's natural moisture barrier."
  instructions="1. Apply a thick layer of shea butter to dry areas of the skin. 2. Cover the area with a clean cloth and leave it on overnight to allow the skin to absorb the nutrients."
/>
<br></br>
<Recipes 
  recipeName="Aloe Vera Gel"
  image={image5}
  description="Aloe vera gel is known for its soothing and anti-inflammatory properties. It contains enzymes and nutrients that help hydrate the skin and promote cell renewal."
  ingName1="Pure aloe vera gel"
  ingDescription1="Aloe vera gel is packed with soothing enzymes and nutrients that hydrate the skin and promote cell regeneration."
  instructions="1. Apply the pure gel to dry skin. 2. Leave it on until fully absorbed."
/>
<br></br>
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
  instructions="1. Mix all ingredients together in a bowl. 2. Use a clean cotton pad to apply the mixture to your skin for hydration and cleansing."
/>
<br></br>
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
  instructions="1. Mix all the ingredients together to form a paste. 2. Apply the paste to your skin and leave it on for 15 minutes. 3. Rinse it off with water."
/>
<br></br>
<Recipes 
  recipeName="Milk Skin Soother"
  image={image8}
  description="Milk contains natural fats and proteins that help soothe dry and irritated skin. Additionally, lactic acid acts as a gentle exfoliant, removing dead skin cells and hydrating the skin."
  ingName1="1 cup warm milk"
  ingDescription1="Warm milk contains natural fats and proteins that soothe and hydrate dry skin, along with lactic acid for gentle exfoliation."
  ingName2="Dry cotton pads"
  ingDescription2="Cotton pads are used to apply the milk to the skin."
  instructions="1. Dip a cotton pad into the warm milk and gently wipe it across your skin. 2. Leave it on for 10 minutes, then rinse with cold water."
/>
<br></br>
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
  instructions="1. Mix all the ingredients together until you get a uniform mixture. 2. Massage the scrub onto areas with cellulite in circular motions for 5-10 minutes. 3. Rinse off with warm water. Repeat this scrub 2-3 times a week for noticeable results."
/>
<br></br>
<Recipes 
  recipeName="Dry Brushing Massage"
  image={image10}
  description="Dry brushing improves blood circulation and promotes lymphatic drainage, reducing the appearance of cellulite."
  ingName1="Brush with natural bristles"
  ingDescription1="A brush with natural bristles is ideal for gently exfoliating the skin and stimulating blood flow."
  instructions="1. Clean the skin before showering. 2. Start with gentle circular motions from the feet upward toward the heart. 3. Continue for 5-10 minutes and repeat daily for the best results."
/>
<br></br>
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
  instructions="1. Add all the ingredients to warm water in the bathtub. 2. Soak your body for 20 minutes, then gently pat your skin dry."
/>
<br></br>
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
  instructions="1. Mix the ingredients together until a smooth paste forms. 2. Apply the mixture to areas affected by cellulite. 3. Wrap the skin with plastic wrap and leave it for 30 minutes. 4. Rinse off with warm water. Repeat once a week for best results."
/>
<br></br>
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
  instructions="1. Mix the ingredients together to form a paste. 2. Apply the paste to the affected areas for 15-20 minutes. 3. Rinse off with warm water. Repeat 2-3 times a week for best results."
/>
<br></br>
<Recipes 
  recipeName="Potato"
  image={image15}
  description="Potatoes contain natural bleaching agents that help lighten pigmentation."
  ingName1="1 potato, sliced thinly"
  ingDescription1="Potato slices contain enzymes that help lighten skin pigmentation."
  instructions="1. Place the potato slices on your skin and gently rub them for 5-10 minutes. 2. Leave the juice on your skin for an additional 10 minutes before rinsing with water."
/>
<br></br>
<Recipes 
  recipeName="Green Tea"
  image={image16}
  description="Green tea contains antioxidants that reduce melanin production in the skin."
  ingName1="1 cup of green tea"
  ingDescription1="Green tea is rich in antioxidants that help lighten pigmentation."
  instructions="1. Prepare a cup of green tea and let it cool. 2. Soak a cotton pad in the tea and apply it to the pigmented areas for 10-15 minutes, then rinse with water."
/>
<br></br>
<Recipes 
  recipeName="Yogurt and Oats"
  image={image17}
  description="Yogurt contains lactic acid which brightens the skin, while oats act as a natural exfoliator."
  ingName1="2 tablespoons of yogurt"
  ingDescription1="Yogurt is rich in lactic acid that helps brighten the skin."
  ingName2="1 tablespoon of oats"
  ingDescription2="Oats work as a natural exfoliant for smooth skin."
  instructions="1. Mix the yogurt and oats well. 2. Apply the mixture to the skin for 10-15 minutes, then rinse with lukewarm water. 3. Wrap the skin with plastic wrap and leave it for 30 minutes."
/>
<br></br>
<Recipes 
  recipeName="Papaya and Honey"
  image={image18}
  description="Papaya contains the enzyme papain, which helps exfoliate the skin and remove pigmentation, while honey hydrates the skin."
  ingName1="1 ripe papaya"
  ingDescription1="Papaya contains papain, an enzyme that exfoliates and removes pigmentation."
  ingName2="1 tablespoon of honey"
  ingDescription2="Honey hydrates the skin and helps with moisture retention."
  instructions="1. Mash a piece of ripe papaya and mix it with honey. 2. Apply the mixture to dark spots for 20-30 minutes. 3. Wash it off with warm water, use this treatment twice a week."
/>
<br></br>
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
  instructions="1. Mix lemon juice and cucumber juice together. 2. Apply the mixture to the skin using a cotton pad and leave it for 10-15 minutes, then wash it off with water. 3. It is recommended to use this treatment once a day and avoid sun exposure during that time."
/>

        </details>
        </div>
    )
}