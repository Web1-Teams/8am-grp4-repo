import React from "react";
import "../../styles/Styles_C2.css";
// import BookList from "../Books/BookList";
// import IntroSection from "../clinic2 Components/IntroSection";
import Navbar from "../navbar/Navbar";
// import RecipeCard from "../clinic2 Components/RecipeCard";
// import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import HairCareClinic from "../clinic2 Components/HairCareClinic";
// import RecipesS from "../clinic2 Components/RecipesS";
import CleanEatClinic from "../clinic2 Components/CleanEatClinic";
// import Recipes from "../clinic2 Components/Recipes";
import TipCard from "../clinic2 Components/TipCard";
import TestimonialBox from "../clinic2 Components/TestimonialBox";
import Footer from "../Footer";
import HeaderSection from "../clinic2 Components/HeaderSection";
import IntroSection from "../../clinic2 Components/IntroSection";
import ServiceCard from "../../clinic2 Components/ServiceCard";


const Clinic2 = (props) => {
    return (
        <div>
        <Navbar/>
        <br/><br/>
        <HeaderSection 
         title = "Embrace Your Natural Beauty and Inner Peace"
                subtitle = "Discover the harmony of nature and self-care with treatments designed to nurture your beauty and well-being"
         />
         <ServiceCard  SerImage = {image1}
         serviceName = "Skincare Treatments "
         intro = "Personalized care for glowing, healthy skin."
         />
          <ServiceCard  SerImage = {image2}
           serviceName = "Hair Care Solutions "
         intro = "Rejuvenate your hair with our organic products.."
         />
          <ServiceCard  SerImage = {image3} 
          serviceName = "Body Care Routines "
         intro = "Nourishing treatments for total wellness."
         />
          <ServiceCard  SerImage = {image4}
           serviceName = "Clean Eating Recipes "
         intro = "Rejuvenate your hair with our organic products."
         />

<section class="tips-section">
  <div class="tips-container">
    <h3>Beauty Tips</h3>
    <h4>Tips for Maintaining Healthy and Glowing Skin</h4>
    <div class="arrow left-arrow">‹</div>
    <div class="arrow right-arrow">›</div>
    <div class="tips-row">

         <TipCard link = "https://draxe.com/nutrition/how-to-stay-hydrated/"
          icon = "💧" 
         title = "Stay Hydrated"
          description = "Drinking water is essential for glowing skin." 
          />
          <TipCard link = "https://www.healthline.com/health/sunscreen-explained"
         icon = "🧴" 
         title = "Use Sunscreen" 
         description = "Protect your skin from harmful UV rays every day." 
         />
         <TipCard link = "https://dermachange.com/blogs/health-and-wellness/beauty-benefits-of-getting-enough-sleep#:~:text=6%20Beauty%20Benefits%20of%20Getting%20Enough%20Sleep%201,6.%20You%27re%20less%20likely%20to%20break%20out.%20"
         icon = "😴"
          title = "Get Enough Sleep"
           description = "Sleeping well is key to healthy, refreshed skin." 
         />
         <TipCard link = "https://www.beautybites.org/healthy-foods-important-appearance/"
         icon = "🥦"
          title = "Eat Healthy"
           description = "Nutrition plays a vital role in skin health." 
         />
         <TipCard link = "https://www.sinyderm.com/blog/the-benefits-of-regular-skin-cleansing-a-dermatologists-perspective"
         icon = "🧖‍♀️" 
         title = "Cleanse Regularly" 
         description = "Clean your face daily to remove dirt and excess oil."
         />
         <TipCard link = "https://www.theskinnyconfidential.com/benefits-of-moisturizing-your-face-everyday/#:~:text=8%20Benefits%20Of%20Moisturizing%20Your%20Face%20Every%20Day,you%20a%20serious%20confidence%20boost.%20...%20More%20items"
         icon = "🌸"
         title = "Moisturize Daily" 
         description = "Keep your skin hydrated with a good moisturizer." 
         />
         <TipCard link = "https://www.beautymed.ca/blog/7-benefits-of-exfoliating-your-skin-regularly"
         icon = "✨"
         title = "Exfoliate Weekly"
         description = "Exfoliate to remove dead skin cells and improve texture." 
         />
         <TipCard link = "https://www.soryalie.com/stresss-impact-on-beauty-and-wellness-explained/#:~:text=Key%20Takeaways%3A%201%20Stress%20can%20have%20negative%20effects,to%20a%20radiant%20and%20healthy%20appearance.%20More%20items"
         icon = "🧘"
         title = "Manage Stress"
         description = "Stress can harm your skin; practice relaxation techniques."
         />
         </div>
         </div> 
         <br/>
         <div class="tips-container">
         <h4>Tips for strong and healthy hair</h4>
         <TipCard link = "https://www.haiirology.com/blog/hair-wash-tips-for-healthy-shiny-hair#:~:text=8%20Hair%20Washing%20Tips%20for%20Healthier%2C%20Shinier%20Hair,8%208.%20Choose%20the%20Right%20Water%20Temperature%20"
         icon = "🚿"
          title = "Wash Gently"
          description = "Use a gentle shampoo and avoid overwashing to maintain natural oils." 
        />
        <TipCard link = "https://www.goodhousekeeping.com/beauty/hair/a28494129/healthy-hair/"
          icon = "💆‍♀️"
         title = "Condition Regularly"
         description = "Apply conditioner to keep your hair soft and manageable." 
        />
        <TipCard link = "https://www.ipsy.com/blog/how-to-protect-hair-from-heat-damage"
         icon = "🔥"
         title = "Protect from Heat"
         description = "Use heat protectant sprays before styling with heat tools." 
        />
        <TipCard link = "https://toneop.com/blog/superfoods-for-hair-growth-and-consumption-tips"
         icon = "🥗"
         title = "Eat Nutrient-Rich Foods"
         description = "A balanced diet promotes strong and healthy hair." 
        />
        <TipCard link = "https://voiceofhair.com/7-tips-for-healthy-hair-how-often-you-should-get-a-trim/"
         icon = "✂️"
         title = "Trim Regularly"
         description = "Get regular trims to prevent split ends and maintain hair health." 
        />
        <TipCard link = "https://headandshoulders.com/en-us/healthy-hair-and-scalp/dandruff/how-drinking-water-is-key-to-a-healthy-scalp"
         icon = "💧"
         title = "Stay Hydrated"
         description = "Drinking water keeps your scalp and hair hydrated." 
        />
        <TipCard link = "https://www.anveya.com/blogs/top-tips/15-chemicals-to-avoid-from-hair-care-products"
         icon = "🚫💇‍♀️"
         title = "Avoid Harsh Chemicals"
         description = "Limit the use of dyes and harsh treatments to prevent damage." 
        />
        <TipCard link = "https://www.isdin.com/us/blog/beauty/tips-to-protect-hair-from-sun/"
         icon = "🌞"
         title = "Protect from Sun"
         description = "Wear a hat or use UV protection for your hair when in the sun." 
        />
         </div>
         </section>
         <br/><br/>
         <Footer/>
        </div>
    )
}

export default Clinic2;
