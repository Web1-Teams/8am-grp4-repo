import Exercise from "../clinic3ComponentsTemp/Exercise";
import Exercise2 from "../clinic3ComponentsTemp/Exercise2";
import Footer from "../Footer";
// import Header from "../header/Header";
import NavBar from "../navbar/Navbar";
// import RatingCard from "../RatingCard";
import Review from "../Review";

const Clinic3 = (props) => {
    return ( 
       <div>
         <NavBar/>
     
        
        {/* <div> 
          <Header
           ClinicName="Mental Health Clinic"
           ClinicAyah="{Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.}"
           className="page3Background"
           />
        </div> */}

        
        <p>
        <h2>Meditation & Mindfulness: A Guide to Inner Peace and Clarity</h2>
        <b>What is Meditation?</b><br/>
        Meditation is a mental practice where an individual uses techniques like focusing on<br/>
         a particular object, thought, or activity to train attention and awareness,<br/>
         achieving a mentally clear and emotionally calm state.
        <br/>
       <b>What is Mindfulness?</b> <br/>   
      Mindfulness is the practice of being fully present in the moment, <br/> 
      aware of where you are and what you're doing, without being <br/> 
      overly reactive or overwhelmed by what's happening around you.
      <br/> 
      </p>
      
      <section class="MentalTips">
        <h2>Tips for Building a Routine</h2>
        <ul>
          <li><b>Start Small: </b> Begin with 5 minutes a day.</li>
          <li><b>Consistency is Key: </b>Meditate at the same time each day.</li>
          <li><b>Set a Reminder: </b>Use alarms or calendar notifications.</li>
          <li><b>Be Patient: </b> It's okay if your mind wanders; progress takes time.</li>
          <li><b>Join a Community: </b>Meditation groups or online forums can keep you motivated.</li>
        </ul>
      </section> 
      <h2>Meditation Exercises</h2>

      <Exercise   exName="Breathing Awareness Exercise  " purpose="Cultivate focus and calmness."
     step1="Sit comfortably with your back straight." step2="Close your eyes and take a deep breath in through your nose."
     step3="Exhale slowly through your mouth." step4="Pay attention to the sensation of your breath entering and leaving your nostrils."
     step5="If your mind wanders, gently bring your attention back to your breath." Duration="Start with 5 minutes and gradually increase."
     video="https://youtu.be/DbDoBzGY3vo?si=CBblgKOn09fVEpT"
     />
     <Exercise2   exName="Loving-Kindness Meditation (Metta)" purpose="Cultivate compassion and positive feelings toward yourself and others."
     step1="Sit in a quiet space and close your eyes." step2="Begin by silently repeating phrases like:" point1="May I be happy."point2="May I be healthy."point3="May I be safe."
     step3="Gradually extend these wishes to loved ones, acquaintances, and even those you may have conflict with." step4="End by sending these positive intentions to all living beings."
      Duration="5-15 minutes."
     video="https://youtu.be/-d_AA9H4z9U?si=98eEPNMqa3RtDLD1"
     />
      <Exercise   exName="Visualization Meditation" purpose="Enhance relaxation and focus by imagining peaceful scenarios."
     step1="Close your eyes and take a few deep breaths." step2="Imagine a calming place, like a beach, forest, or mountain."
     step3="Picture the colors, sounds, and sensations of this place." step4="Stay with the visualization for several minutes, letting yourself relax completely."
     Duration="5-15 minutes."
     video="https://youtu.be/Z_u-P2hqL8M?si=WRn51pa97gpVl7dd"
     />
           <h2>Mindfulness Exercises</h2>

           <Exercise   exName="Five Senses Exercise" purpose="Ground yourself in the present moment using your senses."
     step1="Notice 5 things you can see (e.g., a tree, your hands)." step2="Notice 4 things you can feel (e.g., the texture of your clothes)."
     step3="Notice 3 things you can hear (e.g., birds chirping)." step4="Notice 2 things you can smell (e.g., coffee, fresh air)."
     step5="Notice 1 thing you can taste (e.g., mint gum)." Duration="3-5 minutes."
     video="https://youtu.be/30VMIEmA114?si=ENJqLhHhaXPWhrB9"
     />
      <Exercise   exName="Walking Meditation" purpose=" Practice mindfulness while moving."
     step1="Walk slowly and focus on the sensation of each step." step2="Notice the way your feet touch the ground, the rhythm of your movement, and the air on your skin."
     step3="Avoid distractions and focus solely on the act of walking." step4="Coordinate your breath with your steps if it feels comfortable."
     Duration="5-10 minutes."
     video="https://youtu.be/29sxsubdzj4?si=95ShfAB1ywL5Fbml"
     />
     <Exercise2   exName="Journaling for Mindfulness" purpose="Reflect and clear your mind."
     step1="Set aside a few minutes to write about your thoughts, emotions, or experiences without judgment." step2="Use prompts like:" point1="“What am I feeling right now?”"point2="“What made me smile today?”"point3="“What challenges did I face, and how did I respond?”"
     step3="Read over your entry to gain insight and clarity."
      Duration="5-10 minutes daily."
     video="https://youtu.be/7W1wUmI9ULw?si=YJoNpzTku_E6D9YO"
     />
        {/* <RatingCard/> */}
         <Review/>
         <Footer/>
        
         </div>
    
    )
  };

  export default Clinic3;