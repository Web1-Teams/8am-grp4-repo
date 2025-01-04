import React from "react";
import IntroSection from "./IntroSection";
import Recipes from "./Recipes";

import coconutOilandHoney from "../../assests/Images/imagesForC2/coconutOilandHoney.jpg";
import avocadoANDegg from "../../assests/Images/imagesForC2/avocadoANDegg.jpg";
import hotOliveOil from "../../assests/Images/imagesForC2/hotOliveOil.jpg";
import bananaANDhoney from "../../assests/Images/imagesForC2/bananaANDhoney.jpg";
import aloeveraAndArganOil from "../../assests/Images/imagesForC2/aloeveraAndArganOil.jpg";

import castorOil from "../../assests/Images/imagesForC2/castorOil.jpg";
import henna from "../../assests/Images/imagesForC2/henna.jpg";
import helbah from "../../assests/Images/imagesForC2/helbah.jpg";
import egg from "../../assests/Images/imagesForC2/egg.jpg";
import yogurtANDhoney from "../../assests/Images/imagesForC2/yogurtANDhoney.jpg";

import garlicAndHoney from "../../assests/Images/imagesForC2/garlicAndHoney.jpg";
import coconutOilandlemon from "../../assests/Images/imagesForC2/coconutOilandlemon.jpg";
import oliveOil from "../../assests/Images/imagesForC2/oliveOil.jpg";
import teaTreeOil from "../../assests/Images/imagesForC2/teaTreeOil.jpg";
import appleCider from "../../assests/Images/imagesForC2/appleCider.jpg";

import rosmaryOil from "../../assests/Images/imagesForC2/rosemaryoil.jpg";
import amlaPowder from "../../assests/Images/imagesForC2/amlaPowder.jpg";
import sesameOil from "../../assests/Images/imagesForC2/sesameoil.jpg";
import riceWater from "../../assests/Images/imagesForC2/riceWater.jpg";
import bananaHoney from "../../assests/Images/imagesForC2/bananaHoney.jpg";

import arganOil from "../../assests/Images/imagesForC2/arganoil.jpg";
import aloevera from "../../assests/Images/imagesForC2/aloevera.jpg";
import sweetAlmondOil from "../../assests/Images/imagesForC2/mintANDcoconutOil.jpg";
import coconutAndMintOil from "../../assests/Images/imagesForC2/riceWater.jpg";
import yogurtAndOats from "../../assests/Images/imagesForC2/yogurtANDoats.jpg";

import vaslean from "../../assests/Images/imagesForC2/vaslean.jpg";
import kettanOil from "../../assests/Images/imagesForC2/kettanOil.jpg";
import roseWater from "../../assests/Images/imagesForC2/roseWater.jpg";
import greenTea from "../../assests/Images/imagesForC2/greenTea.jpg";
import milk from "../../assests/Images/imagesForC2/milk.jpg";


