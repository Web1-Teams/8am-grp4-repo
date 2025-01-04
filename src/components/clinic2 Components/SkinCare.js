import React from "react";
import Recipes from "./Recipes";
import IntroSection from "./IntroSection";
import image1 from "../../assests/Images/imagesForC2/milkAndAppleMask.jpg";
import image2 from "../../assests/Images/imagesForC2/cucumberAndLemonMask.jpg";
import image3 from "../../assests/Images/imagesForC2/yogurtTurmericAndHoneyMask.jpg";
import image4 from "../../assests/Images/imagesForC2/honeyAndRiceMask.jpg";
import image5 from "../../assests/Images/imagesForC2/lemonAndTurmericMask.jpg";
import image6 from "../../assests/Images/imagesForC2/cucumberAndRoseWaterMask.jpg";
import image7 from "../../assests/Images/imagesForC2/coffeeAndYogurtMask.jpg";
import image8 from "../../assests/Images/imagesForC2/tea.jpg";
import image9 from "../../assests/Images/imagesForC2/cucumber.jpg";
import image10 from "../../assests/Images/imagesForC2/roseWaterr.jpg";
import image11 from "../../assests/Images/imagesForC2/sweeetAlmondOil.jpg";
import image12 from "../../assests/Images/imagesForC2/potato.jpg";
import image13 from "../../assests/Images/imagesForC2/honey.jpg";
import image14 from "../../assests/Images/imagesForC2/cucumberTwo.webp";
import image15 from "../../assests/Images/imagesForC2/teaTreeeOil.jpeg";
import image16 from "../../assests/Images/imagesForC2/appleCiderVinegar.webp";
import image17 from "../../assests/Images/imagesForC2/sodiumBicarbonate.webp";
import image18 from "../../assests/Images/imagesForC2/egg.jpg";
import image19 from "../../assests/Images/imagesForC2/honeyAndLemon.jpg";
import image20 from "../../assests/Images/imagesForC2/oats.webp";
import image21 from "../../assests/Images/imagesForC2/steam.jpg";
import image22 from "../../assests/Images/imagesForC2/vaseline.webp";
import image23 from "../../assests/Images/imagesForC2/oliveOill.jpg";
import image24 from "../../assests/Images/imagesForC2/aloeVeraa.jpg";
import image25 from "../../assests/Images/imagesForC2/honeyAndTurmeric.jpg";
import image26 from "../../assests/Images/imagesForC2/greenTea.png";
import image27 from "../../assests/Images/imagesForC2/egg.jpg";

