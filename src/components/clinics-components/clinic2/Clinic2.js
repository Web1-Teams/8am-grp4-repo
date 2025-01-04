import React from "react";
import "./Styles_C2.css";
import HeaderSection from "../../clinic2 Components/HeaderSection";
import ServiceCard from "../../clinic2 Components/ServiceCard";
import skincarebackground from "../../../assests/Images/imagesForC2/skincareBackground.jpeg";
import haircarebackground from "../../../assests/Images/imagesForC2/haircareBackground.jpg";
import bodycarebackground from "../../../assests/Images/imagesForC2/bodycareBackground.jpeg";
import cleaneatingbackground from "../../../assests/Images/imagesForC2/cleaneatingBackground.png";
import BookList from "../../Books/BookList";
import TipCard from "../../clinic2 Components/TipCard";
import TestimonialBox from "../../clinic2 Components/TestimonialBox";
import visitor1 from "../../../assests/Images/imagesForC2/woman1.png";
import visitor2 from "../../../assests/Images/imagesForC2/child2.png";
import visitor3 from "../../../assests/Images/imagesForC2/women4.png";
import visitor4 from "../../../assests/Images/imagesForC2/man3.png";
import visitor5 from "../../../assests/Images/imagesForC2/women2.png";
import visitor6 from "../../../assests/Images/imagesForC2/man2.png";

