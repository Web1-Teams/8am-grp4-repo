import { useNavigate } from 'react-router-dom';
import Exercise from "../../clinic3ComponentsTemp/Exercise";
import Exercise2 from "../../clinic3ComponentsTemp/Exercise2";
import Footer from "../../Footer/Footer";
import Header from "../../header/Header";
import Review from "../../Review/Review";
import "../Clinic3/Styles_C3.css";
import SimpleArtTherapyExercises from "../../clinic3ComponentsTemp/SimpleArtTherapyExercises";
import BenefitsSection from "../../Benefites/BenefitsSection";
import { SlackIcon } from "hugeicons-react";

import Canvas from '../../clinic3ComponentsTemp/canvass/Canvas';


const Clinic3 = (props) => {
  const navigate = useNavigate();

  const handleOpenCanvas = () => {
    navigate('/canvas');
  };


    return ( 
      
       <div>


     
        
          <Header
           ClinicName="Mental Health Clinic"
           ClinicAyah="{Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.}"
           className="page3Background"
           clinicName="mental health"
           option1="meditation"
           option2="mindfulness"
           option3="art therapy"
           option4="suggested books"
           option5="relaxing sounds "
           />
        

        <h1>Our Services</h1>
        <BenefitsSection/>
        <div className="MeditationMindfulness" >
        
        <h2>Meditation & Mindfulness: A Guide to Inner Peace and Clarity</h2>
       <div className="MidAndMind">
        <section className="isMeditation"> <b>What is Meditation?</b><br/>
        Meditation is a mental practice where an individual uses techniques like focusing on<br/>
         a particular object, thought, or activity to train attention and awareness,<br/>
         achieving a mentally clear and emotionally calm state.
        <br/>
        </section>

       <section className="isMindfulness"><b>What is Mindfulness?</b> <br/>   
      Mindfulness is the practice of being fully present in the moment, <br/> 
      aware of where you are and what you're doing, without being <br/> 
      overly reactive or overwhelmed by what's happening around you.
      <br/> 
      </section>
      </div>
     
      
      <br/>
      <br/>
      <br/>
      <h2>Meditation Exercises</h2>

      {/* Parent Container for Collapsible Exercises */}
      <div className="accordion" id="exerciseAccordion">
        <Exercise
          exName="Breathing Awareness Exercise"
          purpose="Cultivate focus and calmness."
          step1="Sit comfortably with your back straight."
          step2="Close your eyes and take a deep breath in through your nose."
          step3="Exhale slowly through your mouth."
          step4="Pay attention to the sensation of your breath entering and leaving your nostrils."
          step5="If your mind wanders, gently bring your attention back to your breath."
          Duration="Start with 5 minutes and gradually increase."
          video="https://youtu.be/DbDoBzGY3vo?si=CBblgKOn09fVEpT"
          index={1}
        />
        <Exercise2
          exName="Loving-Kindness Meditation (Metta)"
          purpose="Cultivate compassion and positive feelings toward yourself and others."
          step1="Sit in a quiet space and close your eyes."
          step2="Begin by silently repeating phrases like:"
          point1="May I be happy."
          point2="May I be healthy."
          point3="May I be safe."
          step3="Gradually extend these wishes to loved ones, acquaintances, and even those you may have conflict with."
          step4="End by sending these positive intentions to all living beings."
          Duration="5-15 minutes."
          video="https://youtu.be/-d_AA9H4z9U?si=98eEPNMqa3RtDLD1"
          index={2}
        />
        <Exercise
          exName="Visualization Meditation"
          purpose="Enhance relaxation and focus by imagining peaceful scenarios."
          step1="Close your eyes and take a few deep breaths."
          step2="Imagine a calming place, like a beach, forest, or mountain."
          step3="Picture the colors, sounds, and sensations of this place."
          step4="Stay with the visualization for several minutes, letting yourself relax completely."
          Duration="5-15 minutes."
          video="https://youtu.be/Z_u-P2hqL8M?si=WRn51pa97gpVl7dd"
          index={3}
        />
      </div>
      <br/>

      <h2>Mindfulness Exercises</h2>
      <div className="accordion" id="exerciseAccordion">
        <Exercise
          exName="Five Senses Exercise"
          purpose="Ground yourself in the present moment using your senses."
          step1="Notice 5 things you can see (e.g., a tree, your hands)."
          step2="Notice 4 things you can feel (e.g., the texture of your clothes)."
          step3="Notice 3 things you can hear (e.g., birds chirping)."
          step4="Notice 2 things you can smell (e.g., coffee, fresh air)."
          step5="Notice 1 thing you can taste (e.g., mint gum)."
          Duration="3-5 minutes."
          video="https://youtu.be/30VMIEmA114?si=ENJqLhHhaXPWhrB9"
          index={4}
        />
        <Exercise
          exName="Walking Meditation"
          purpose="Practice mindfulness while moving."
          step1="Walk slowly and focus on the sensation of each step."
          step2="Notice the way your feet touch the ground, the rhythm of your movement, and the air on your skin."
          step3="Avoid distractions and focus solely on the act of walking."
          step4="Coordinate your breath with your steps if it feels comfortable."
          Duration="5-10 minutes."
          video="https://youtu.be/29sxsubdzj4?si=95ShfAB1ywL5Fbml"
          index={5}
        />
        <Exercise2
          exName="Journaling for Mindfulness"
          purpose="Reflect and clear your mind."
          step1="Set aside a few minutes to write about your thoughts, emotions, or experiences without judgment."
          step2="Use prompts like:"
          point1="“What am I feeling right now?”"
          point2="“What made me smile today?”"
          point3="“What challenges did I face, and how did I respond?”"
          step3="Read over your entry to gain insight and clarity."
          Duration="5-10 minutes daily."
          video="https://youtu.be/7W1wUmI9ULw?si=YJoNpzTku_E6D9YO"
          index={6}
        />
      </div>
      </div>
     <div className="Art">
      <div className="artTherapy">
  <h2>Art Therapy</h2>
  <p>
    Art Therapy is a form of expressive therapy that uses creative processes such as drawing, coloring,
    <br />
    sculpting, or collage-making to help individuals explore and express their emotions,
    <br />
    improve mental health, and gain personal insights. It is not about artistic skills
    <br />
    but about self-expression and the healing journey.
  </p>
</div>

<div className="sectionsContainer">
  <section className="mentalTechniques">
    <h2>Common Techniques in Art Therapy</h2>
    <ol>
      <li>
        <b>Spontaneous Drawing:</b> Helps participants draw what they feel without prior planning.
      </li>
      <li>
        <b>Coloring:</b> Coloring books can be used as a way to relieve stress.
      </li>
      <li>
        <b>Collage Making:</b> Combining images and magazine clippings reflects different aspects of one's personality.
      </li>
      <li>
        <b>Clay Sculpting:</b> Allows individuals to express their emotions in a tangible form.
      </li>
    </ol>
  </section>

  <section className="mentalColorImportance">
    <h2>The Importance of Colors in Art Therapy</h2>
    <ul>
      <li>
        <b>Warm Colors:</b> Such as red and orange, can express energy, anger, or passion.
      </li>
      <li>
        <b>Cool Colors:</b> Such as blue and green, help calm the mind and promote relaxation.
      </li>
      <li>
        <b>Black:</b> Can signify sadness or strength, depending on the context.
      </li>
      <li>
        <b>Yellow:</b> Reflects optimism and positivity.
      </li>
    </ul>
    <p>Choose colors that resonate with you and let them guide your artistic expression.</p>
  </section>
        <h2>Art Therapy</h2>
        <p className="ArtTherapy">

      <button onClick={handleOpenCanvas} className="openCanvasButton">
        Open Canvas
      </button>
          Art Therapy is a form of expressive therapy that uses creative processes such as drawing, coloring,
          <br />
          sculpting, or collage-making to help individuals explore and express their emotions,
          <br />
          improve mental health, and gain personal insights. It is not about artistic skills
          <br />
          but about self-expression and the healing journey.
        </p>
        <section className="mentalTechniques">
          <h2>Common Techniques in Art Therapy</h2>
          <ol>
            <li>
              <b>Spontaneous Drawing:</b> Helps participants draw what they feel without prior planning.
            </li>
            <li>
              <b>Coloring:</b> Coloring books can be used as a way to relieve stress.
            </li>
            <li>
              <b>Collage Making:</b> Combining images and magazine clippings reflects different aspects of one's personality.
            </li>
            <li>
              <b>Clay Sculpting:</b> Allows individuals to express their emotions in a tangible form.
            </li>
          </ol>
        </section>
        <section className="mentalColorImportance">
          <h2>The Importance of Colors in Art Therapy</h2>
          <ul>
            <li>
              <b>Warm Colors:</b> Such as red and orange, can express energy, anger, or passion.
            </li>
            <li>
              <b>Cool Colors:</b> Such as blue and green, help calm the mind and promote relaxation.
            </li>
            <li>
              <b>Black:</b> Can signify sadness or strength, depending on the context.
            </li>
            <li>
              <b>Yellow: </b>Reflects optimism and positivity.
            </li>
          </ul>
          <p>Choose colors that resonate with you and let them guide your artistic expression.</p>
        </section>
      </div>
      <SimpleArtTherapyExercises />
      </div>

      <section className="sleepMentalHealth">
        <div className="HowSleepAffects">
      <h2>How Sleep Affects Mental Health</h2>

        <h3>Emotional Regulation</h3>
        <p>
          Adequate sleep helps maintain emotional balance. Sleep deprivation can heighten emotional reactivity, making it harder to cope with stress or conflict.
        </p>

        <h3>Cognitive Function</h3>
        <p>
          Sleep plays a critical role in decision-making, problem-solving, and concentration. Chronic sleep deprivation impairs these functions, leading to forgetfulness, confusion, or difficulty focusing.
        </p>

        <h3>Mental Health Disorders</h3>
        
        <p>
          Insomnia and poor sleep quality are often linked to anxiety, depression, and bipolar disorder. In some cases, sleep disturbances can be both a symptom and a cause of these conditions.
        </p>
        </div>
       

        <div className="SignsOfPoorSleepHygiene">
        <h3>Signs of Poor Sleep Hygiene</h3>
        <ul>
          <li>Difficulty falling asleep or staying asleep.</li>
          <li>Feeling tired despite getting enough hours of sleep.</li>
          <li>Relying on naps or stimulants like caffeine to stay awake.</li>
          <li>Experiencing disrupted or restless sleep due to stress or physical discomfort.</li>
        </ul>
        </div>
        
        <div className="PhysicalAndEmotional">
        <h3>Physical and Emotional Benefits of Quality Sleep</h3>
        <ul>
          <li><b>Stress Reduction:</b> Restful sleep lowers cortisol levels, reducing stress.</li>
          <li><b>Improved Mood:</b> Adequate sleep fosters positivity and resilience.</li>
          <li><b>Strengthened Relationships:</b> Better emotional regulation reduces conflict.</li>
          <li><b>Enhanced Physical Health:</b> Sleep supports immune function and cardiovascular health.</li>
        </ul>
        </div>

        <div className="CreatingBetterSleepHabits">
        <h3>Creating Better Sleep Habits</h3>
        <ul>
          <li><b>Consistency is Key:</b> Sleep and wake at the same time daily.</li>
          <li><b>Relax Before Bed:</b> Develop a calming bedtime routine.</li>
          <li><b>Limit Stimuli:</b> Avoid screens and loud noises before bedtime.</li>
          <li><b>Optimize Environment:</b> Keep your room cool, dark, and quiet.</li>
          <li><b>Avoid Sleep Disruptors:</b> Limit caffeine and alcohol before bed.</li>
        </ul>
        </div>
        <div className="WhenToSeekProfessionalHelp">
        <h3>When to Seek Professional Help</h3>
        <p>
        If sleep disturbances persist despite efforts to improve habits, it may indicate an underlying issue such as:
        </p>
        <ul>
          <li><b>Insomnia:</b> Difficulty falling or staying asleep regularly.</li>
          <li><b>Sleep Apnea:</b>Breathing interruptions during sleep that cause frequent awakenings.</li>
          <li><b>Chronic Stress or Anxiety:</b>These can prevent the mind from relaxing.</li>
        </ul>
        <p>Consulting a healthcare professional or sleep specialist can provide insights and solutions, such as cognitive-behavioral therapy for insomnia (CBT-I) or relaxation techniques tailored to individual needs</p>

        </div>
    
      
      </section>
      
      {/* <Sound /> */}
         <Review/>
         <Footer/>
        
         </div>
    
    )
  };

  export default Clinic3;