const HairCareClinic = (props) => {

    return (
<div>

        <IntroSection title = "Elevate Your Hair Care"
    subtitle1 = " Because your hair deserves care as vibrant as your personality."
   subtitle2 = "Step into a world of hair care where every "
   specific1 = "strand tells a story"
   subtitle3 = ", every routine becomes a celebration, and every moment brings you closer to your most stunning self."
   subtitle4 = "Your hair isn’t just hair – it’s "
   specific2 = "confidence"
   subtitle5 = ", beauty, and an expression of your unique style."
   subtitle6 = "Shine brighter, feel smoother, and love your locks – because hair care is self-love. Let’s create your ultimate hair transformation."
    />

  <details>
    <summary>Hair Repair and Split Ends Treatment</summary>
    <div className="container">
      <p> Explore a variety of remedies to repair and nourish damaged hair. These treatments are easy to prepare and provide your hair with the care it needs to reduce split ends and restore its natural shine.</p>
    </div>
    <Recipes 
    recipeName="Coconut Oil & Honey Mask"
    image = {coconutOilandHoney}
    description="Coconut oil is a magical ingredient for your hair. It deeply nourishes and hydrates hair from roots to ends, enhancing its shine. Honey is a natural humectant that retains moisture in your hair, making it ideal for dry hair. It also works as an emollient, softening and smoothing your hair while restoring its shine and vitality."
    ingName1="1 tbsp coconut oil"
    ingDescription1="Coconut oil deeply nourishes and hydrates the hair, enhancing its shine."
    ingName2="1 tbsp honey"
    ingDescription2="Honey retains moisture in the hair and smoothens its texture."
    instructions={
      <ol>
          <li>Mix all ingredients in a bowl.</li>
          <li>Transfer the mixture to a saucepan and heat until melted.</li>
          <li>Apply the mixture to your hair from roots to ends and cover with a shower cap.</li>
          <li>Leave the mask on for 15-20 minutes.</li>
          <li>Rinse your hair thoroughly with water.</li>
      </ol>
  }
    />
    <Recipes 
    recipeName="Avocado & Egg Mask"
    image = {avocadoANDegg}
    description="This mask is perfect for nourishing and strengthening your hair. Avocado is rich in healthy fats that deeply moisturize, while eggs provide protein to strengthen hair strands. The addition of rose oil offers a pleasant fragrance and added nourishment, and castor oil promotes hair growth and adds shine."
    ingName1="1 medium avocado"
    ingDescription1="Rich in healthy fats that deeply moisturize hair."
    ingName2="1 egg"
    ingDescription2="Provides protein to strengthen hair strands."
    ingName3="5 drops of rose oil"
    ingDescription3="Adds a pleasant fragrance and nourishes the scalp."
    ingName4="1 tbsp castor oil"
    ingDescription4="Promotes hair growth and adds shine."
    instructions="1. In a small bowl, mash the avocado and mix it with castor oil, rose oil, and the egg until you achieve a smooth, even mixture.<br/>
     2. Dampen your hair with water and apply the mask to your scalp first, then spread it evenly through the rest of your hair.<br/>
      3. Cover your hair with a shower cap and leave the mask on for 45 minutes.<br/>
       4. After the time has passed, rinse your hair with lukewarm water and a mild shampoo.<br/>
        5. Use this mask once a week for best results and healthier hair."
    />

    <Recipes 
    recipeName="Hot Olive Oil Treatment"
    image = {hotOliveOil}
    description="This hot oil treatment is designed to protect and nourish dry hair. Olive oil works to deeply hydrate the scalp, repair split ends, and strengthen weak hair strands. Combined with coconut oil and jojoba oil, this treatment restores shine, combats free radicals, and prevents premature graying. Perfect for reducing hair thinning and breakage, this monthly treatment is a natural solution for revitalizing dry hair."
    ingName1="Coconut oil"
    ingDescription1="Provides deep hydration and nourishment for dry hair."
    ingName2="Olive oil"
    ingDescription2="Repairs split ends and strengthens hair strands."
    ingName3="Jojoba oil"
    ingDescription3="Adds shine and helps combat hair thinning and damage."
    instructions="1. Wash your hair with a sulfate-free shampoo before starting the treatment.<br/>
     2. Place bottles of coconut oil, olive oil, and jojoba oil in a bowl of warm water on low heat for 2 minutes.<br/>
      3. Mix equal parts of the oils in a separate bowl until warm but not hot.<br/>
       4. Apply the oil mixture to your scalp and hair, massaging gently in circular motions.<br/>
        5. Warm a towel using a hairdryer and wrap it around your hair to lock in heat.<br/>
         6. Cover your hair with a plastic cap and leave the treatment on for 1 hour.<br/>
          7. Rinse your hair with lukewarm water and a gentle shampoo.<br/>
           8. Repeat this treatment once a month for optimal results."
    />

    <Recipes 
    recipeName="Aloe Vera & Argan Oil Mask"
    image = {bananaANDhoney}
    description="This mask deeply moisturizes and strengthens hair, making it perfect for treating split ends. Aloe vera provides soothing hydration, while argan oil enhances hair softness and shine."
    ingName1="2 tbsp aloe vera gel"
    ingDescription1="Aloe vera soothes and deeply hydrates the scalp and hair."
    ingName2="1 tbsp argan oil"
    ingDescription2="Argan oil enhances hair softness and provides a natural shine."
    instructions="1. Mix the aloe vera gel and argan oil in a bowl until well combined.<br/>
     2. Apply the mixture to your scalp and hair, massaging gently.<br/>
      3. Leave the mask on for 30 minutes.<br/>
       4. Rinse your hair with shampoo and conditioner as usual.<br/>
        5. Repeat weekly for stronger, healthier hair."
    />


    <Recipes 
    recipeName="Banana & Honey Mask"
    image = {aloeveraAndArganOil}
    description="This mask is perfect for hydrating and soothing dry hair. Banana nourishes the hair, while honey provides antioxidant properties and helps reduce dandruff."
    ingName1="1 ripe banana"
    ingDescription1="Banana nourishes the hair and helps improve its texture."
    ingName2="1/2 tbsp honey"
    ingDescription2="Honey provides hydration and reduces scalp irritation."
    instructions="1. Mash the ripe banana thoroughly until smooth.<br/>
     2. Add the honey to the mashed banana and mix well.<br/>
      3. Wash your hair with shampoo and let it dry slightly.<br/>
       4. Section your hair and apply the mask from roots to tips, focusing on the ends.<br/>
        5. Cover your hair with a shower cap and leave the mask on for 20-30 minutes.<br/>
         6. Rinse your hair with lukewarm water and shampoo as usual."
    />
  </details>

  <details>
    <summary>Hair Loss Treatment</summary>
      <div className="container">
        <p> Discover natural solutions to reduce hair loss and promote healthier, stronger hair. These remedies are easy to prepare and use, designed to nourish your scalp and support hair growth effectively.</p>
      </div>

    <Recipes 
    recipeName="Castor Oil Treatment"
    image = {castorOil}
    description="Castor oil is a natural remedy for hair loss, known for its ability to nourish the scalp, strengthen hair follicles, and promote healthy hair growth."
    ingName1="Equal parts of:"
    ingDescription1="Castor oil, coconut oil, sweet almond oil, and sesame oil."
    instructions="1. Mix all the oils thoroughly in equal parts.<br/>
     2. Warm the mixture by placing the container in hot water until slightly warm.<br/>
      3. Apply a small amount to your fingertips and massage into your scalp for a few minutes.<br/>
       4. Distribute the oil mixture through your hair from roots to tips.<br/>
        5. Leave the oil on your hair for one hour or overnight for better results.<br/>
         6. Wash your hair with lukewarm water and shampoo."
    />


    <Recipes 
    recipeName="Fenugreek Hair Mask"
    image = {helbah}
    description="Fenugreek helps to prevent hair loss, promote hair shine and softness, and enhance the health of hair follicles."
    ingName1="2 tbsp fenugreek seeds (ground)"
    ingDescription1="Rich in proteins, iron, and niacin, helps prevent hair loss and enhance shine."
    ingName2="1-2 tbsp olive oil, coconut oil, or argan oil"
    ingDescription2="Nourishing oils that hydrate and support healthy hair growth."
    instructions="1. Grind 2 tbsp of fenugreek seeds and mix with 1-2 tbsp of olive oil, coconut oil, or argan oil.<br/>
     2. Warm the mask in a container using warm water.<br/>
      3. Apply the mask to your hair, focusing on thinning or hair loss areas. You may cover your hair with a shower cap and leave it on for 10 minutes.<br/>
       4. Wash your hair with lukewarm water as usual."
    />

    <Recipes 
    recipeName="Egg Hair Mask"
    image = {egg}
    description="Eggs are rich in proteins that help rebuild keratin in the hair, reducing hair loss and repairing damaged hair."
    ingName1="2-3 whole eggs"
    ingDescription1="Rich in proteins that strengthen hair and reduce hair loss."
    ingName2="2-3 drops of lemon juice"
    ingDescription2="Lemon helps to neutralize the odor of eggs and adds a refreshing scent."
    instructions="1. Mix 2-3 whole eggs with 2-3 drops of lemon juice to reduce the egg smell.<br/>
     2. Whisk the mixture until it becomes frothy.<br/>
      3. Apply the mixture to your hair, massaging it evenly.<br/>
       4. Cover your hair with a shower cap and leave it on for 20 minutes.<br/>
        5. Rinse with cold water (hot water will cause the egg to coagulate on your hair).<br/>
         6. Wash your hair with shampoo and conditioner as usual.<br/>
          7. Repeat once or twice a month for best results."
    />

    <Recipes 
    recipeName="Yogurt and Honey Hair Mask"
    image = {yogurtANDhoney}
    description="This mask nourishes, hydrates, and strengthens hair, reduces dandruff, and promotes healthy hair growth."
    ingName1="Honey"
    ingDescription1="Contains antioxidants and antibacterial properties, helping to reduce hair fall and treat dandruff."
    ingName2="Yogurt"
    ingDescription2="Rich in vitamin B5 and D, nourishing hair follicles to prevent hair loss."
    instructions="1. Mix equal amounts of honey and yogurt.<br/>
     2. Apply the mixture to damp hair.<br/>
      3. Leave the mask on for 30-40 minutes before washing with shampoo.<br/>
       4. Repeat 2-3 times a week for best results."
    />

    <Recipes 
    recipeName="Natural Henna Hair Treatment"
    image = {henna}
    description="Henna helps strengthen hair, prevent hair loss, reduce dandruff, and promote healthy, shiny hair growth."
    ingName1="25-50g of henna powder"
    ingDescription1="Contains nutrients and organic acids that strengthen hair and prevent hair loss."
    ingName2="Hot water"
    ingDescription2="Used to form a thick paste with henna powder."
    ingName3="1-2 tablespoons of olive oil"
    ingDescription3="Adds nourishment to the hair, preventing split ends and promoting healthy growth."
    instructions="1. Mix 25-50g of henna powder with hot water to form a thick paste.<br/>
     2. Cover the mixture for 5-7 minutes.<br/>
      3. Add 1-2 tablespoons of olive oil to the paste.<br/>
       4. Apply the mixture to the roots and scalp, covering with a cap and towel, and leave it for 1 hour.<br/>
        5. Wash your hair as usual."
    />
  </details>

  <details>
    <summary>Dandruff Treatment</summary>
    <div className="container">
      <p>Explore effective remedies to treat dandruff and restore a healthy scalp. These simple and natural solutions are designed to soothe irritation, reduce flaking, and promote a balanced scalp, leaving you with clean and nourished hair.</p>
    </div>

    <Recipes 
    recipeName="Garlic and Honey Scalp Treatment"
    image = {garlicAndHoney}
    description="Garlic has antifungal properties that help eliminate dandruff, while honey soothes and nourishes the scalp."
    ingName1="Several garlic cloves"
    ingDescription1="Rich in antifungal properties to combat dandruff."
    ingName2="1 tablespoon of honey"
    ingDescription2="Soothes the scalp and helps nourish the hair."
    instructions="1. Mash the garlic cloves and mix them with honey to form a smooth paste.<br/>
     2. Apply the mixture to your scalp, massaging gently for 15 minutes.<br/>
      3. Wash your hair with shampoo.<br/>
       4. Repeat this treatment in the morning during your shower for best results."
    />

    <Recipes 
    recipeName="Coconut & Lemon Scalp Treatment"
    image = {coconutOilandlemon}
    description="Coconut oil nourishes the scalp and eliminates dandruff, while lemon juice helps balance the scalp and reduce flakes."
    ingName1="2 tbsp coconut oil"
    ingDescription1="Nourishes and hydrates the scalp, helping to eliminate dandruff."
    ingName2="2 tbsp lemon juice"
    ingDescription2="Helps balance the scalp, reduce flakes, and cleanse the pores."
    instructions="1. Heat 2 tablespoons of coconut oil in a small bowl.<br/>
     2. Mix it with an equal amount of lemon juice.<br/>
      3. Massage the mixture into your scalp thoroughly.<br/>
       4. Leave it on for 20–30 minutes before washing your hair with shampoo."
    />

    <Recipes 
    recipeName="Olive Oil Scalp Treatment"
    image = {oliveOil}
    description="Olive oil is rich in antioxidants and nourishes the scalp, helping to reduce dandruff and improve hair health."
    ingName1="Olive oil"
    ingDescription1="Packed with antioxidants to nourish the scalp and reduce dandruff."
    instructions="1. Massage a generous amount of olive oil into your scalp.<br/>
     2. Comb your hair gently to remove flakes.<br/>
      3. Cover your hair with a shower cap to lock in moisture.<br/>
       4. Wash your hair thoroughly after some time."
    />

    <Recipes 
    recipeName="Tea Tree Oil Scalp Treatment"
    image = {teaTreeOil}
    description="Tea tree oil is commonly used as a natural remedy for dandruff, helping to eliminate flakes and soothe the scalp."
    ingName1="10 drops of tea tree oil"
    ingDescription1="Known for its antibacterial and antifungal properties to help reduce dandruff."
    ingName2="Shampoo"
    ingDescription2="Used as a base to mix the tea tree oil and cleanse the scalp."
    instructions="1. Add 10 drops of tea tree oil to your regular shampoo.<br/>
     2. Mix well and massage into your scalp.<br/>
      3. This helps stimulate blood circulation and eliminate dandruff.<br/>
       4. Rinse thoroughly after a few minutes."
    />


    <Recipes 
    recipeName="Apple Cider Vinegar for Dandruff"
    image = {appleCider}
    description="Apple cider vinegar helps balance the pH of the scalp, combat bacteria, and reduce dandruff."
    ingName1="3 tablespoons of apple cider vinegar"
    ingDescription1="Helps balance the scalp's pH and fight bacteria and fungi causing dandruff."
    instructions="1. Massage 3 tablespoons of apple cider vinegar into your scalp for a few minutes.<br/>
     2. Leave it on for 10 minutes, then rinse thoroughly with shampoo.<br/>
      3. Repeat once or twice a week for best results."
    />
  </details>

  {/* <div> */}
  <details>
    <summary>Hair Growth Enhancement</summary>
    <div className="container">
      <p>Discover natural and effective remedies to promote hair growth. These simple recipes are designed to nourish the scalp and stimulate hair follicles, helping you achieve thicker, healthier hair.</p>
    </div>
    <Recipes 
    recipeName="Rosemary Oil for Hair Growth"
    image = {rosmaryOil}
    description="Rosemary oil is known for its ability to combat hair loss and stimulate new hair growth due to its anti-inflammatory properties and its ability to improve blood circulation to the scalp."
    ingName1="5 drops of rosemary oil"
    ingDescription1="Known for stimulating hair growth and improving blood circulation to the scalp."
    ingName2="1 tablespoon of carrier oil (e.g., coconut oil or jojoba oil)"
    ingDescription2="Helps dilute rosemary oil to prevent scalp irritation."
    instructions="1. Mix 5 drops of rosemary oil with 1 tablespoon of your chosen carrier oil (coconut oil or jojoba oil).<br/>
     2. Gently massage the mixture into your scalp after showering.<br/>
      3. Leave it on for at least 10 minutes before rinsing it out, or leave it overnight for best results.<br/>
       4. Repeat this treatment once or twice a week for faster hair growth."
    />

    <Recipes 
    recipeName="Amla Powder Hair Growth Treatment"
    image = {amlaPowder}
    description="Amla powder helps in stimulating hair growth, strengthening hair, and preventing hair loss. It's packed with antioxidants and nutrients that promote healthy hair growth."
    ingName1="1 tablespoon of olive oil"
    ingDescription1="Helps nourish and strengthen the hair."
    ingName2="2 tablespoons of coconut oil"
    ingDescription2="Moisturizes and strengthens the hair."
    ingName3="2 teaspoons of amla powder"
    ingDescription3="Stimulates hair growth and nourishes the scalp."
    instructions="1. Mix the coconut oil and olive oil in a pan, then heat the mixture.<br/>
     2. Add the amla powder to the oils and cook until the powder turns brown.<br/>
      3. Let the mixture cool down until it's bearable to touch.<br/>
       4. Strain the mixture to remove any leftover amla powder.<br/>
        5. Massage the oil mixture into your scalp for 15 minutes.<br/>
         6. Cover your hair with a shower cap and leave the mixture on for 30 minutes.<br/>
          7. Wash your hair with water and shampoo as usual.<br/>
           8. Repeat this treatment 3 times a week for best results."
    />

    <Recipes 
    recipeName="Sesame Oil Hair Mask"
    image = {sesameOil}
    description="Sesame oil helps stimulate hair growth, prevent early graying, and protect hair from harmful sun rays. A natural solution for healthy, thick hair!"
    ingName1="1 tablespoon of castor oil"
    ingDescription1="Helps nourish the scalp and stimulate hair growth."
    ingName2="2 tablespoons of coconut oil"
    ingDescription2="Moisturizes the hair and prevents damage."
    ingName3="2 tablespoons of sesame oil"
    ingDescription3="Promotes healthy hair growth and strengthens hair."
    ingName4="2 tablespoons of sweet almond oil"
    ingDescription4="Helps in treating hair loss and improving hair health."
    instructions="1. Mix 1 tablespoon of castor oil, 2 tablespoons each of coconut oil, sesame oil, and sweet almond oil.<br/>
     2. Heat the oil mixture slightly until warm.<br/>
      3. Gently massage the mixture into your scalp.<br/>
       4. Leave the sesame oil mask on your scalp overnight.<br/>
        5. Wash it off with shampoo in the morning."
    />

    <Recipes 
    recipeName="Fermented Rice Water Hair Mask"
    image = {riceWater}
    description="Fermented rice water promotes hair growth, strengthens the hair structure, and adds shine, leaving your hair thick, strong, and glossy."
    ingName1="1/2 cup of organic white rice"
    ingDescription1="The base ingredient for creating rice water."
    ingName2="1 cup of water"
    ingDescription2="Used to extract the beneficial compounds from the rice."
    instructions="1. Rinse the rice thoroughly, then place it in a bowl and add 1 cup of water.<br/>
     2. Mix the rice in the water for at least 5 minutes to release the active compounds.<br/>
      3. Boil the rice water for 10 minutes and let it cool for 30 minutes.<br/>
       4. Pour the cooled rice water into a clean, airtight container and leave it to ferment for 5-7 days.<br/>
        5. Once fermented, use it as a hair rinse after shampooing. Leave it on your hair for 20-30 minutes, then rinse with clean water.<br/>
         6. Alternatively, you can leave the rice water in your hair as a leave-in conditioner."
    />

    <Recipes 
    recipeName="Banana and Honey Hair Mask"
    image = {bananaHoney}
    description="The banana and honey mask is a natural and popular remedy for improving hair health, providing nourishment, hydration, and shine to the hair."
    ingName1="1 ripe banana"
    ingDescription1="Rich in vitamins A, B, and C, and minerals like potassium and magnesium for healthy, shiny hair."
    ingName2="2 tablespoons of honey"
    ingDescription2="A natural humectant that moisturizes and nourishes the hair."
    instructions="1. Peel and slice the ripe banana, then mash it into a smooth paste using a fork or blender.<br/>
     2. Add the honey to the mashed banana and mix thoroughly to create a smooth, homogeneous paste.<br/>
      3. Wash your hair with shampoo to remove dirt and excess oils, and gently towel dry your hair.<br/>
      4. Apply the mask to your hair and scalp, starting from the roots and working through to the ends.<br/>
       5. Massage the scalp gently to ensure even distribution of the mask.<br/>
        6. Cover your hair with a plastic cap or warm towel to enhance the moisturizing effect.<br/>
         7. Leave the mask on for 20-30 minutes to allow the nutrients to penetrate the hair.<br/>
          8. Rinse the mask out with lukewarm water, then wash your hair with your regular shampoo to remove any residual banana or honey.<br/>
           9. Gently towel dry your hair without rubbing to avoid breakage."
    />
  </details>
  {/* </div> */}

  {/* <div> */}
  <details>
    <summary>Hair Smoothing Remedies</summary>
    <div className="container">
      <p> Discover effective solutions to smooth and soften your hair, leaving it shiny and manageable. These easy-to-follow remedies nourish and hydrate your hair, restoring its natural softness and promoting a healthy, silky texture.</p>
    </div>
    <Recipes 
    recipeName="Argan Oil"
    image = {arganOil}
    description="Argan oil is rich in fatty acids and antioxidants like Vitamin E, providing deep hydration, shine, and protection against hair loss."
    ingName1="8-10 drops of argan oil"
    ingDescription1="Packed with fatty acids and Vitamin E to nourish and hydrate the hair."
    instructions="1. Massage 8-10 drops of argan oil onto your scalp using your fingers for 10 minutes, ensuring even coverage from roots to tips.<br/>
     2. Wrap your hair with a towel and leave it overnight.<br/>
      3. Wash your hair in the morning.<br/>
       4. Repeat this treatment twice a week for optimal results."  
    />

    <Recipes 
    recipeName="Aloe Vera Hair Mask"
    image = {aloevera}
    description="Aloe vera nourishes and moisturizes the hair, helping to reduce hair fall and dandruff while promoting smoothness and shine."
    ingName1="4 tablespoons of Aloe Vera gel"
    ingDescription1="Hydrates and nourishes the hair."
    ingName2="3 tablespoons of yogurt"
    ingDescription2="Provides protein and cleanses the scalp."
    ingName3="2 tablespoons of coconut oil"
    ingDescription3="Helps to moisturize and condition the hair."
    instructions="1. Mix 4 tablespoons of Aloe Vera gel, 3 tablespoons of yogurt, and 2 tablespoons of coconut oil to form a smooth paste.<br/>
     2. Apply the mixture to your hair and scalp.<br/>
      3. Leave the mask on for 30 minutes. <br/>
      4. Wash your hair with cold water.<br/>
       5. Repeat this treatment once a week for the best results."
    />
    <Recipes 
    recipeName="Almond Oil for Hair"
    image = {sweetAlmondOil}
    description="Almond oil nourishes and softens the hair, helping to increase shine and smoothness, especially when applied after a shower."
    ingName1="Sweet Almond Oil"
    ingDescription1="Rich in vitamins and minerals that hydrate and nourish the hair."
    instructions="1. Apply a small amount of sweet almond oil to your hands. 2. Gently massage the oil into your scalp and hair, focusing on the ends. 3. Leave the oil on for about 30 minutes, covering your hair with a towel. 4. Wash your hair thoroughly. 5. For an enhanced effect, repeat this treatment weekly for smoother and shinier hair."
    />

    <Recipes 
    recipeName="Peppermint Oil and Coconut Oil"
    image = {coconutAndMintOil}
    description="Peppermint oil promotes hair growth, alleviates scalp irritation, and gives your hair a refreshing scent when combined with coconut oil."
    ingName1="Peppermint oil"
    ingDescription1="Enhances blood circulation to the scalp, stimulates hair follicles, and reduces scalp itchiness."
    ingName2="Coconut oil"
    ingDescription2="Moisturizes the hair, adds shine, and nourishes the scalp."
    instructions="1. Mix 2-3 drops of peppermint oil with 2 tablespoons of coconut oil.<br/>
     2. Gently massage the mixture into your scalp for 5-10 minutes.<br/>
      3. Leave it on for 30 minutes before washing your hair with shampoo.<br/>
       4. For added benefits, you can also add 2-3 drops of peppermint oil to your regular shampoo or conditioner."
    />

    <Recipes 
    recipeName="Oatmeal and Yogurt Mask"
    image = {yogurtAndOats}
    description="Oatmeal nourishes the hair and helps promote growth, while yogurt adds moisture and shine to the hair."
    ingName1="3 tablespoons oatmeal"
    ingDescription1="Rich in essential nutrients like zinc and vitamins to strengthen and nourish hair."
    ingName2="1/2 teaspoon yogurt"
    ingDescription2="Moisturizes and adds smoothness to the hair."
    ingName3="1 tablespoon coconut oil"
    ingDescription3="Helps hydrate and strengthen the hair."
    ingName4="1 tablespoon honey"
    ingDescription4="Natural humectant that helps retain moisture and adds shine."
    instructions="1. Boil the oatmeal with yogurt in a deep bowl and mix thoroughly.<br/>
     2. Add the honey and coconut oil to the mixture and blend again with a hand mixer to create a smooth paste.<br/>
      3. Apply the mask to your hair and leave it on for 30 minutes. 4. Wash your hair as usual."
    />
  </details>


  <details>
    <summary>Eyelash Growth and Thickness</summary>
    <div className="container">
      <p>Discover a variety of recipes that help in growing and thickening your eyelashes. These simple-to-follow remedies nourish and strengthen your lashes, providing the care they need for longer and fuller lashes.</p>
    </div>
    <Recipes
    recipeName="Vaseline for Eyelash Growth & Thickness"
    image = {vaslean}
    description="While Vaseline doesn't speed up eyelash growth, it helps moisturize and make them appear thicker. It prevents moisture loss, leaving lashes looking fuller and healthier."
    ingName1="Vaseline"
    ingDescription1="Moisturizes and prevents moisture loss, making lashes appear thicker and fuller."
    instructions="1. After removing makeup, take a small amount of Vaseline on a cotton swab.<br/>
     2. Gently apply it to the base of your eyelashes, ensuring it doesn’t get into your eyes.<br/>
      3. Leave it on overnight and wash off in the morning.<br/>
       4. Repeat this process 2–3 times a week for the best results."
    />

    <Recipes
    recipeName="Green Tea for Eyelash Growth"
    image = {greenTea}
    description="Green tea is rich in antioxidants and vitamins that help stimulate eyelash growth. The catechins and vitamin C found in green tea promote healthy, fuller lashes."
    ingName1="Green tea (cooled)"
    ingDescription1="Rich in antioxidants and catechins that promote eyelash growth."
    ingName2="Jojoba oil (optional)"
    ingDescription2="Helps moisturize lashes and promote growth."
    instructions="1. Brew a cup of green tea and let it cool.<br/>
     2. Dip a cotton swab into the cooled tea and apply it to your eyelashes.<br/>
      3. Leave it on for 4-5 minutes, then rinse with cold water.<br/>
       4. For best results, mix green tea with jojoba oil and apply it to your lashes nightly."
    />

    <Recipes
    recipeName="Rose Water for Eyelash Thickening"
    image = {roseWater}
    description="Rose water is packed with antioxidants and vitamins such as Vitamin A, E, C, D, and B3, which help nourish and strengthen the eyelashes, promoting longer and thicker lashes over time."
    ingName1="Rose water"
    ingDescription1="Rich in antioxidants and vitamins that promote eyelash growth and thickness."
    ingName2="Honey (optional)"
    ingDescription2="Helps to moisturize and soothe the skin around the eyes."
    instructions="1. Mix a few drops of rose water with honey (if desired) to create a smooth consistency.<br/>
     2. Use a clean mascara brush to apply the mixture to your eyelashes.<br/>
      3. Gently massage the mixture into your lashes and leave it on overnight.<br/>
       4. For best results, apply regularly for at least a month to see noticeable growth."
    />

    <Recipes
    recipeName="Flaxseed for Eyelash and Eyebrow Thickening"
    image = {kettanOil}
    description="Flaxseeds help thicken and strengthen both eyelashes and eyebrows. They are rich in essential fatty acids and antioxidants that promote healthy hair growth and prevent hair breakage."
    ingName1="Flaxseed oil"
    ingDescription1="Rich in omega-3 fatty acids that promote hair growth and strength."
    ingName2="Flaxseed powder (optional)"
    ingDescription2="Contains proteins that strengthen hair follicles and prevent breakage."
    instructions="1. To use flaxseed oil, soak a cotton ball with the oil.<br/>
     2. Gently apply the oil to your eyelashes and eyebrows, massaging in circular motions.<br/>
      3. Leave the oil on for about 30 minutes before washing it off with warm water.<br/>
       4. For better results, repeat daily. 5. Alternatively, use flaxseed water by soaking the seeds for 24 hours, straining them, and applying the water to your lashes and eyebrows with a clean cotton ball."
    />

    <Recipes
    recipeName="Cold Milk for Eyelash Growth & Thickness"
    image = {milk}
    description="Cold milk is a natural ingredient that helps nourish and thicken the eyelashes. It contains proteins and vitamins that promote healthy eyelash growth, making them appear longer and thicker."
    ingName1="Cold milk"
    ingDescription1="Contains proteins and vitamins that nourish and strengthen the eyelashes."
    instructions="1. Dip a cotton ball into cold milk.<br/>
     2. Gently apply it to your eyelashes, ensuring they are fully coated.<br/>
      3. Leave it on for a few minutes, then rinse off with lukewarm water.<br/>
       4. Repeat this process twice daily for best results."
    />

  </details>
</div>
     )
    };


export default HairCareClinic;