const Clinic2 = (props) => {
  return (
    <div>
      <HeaderSection
        title="Embrace Your Natural Beauty and Inner Peace"
        subtitle="Discover the harmony of nature and self-care with treatments designed to nurture your beauty and well-being"
      />
      <section className="services-section" id="Our-Services">
        <div className="services-container">
          <h3>Our Services</h3>
          <div className="services-grid">
            <ServiceCard
              serImage={skincarebackground}
              service="/clinic2/SkinCare"
              serviceName="Skincare Treatments "
              intro="Personalized care for glowing, healthy skin."
            />
            <ServiceCard
              serImage={haircarebackground}
              service="/clinic2/HairCare"
              serviceName="Hair Care Solutions "
              intro="Rejuvenate your hair with our organic products.."
            />
            <ServiceCard
              serImage={bodycarebackground}
              service="/clinic2/BodyCare"
              serviceName="Body Care Routines "
              intro="Nourishing treatments for total wellness."
            />
            <ServiceCard
              serImage={cleaneatingbackground}
              service="/clinic2/CleanEating"
              serviceName="Clean Eating Recipes "
              intro="Rejuvenate your hair with our organic products."
            />
          </div>
        </div>
      </section>
      <section class="tips-section" id="Tips">
        <div class="tips-container">
          <h3>Beauty Tips</h3>
          <h4>Tips for Maintaining Healthy and Glowing Skin</h4>
          <div class="tips-row">
            <TipCard
              link="https://draxe.com/nutrition/how-to-stay-hydrated/"
              icon="💧"
              title="Stay Hydrated"
              description="Drinking water is essential for glowing skin."
            />
            <TipCard
              link="https://www.healthline.com/health/sunscreen-explained"
              icon="🧴"
              title="Use Sunscreen"
              description="Protect your skin from harmful UV rays every day."
            />
            <TipCard
              link="https://dermachange.com/blogs/health-and-wellness/beauty-benefits-of-getting-enough-sleep#:~:text=6%20Beauty%20Benefits%20of%20Getting%20Enough%20Sleep%201,6.%20You%27re%20less%20likely%20to%20break%20out.%20"
              icon="😴"
              title="Get Enough Sleep"
              description="Sleeping well is key to healthy, refreshed skin."
            />
            <TipCard
              link="https://www.beautybites.org/healthy-foods-important-appearance/"
              icon="🥦"
              title="Eat Healthy"
              description="Nutrition plays a vital role in skin health."
            />
            <TipCard
              link="https://www.sinyderm.com/blog/the-benefits-of-regular-skin-cleansing-a-dermatologists-perspective"
              icon="🧖‍♀️"
              title="Cleanse Regularly"
              description="Clean your face daily to remove dirt and excess oil."
            />
            <TipCard
              link="https://www.theskinnyconfidential.com/benefits-of-moisturizing-your-face-everyday/#:~:text=8%20Benefits%20Of%20Moisturizing%20Your%20Face%20Every%20Day,you%20a%20serious%20confidence%20boost.%20...%20More%20items"
              icon="🌸"
              title="Moisturize Daily"
              description="Keep your skin hydrated with a good moisturizer."
            />
            <TipCard
              link="https://www.beautymed.ca/blog/7-benefits-of-exfoliating-your-skin-regularly"
              icon="✨"
              title="Exfoliate Weekly"
              description="Exfoliate to remove dead skin cells and improve texture."
            />
            <TipCard
              link="https://www.soryalie.com/stresss-impact-on-beauty-and-wellness-explained/#:~:text=Key%20Takeaways%3A%201%20Stress%20can%20have%20negative%20effects,to%20a%20radiant%20and%20healthy%20appearance.%20More%20items"
              icon="🧘"
              title="Manage Stress"
              description="Stress can harm your skin; practice relaxation techniques."
            />
          </div>
        </div>
        <br />
        <div class="tips-container">
          <h4>Tips for strong and healthy hair</h4>
          <div class="tips-row">
            <TipCard
              link="https://www.haiirology.com/blog/hair-wash-tips-for-healthy-shiny-hair#:~:text=8%20Hair%20Washing%20Tips%20for%20Healthier%2C%20Shinier%20Hair,8%208.%20Choose%20the%20Right%20Water%20Temperature%20"
              icon="🚿"
              title="Wash Gently"
              description="Use a gentle shampoo and avoid overwashing to maintain natural oils."
            />
            <TipCard
              link="https://www.goodhousekeeping.com/beauty/hair/a28494129/healthy-hair/"
              icon="💆‍♀️"
              title="Condition Regularly"
              description="Apply conditioner to keep your hair soft and manageable."
            />
            <TipCard
              link="https://www.ipsy.com/blog/how-to-protect-hair-from-heat-damage"
              icon="🔥"
              title="Protect from Heat"
              description="Use heat protectant sprays before styling with heat tools."
            />
            <TipCard
              link="https://toneop.com/blog/superfoods-for-hair-growth-and-consumption-tips"
              icon="🥗"
              title="Eat Nutrient-Rich Foods"
              description="A balanced diet promotes strong and healthy hair."
            />
            <TipCard
              link="https://voiceofhair.com/7-tips-for-healthy-hair-how-often-you-should-get-a-trim/"
              icon="✂️"
              title="Trim Regularly"
              description="Get regular trims to prevent split ends and maintain hair health."
            />
            <TipCard
              link="https://headandshoulders.com/en-us/healthy-hair-and-scalp/dandruff/how-drinking-water-is-key-to-a-healthy-scalp"
              icon="💧"
              title="Stay Hydrated"
              description="Drinking water keeps your scalp and hair hydrated."
            />
            <TipCard
              link="https://www.anveya.com/blogs/top-tips/15-chemicals-to-avoid-from-hair-care-products"
              icon="🚫💇‍♀️"
              title="Avoid Harsh Chemicals"
              description="Limit the use of dyes and harsh treatments to prevent damage."
            />
            <TipCard
              link="https://www.isdin.com/us/blog/beauty/tips-to-protect-hair-from-sun/"
              icon="🌞"
              title="Protect from Sun"
              description="Wear a hat or use UV protection for your hair when in the sun."
            />
          </div>
        </div>
      </section>
      <br />
      <br />
      <BookList />
      <section id="testimonials">
        <div className="testimonial-heading">
          <span>Visitor reviews on our website :</span>
          <h4>We'd love to hear your thoughts!</h4>
        </div>
        <div className="testimonial-box-container">
          <TestimonialBox
            image={visitor1}
            name="Laila Ahmed"
            location="Riyadh, Saudi Arabia"
            stars={5}
            comment="This platform offers practical and easy-to-follow tips for healthier skin. The face mask recipe is exceptional it nourishes the skin while being completely safe. Great work!"
          />
          <TestimonialBox
            image={visitor2}
            name="Khaled Mahmoud"
            location="Cairo, Egypt"
            stars={4}
            comment="The nutrition tips on the site are very helpful and easy to follow. I noticed a big improvement in my energy levels and overall health."
          />
          <TestimonialBox
            image={visitor3}
            name="Manar Khader"
            location="Jerusalem, Palestine"
            stars={5}
            comment="I loved the hair care recipes! I tried the hair mask, and my hair feels so soft and healthy now. Highly recommended!"
          />
          <TestimonialBox
            image={visitor4}
            name="Omar Hassan"
            location="Amman, Jordan"
            stars={3}
            comment="Great website for self-care! The body scrub recipe worked wonders for my skin. I’ll definitely try more tips from here."
          />
          <TestimonialBox
            image={visitor5}
            name="Farah Mari"
            location="Nablus, Palestine"
            stars={4}
            comment="This website is a treasure trove of self-care recipes! The natural ingredients used in the DIY masks and scrubs make my skin feel amazing."
          />
          <TestimonialBox
            image={visitor6}
            name="Ahmed Saleh"
            location="Dubai, UAE"
            stars={2}
            comment="The recipes are okay, but a bit time-consuming. Could be more practical."
          />
        </div>
      </section>
    </div>
  );
};

export default Clinic2;