const SkinCare = (props) => {
    return (
        <div>
          <IntroSection title = "Glow begins here"
    subtitle1 = " Because your skin deserves a story as flawless as you are."
   subtitle2 = "Dive into the world of skincare where every "
   specific1 = "glow tells a tale"
   subtitle3 = ", every routine becomes a ritual, and every moment is a step closer to your most radiant self."
   subtitle4 = " Your skin isn’t just skin – it’s "
   specific2 = "confidence"
   subtitle5 = ", care, and a canvas of endless beauty."
   subtitle6 = "Shine brighter, glow deeper, love harder – because skincare is self-care. Let’s make your glow-up legendary."
    />
    <details>
        <summary>Skin Brightening and Tone</summary>
        <div className="container">
        <p>  Discover a variety of masks that will brighten and tone your skin. These recipes are simple to follow and
        provide your skin with the care it needs.</p>
        </div>
        <Recipes recipeName = "Milk & Apple Mask"
    image = {image1}
  description = " This mask is ideal for all skin types. The lactic acid in the milk helps exfoliate dead skin cells, while the apple's vitamin C helps brighten the skin. The honey locks in moisture, leaving your skin soft and supple."
  ingName1 = "1/2 cup milk"
  ingDescription1 = "The lactic acid in the milk helps exfoliate dead skin cells."
  ingName2 = "1/2 apple"
  ingDescription2 = "The vitamin C in the apple helps brighten the skin."
  ingName3 = "1 tbsp honey"
  ingDescription3 = "The honey locks in moisture, leaving your skin soft and supple."
  instructions = " 1. Blend 1/2 cup of milk and 1/2 an apple in a blender until smooth. 2. Add 1 tbsp of honey to the mixture and blend again. 3. Apply the mask to your face and leave it on for 15 minutes. 4. Rinse the mask off with warm water and pat your face dry with a towel."
  />
  <br/>
  <Recipes recipeName = "Cucumber & Lemon Mask"
    image = {image2}
  description = "This mask is perfect for calming irritated skin and brightening your complexion. Cucumber soothes the skin and reduces inflammation, while lemon acts as a natural brightener thanks to its Vitamin C content."
  ingName1 = "1 cucumber"
  ingDescription1 = "Cucumber soothes the skin and reduces inflammation."
  ingName2 = "Juice of half a lemon"
  ingDescription2 = "Lemon acts as a natural brightener due to its Vitamin C."
  instructions = " 1. Grate the cucumber and mix it with the juice of half a lemon. 2. Apply the mixture to your face and leave it on for 15 minutes. 3. Rinse the mask off with cold water and pat your face dry."
  />
  <br/>
  <Recipes recipeName = "Yogurt, Turmeric & Honey Mask"
    image = {image3}
  description = " This mask rejuvenates and nourishes the skin. Yogurt contains lactic acid to renew the skin, turmeric works as an antioxidant, and honey hydrates and soothes the skin."
  ingName1 = "1 tbsp yogurt"
  ingDescription1 = "The lactic acid in yogurt helps to renew the skin."
  ingName2 = "1 tsp turmeric"
  ingDescription2 = "Turmeric acts as a powerful antioxidant for the skin."
  ingName3 = "1 tsp honey"
  ingDescription3 = "Honey hydrates and soothes the skin, leaving it soft."
  instructions = " 1. Mix all the ingredients together to form a smooth paste. 2. Apply the mixture to your face and leave it on for 20 minutes. 3. Rinse the mask off with water and pat your face dry."
  />
  <br/>
  <Recipes recipeName = "Rice & Honey Mask"
    image = {image4}
  description = "  This mask gently exfoliates and brightens the skin thanks to the rice, while honey and milk provide essential hydration."
  ingName1 = "1/2 cup uncooked white rice"
  ingDescription1 = "Rice helps to gently exfoliate and brighten the skin."
  ingName2 = "Water for soaking"
  ingDescription2 = "Used to soften the rice for blending into a paste."
  ingName3 = "1 tbsp natural honey"
  ingDescription3 = "Honey provides deep hydration and soothes the skin."
  ingName4 = "1 tbsp milk (optional)"
  ingDescription4 = "Milk adds extra hydration and nourishment to the mask."
  instructions = " 1. Soak the rice in water for at least 2 hours. 2. Blend the soaked rice into a smooth paste. 3. Mix the paste with honey (and milk if desired). 4. Apply the mixture to your face and leave it on for 20-30 minutes. 5. Rinse off with lukewarm water and pat your face dry."
  />
  <br/>
  <Recipes recipeName = "Lemon & Turmeric Mask"
    image = {image5}
  description = " This mask is great for reducing pigmentation and brightening the skin. Turmeric helps reduce discoloration, while the citric acid in lemon provides natural brightening."
  ingName1 = "1 tsp turmeric"
  ingDescription1 = "Turmeric reduces pigmentation and evens out skin tone."
  ingName2 = "1 tbsp lemon juice"
  ingDescription2 = "Lemon contains citric acid, which helps to brighten the skin."
  ingName3 = "1 tbsp yogurt"
  ingDescription3 = "Yogurt provides hydration and helps to balance the skin."
  instructions = " 1. Combine all the ingredients in a bowl and mix well until smooth. 2. Apply the mixture to your face and leave it on for 10-15 minutes. 3. Rinse off with lukewarm water and pat your face dry"
  />
  <br/>
  <Recipes recipeName = "Cucumber & Rose Water Mask"
    image = {image6}
  description = " This mask hydrates and calms the skin, reducing redness with cucumber, while rose water and glycerin provide a healthy glow."
  ingName1 = "1 cucumber"
  ingDescription1 = "Cucumber helps hydrate the skin and reduce redness."
  ingName2 = "3 tbsp rose water"
  ingDescription2 = "Rose water adds a soothing effect and natural glow."
  ingName3 = "3 tbsp glycerin"
  ingDescription3 = "Glycerin locks in moisture, leaving the skin soft and radiant."
  instructions = " 1. Mash the cucumber and mix it with rose water and glycerin. 2. Apply the mask in the evening and leave it on overnight. 3. Wash your face with cold water in the morning."
  />
  <br/>
  <Recipes recipeName = "Coffee & Yogurt Mask"
    image = {image7}
  description = "This mask is perfect for exfoliating and rejuvenating the skin. Coffee is rich in antioxidants that fight free radicals and help remove dead skin cells, while yogurt contains lactic acid that moisturizes, lightens dark spots, and softens the skin."
  ingName1 = "1 tbsp yogurt"
  ingDescription1 = "Yogurt moisturizes the skin, lightens dark spots, and smoothens the texture."
  ingName2 = "1 tsp ground coffee"
  ingDescription2 = "Coffee exfoliates the skin and provides antioxidants to fight free radicals."
  instructions = " 1. Mix the ground coffee with yogurt thoroughly to create a smooth paste. 2. Apply the mask to a clean face, avoiding the eye area. 3. Gently massage your skin in circular motions for 1 minute to exfoliate. 4. Leave the mask on for 10-15 minutes. 5. Rinse your face with lukewarm water and pat it dry with a soft towel."
  />
  <br/>
    </details>
    <br/>
    <details>
        <summary>Dark circles treatment</summary>
        <div className="container">
        <p>   Explore effective remedies to diminish dark circles and revitalize your under-eye area. These simple, natural recipes are easy to prepare and designed to nourish your skin, leaving you refreshed and radiant.</p>
        </div>
        <Recipes recipeName = "Tea Bags Eye Mask"
    image = {image8}
  description = "  The caffeine and antioxidants in tea boost blood circulation and shrink blood vessels in the area, reducing puffiness and dark circles."
  ingName1 = "1 black or green tea bag"
  ingDescription1 = "Contains caffeine and antioxidants to reduce puffiness and brighten the area."
  instructions = " 1. Use a cooled, used black or green tea bag. 2. Place the tea bags over your eyes for 10–15 minutes daily."
  />
  <br/>
  <Recipes recipeName = "Cucumber Slices Eye Mask"
    image = {image9}
  description = "  Cucumbers are rich in antioxidants that help brighten the area and reduce swelling around the eyes."
  ingName1 = "1 cucumber, sliced"
  ingDescription1 = "Rich in antioxidants that help brighten the area and reduce puffiness."
  instructions = " 1. Chill the cucumber slices in the refrigerator. 2. Place the chilled cucumber slices over your eyes for 10–15 minutes. 3. Repeat daily for best results."
  />
  <br/>
  <Recipes recipeName = "Rose Water Eye Mask"
    image = {image10}
  description = " Rose water helps soothe the skin and rejuvenate cells, reducing the appearance of dark circles."
  ingName1 = "Small bowl of rose water"
  ingDescription1 = "Known for its soothing and rejuvenating properties, ideal for delicate skin around the eyes."
  ingName2 = "Cotton pads"
  ingDescription2 = "Used to apply rose water gently to the skin."
  instructions = " 1. Soak a cotton pad in chilled rose water. 2. Place the cotton pad over your eyes for 10 minutes. 3. Repeat daily to achieve refreshed and rejuvenated eyes."
  />
   <br/>
  <Recipes recipeName = "Sweet Almond Oil Treatment"
    image = {image11}
  description = "  Sweet almond oil is rich in vitamin E, which moisturizes the skin and reduces dark pigmentation."
  ingName1 = "Sweet almond oil"
  ingDescription1 = "Packed with vitamin E, it deeply nourishes and helps lighten dark areas."
  instructions = " 1. Apply a few drops of sweet almond oil to your under-eye area. 2. Gently massage the oil into the skin before bedtime. 3. Leave it on overnight and rinse in the morning if desired."
  />
   <br/>
  <Recipes recipeName = "Grated Potato Eye Mask"
    image = {image12}
  description = " Potatoes contain natural bleaching agents that help reduce dark circles and brighten the under-eye area."
  ingName1 = "1 peeled potato"
  ingDescription1 = "Rich in natural brightening agents to lighten dark circles."
  ingName2 = "Cotton pads"
  ingDescription2 = "Helps apply the potato juice evenly under the eyes."
  instructions = " 1. Grate the potato and extract its juice. 2. Soak cotton pads in the potato juice. 3. Place the soaked cotton pads over your eyes for 10–15 minutes. 4. Rinse your face with cold water and pat dry."
  />
   <br/>
    </details>
    <br/>
    <datalis>
        <summary>Acne treatment</summary>
        <div className="container">
        <p>
        Discover simple and effective remedies to tackle acne and achieve clearer skin. These easy-to-follow recipes are designed to soothe, heal, and restore your skin's natural balance, giving you a healthy and confident glow.
        </p>
        </div>
        <Recipes recipeName = "Natural Honey Spot Treatment"
    image = {image13}
  description = "  Honey is a natural antioxidant with soothing properties, helping to calm inflammation and reduce acne."
  ingName1 = "1 tsp of natural honey"
  ingDescription1 = "Rich in antioxidants and soothing properties to calm skin and reduce inflammation."
  instructions = " 1. Apply a small amount of honey directly to acne spots. 2. Leave it on for 20–30 minutes. 3. Rinse off with warm water and pat dry."
  />
  <br/>
  <Recipes recipeName = "Grated Cucumber & Lemon Mask"
    image = {image14}
  description = "  Cucumber soothes and hydrates the skin, while lemon juice helps reduce inflammation and cleanse pores."
  ingName1 = "1/2 cucumber"
  ingDescription1 = "Provides hydration and soothing properties for irritated skin."
  ingName2 = "1 tsp lemon juice"
  ingDescription2 = "Helps reduce inflammation and cleanse clogged pores."
  instructions = " 1. Mix the grated cucumber and lemon juice together in a bowl. 2. Apply the mixture to the affected skin and leave it on for 15 minutes. 3. Rinse off with water and gently pat dry."
  />
  <br/>
  <Recipes recipeName = "Tea Tree Oil Treatment"
    image = {image15}
  description = " Tea tree oil has antibacterial and anti-inflammatory properties, making it effective in reducing redness and swelling caused by acne."
  ingName1 = "A few drops of tea tree oil"
  ingDescription1 = "Known for its antibacterial and anti-inflammatory properties to target acne."
  ingName2 = "Carrier oil (e.g., coconut oil)"
  ingDescription2 = "Helps dilute tea tree oil to prevent skin irritation."
  instructions = " 1. Mix a few drops of tea tree oil with a carrier oil, such as coconut oil. 2. Apply the mixture to the affected areas using a cotton swab or your fingertips. 3. Leave it on overnight or for several hours, then rinse off if needed."
  />
   <br/>
  <Recipes recipeName = "Apple Cider Vinegar Toner"
    image = {image16}
  description = "  Apple cider vinegar contains acids that help eliminate bacteria and reduce inflammation, minimizing acne and its scars. Test on a small area first to avoid irritation."
  ingName1 = "1 tablespoon of apple cider vinegar"
  ingDescription1 = "Contains natural acids to combat bacteria and inflammation."
  ingName2 = "3 tablespoons of water"
  ingDescription2 = "Dilutes the vinegar to make it gentle on the skin."
  ingName3 = "Cotton pads"
  ingDescription3 = "Helps apply the toner evenly on the skin."
  instructions = " 1. Mix 1 tablespoon of apple cider vinegar with 3 tablespoons of water. 2. Soak a cotton pad in the solution and apply it to your skin. 3. Leave it on for 1 minute, then rinse off with water. 4. Use sparingly and avoid applying on open wounds or irritated skin."
  />
   <br/>
  <Recipes recipeName = "Baking Soda Paste"
    image = {image17}
  description = " Baking soda acts as a natural exfoliant, removing dead skin cells and excess oil for clearer skin."
  ingName1 = "1 teaspoon of baking soda"
  ingDescription1 = "Acts as an exfoliant to unclog pores and remove dead skin cells."
  ingName2 = "A small amount of water"
  ingDescription2 = "Used to form a paste with the baking soda."
  instructions = " 1. Mix 1 teaspoon of baking soda with a small amount of water to form a paste. 2. Apply the paste to the affected areas and leave it on for 10 minutes. 3. Rinse thoroughly with water and pat your skin dry. 4. Use sparingly as overuse may irritate the skin."
  />
   <br/>
    </datalis>
    <br/>
    <details>
  <summary>Blackhead treatment</summary>
  <div className="container">
    <p>
      Uncover easy and natural remedies to remove blackheads and achieve smooth, radiant skin. These simple recipes are crafted to deeply cleanse your pores and leave your skin feeling refreshed and rejuvenated.
    </p>
    </div>
    <Recipes recipeName = "Egg White Mask"
    image = {image18}
  description = "   This mask deeply cleanses the skin and removes blackheads, leaving your skin clearer and more radiant. Try it for a refreshed, glowing complexion!"
  ingName1 = "1 egg white"
  ingDescription1 = "Helps tighten the skin and pull out blackheads."
  ingName2 = "Small pieces of tissue paper"
  ingDescription2 = "Used to create a peel-off mask layer."
  ingName3 = "A small brush"
  ingDescription3 ="To evenly distribute the egg white on the skin."
  instructions = " 1. Wash your face thoroughly with warm water to remove dirt and open up the pores. 2. Gently pat your skin dry with a clean towel. 3. Whisk the egg white slightly with a fork until it becomes liquid and easy to apply. 4. Using a small brush, apply a thin layer of egg white to the areas with blackheads. 5. Place small pieces of tissue paper over the areas coated with egg white, pressing gently to make them stick. 6. Apply another layer of egg white on top of the tissue to secure it. 7. Leave the mask on your face until it dries completely (approximately 15-20 minutes). 8. Once the tissue is dry and firm, gently peel it off from bottom to top. Blackheads will stick to the tissue. 9. Rinse your face with lukewarm water to remove any remaining egg white. 10. Moisturize your skin with a suitable cream to prevent dryness."
  />
  <br/>
  <Recipes recipeName = "Honey and Lemon Mask"
    image = {image19}
  description = "Honey hydrates the skin, while lemon cleanses the pores with its antibacterial properties. A perfect combination for glowing skin!"
  ingName1 = "1 tablespoon of honey"
  ingDescription1 = "Moisturizes the skin and soothes irritation."
  ingName2 = "Half a lemon"
  ingDescription2 = "Contains natural antibacterial properties to cleanse pores."
  instructions = " 1. Coat the cut side of the half lemon with honey. 2. Gently rub the lemon over the affected areas with blackheads in circular motions for 3-5 minutes. 3. Leave the mixture on your skin for 5 minutes. 4. Rinse your face with cold water."
  />
  <br/>
  <Recipes recipeName = "Oatmeal Mask"
    image = {image20}
  description = " Oatmeal acts as a natural exfoliator, helping to remove dead skin cells and excess oil for a smoother, clearer complexion."
  ingName1 = "2 tablespoons of oatmeal"
  ingDescription1 = "Gently exfoliates and nourishes the skin."
  ingName2 = "Warm water"
  ingDescription2 = "Helps create a paste for easy application."
  instructions = " 1. Mix the oatmeal with an appropriate amount of warm water to form a thick paste. 2. Apply the mixture evenly on your face and leave it for 15 minutes to dry. 3. Rinse off gently with lukewarm water"
  />
   <br/>
  <Recipes recipeName = "Steam and Clean"
    image = {image21}
  description = " Steam softens accumulated oils, making their removal easier without harsh pressure on the skin."
  ingName1 = "A bowl of hot water"
  ingDescription1 = "Produces steam to open pores and loosen debris."
  ingName2 = "A towel or cover"
  ingDescription2 = "Helps trap the steam for better effect."
  ingName3 = "Soft cotton pads"
  ingDescription3 = "For gentle removal of blackheads after steaming."
  instructions = " 1. Expose your face to hot water steam for 10 minutes to open up the pores. 2. Use a soft cotton pad gently to remove blackheads without harsh pressure."
  />
   <br/>
  <Recipes recipeName = "Vaseline for Blackhead Removal"
    image = {image22}
  description = " Vaseline is a popular home remedy for blackhead removal, helping to soften pores and making it easier to remove impurities and dirt. It acts as a powerful moisturizer and, when used correctly, aids in cleaning the skin."
  ingName1 = "Jar of Vaseline"
  ingDescription1 = "Helps moisturize and soften pores for easier blackhead removal."
  ingName2 = "Plastic wrap"
  ingDescription2 = "Keeps the area warm and moist for better results."
  ingName3 = "Towel"
  ingDescription3 = "Used to apply warmth to the skin."
  ingName4 = "Warm water"
  ingDescription4 = "To wet the towel and provide gentle heat."
  instructions = " 1. Clean your face with a suitable cleanser and pat it dry. 2. Apply a thick layer of Vaseline on the affected area with blackheads. 3. Cover the area with plastic wrap to retain heat and moisture. 4. Place a towel soaked in warm water over the plastic for 5-10 minutes, ensuring the temperature is comfortable. 5. Remove the plastic and towel, and gently massage the area with a soft tissue or clean cotton pad. 6. Use a sanitized blackhead removal tool to carefully extract blackheads. The softened pores make removal easier. 7. Wash your face with cold water to close the pores, and apply a light moisturizer."
  />
   <br/>
    </details>
    <br/>
    <details>
  <summary>Wrinkles and fine lines treatment.</summary>
  <div className="container">
    <p>
    Discover effective solutions to reduce wrinkles and fine lines, helping you achieve smoother, more youthful-looking skin. These easy-to-follow remedies nourish and hydrate your skin, restoring its natural elasticity and promoting a youthful glow.
    </p>
  </div>
  <Recipes recipeName = "Olive Oil"
    image = {image23}
  description = "Olive oil deeply moisturizes the skin and reduces wrinkles thanks to its antioxidants and vitamin E."
  ingName1 = "A few drops of olive oil"
  ingDescription1 = "Packed with vitamin E and antioxidants to nourish and hydrate the skin."
  instructions = " 1. Massage your skin with olive oil before bedtime. 2. Wipe off the excess oil using a soft towel."
  />
  <br/>
  <Recipes recipeName = "Aloe Vera"
    image = {image24}
  description = " Contains malic acid that enhances skin elasticity and reduces wrinkles."
  ingName1 = "Fresh Aloe Vera gel"
  ingDescription1 = "Rich in nutrients that improve skin elasticity and hydration."
  instructions = " 1. Apply the gel to your face and gently massage. 2. Leave it on for 15–20 minutes, then rinse with water."
  />
  <br/>
  <Recipes recipeName = "Turmeric and Honey Mask"
    image = {image25}
  description = " Turmeric helps reduce signs of aging, while honey hydrates and rejuvenates the skin."
  ingName1 = "1 teaspoon turmeric"
  ingDescription1 = "Reduces aging signs and brightens the skin."
  ingName2 = "1 teaspoon honey"
  ingDescription2 = "Moisturizes and revitalizes the skin."
  ingName3 = "1 teaspoon almond milk"
  ingDescription3 = "Enhances skin hydration and smoothness."
  instructions = " 1. Mix all the ingredients well in a bowl. 2. Apply the mixture to your face and leave it on for 20 minutes. 3. Rinse off with cold water."
  />
   <br/>
  <Recipes recipeName = "Green Tea"
    image = {image26}
  description = "  Antioxidants combat free radicals, keeping your skin youthful and healthy."
  ingName1 = "Used green tea bags"
  ingDescription1 = "Rich in antioxidants to rejuvenate and refresh the skin."
  instructions = " 1. Place chilled green tea bags on your face. 2. Leave them on for 10–15 minutes."
  />
   <br/>
  <Recipes recipeName = "Egg White"
    image = {image27}
  description = "  Proteins and vitamins help tighten the skin and reduce fine lines."
  ingName1 = "1 egg white"
  ingDescription1 = "Rich in nutrients to firm and tone the skin."
  instructions = " 1. Whisk the egg white thoroughly and apply it to your face. 2. Let it dry completely, then rinse with lukewarm water."
  />
   <br/>
  </details>
    </div>
    )
}
export default SkinCare;
