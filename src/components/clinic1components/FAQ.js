import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "What is mental health?",
      answer:
        "Mental health refers to cognitive, emotional, and social well-being. It affects how people think, feel, and behave in daily life.",
      tips: [
        "Practice mindfulness to stay present.",
        "Engage in hobbies you enjoy.",
        "Talk to someone you trust about your feelings.",
      ],
    },
    {
      question: "How can I improve my mental health?",
      answer:
        "You can improve mental health by staying active, eating healthily, getting enough sleep, seeking therapy, and staying connected with loved ones.",
      tips: [
        "Exercise regularly to boost endorphins.",
        "Maintain a consistent sleep schedule.",
        "Seek professional help when needed.",
      ],
    },
    {
      question: "What are common mental health issues?",
      answer:
        "Common issues include anxiety, depression, bipolar disorder, PTSD, and OCD. It's important to seek professional help if needed.",
      tips: [
        "Educate yourself about mental health conditions.",
        "Be supportive to those around you who may be struggling.",
        "Avoid stigma by discussing mental health openly.",
      ],
    },
    {
      question: "When should I see a therapist?",
      answer:
        "You should consider seeing a therapist if you're experiencing persistent sadness, anxiety, difficulty in daily tasks, or relationship issues.",
      tips: [
        "Don't wait for things to get worse before seeking help.",
        "Therapy is for everyone, not just during crises.",
        "Take the first step and book a consultation.",
      ],
    },
    {
      question: "What are the benefits of therapy?",
      answer:
        "Therapy helps individuals process emotions, develop coping strategies, and improve relationships. It also provides a safe space to express thoughts.",
      tips: [
        "Therapy can be beneficial even if you're not in a crisis.",
        "Consistency is key to seeing progress.",
        "Be open and honest with your therapist.",
      ],
    },
    {
      question: "How do I support a loved one with mental health issues?",
      answer:
        "Offer a listening ear, avoid judgment, and encourage them to seek professional help if needed. Be patient and understanding.",
      tips: [
        "Learn about their condition to better understand their struggles.",
        "Avoid offering unsolicited advice; sometimes listening is enough.",
        "Encourage but don’t pressure them to seek help.",
      ],
    },
    {
      question: "What role does physical health play in mental health?",
      answer:
        "Physical health and mental health are closely connected. Regular exercise, a balanced diet, and proper sleep improve mental well-being.",
      tips: [
        "Exercise for at least 30 minutes daily to release endorphins.",
        "Drink plenty of water and avoid excessive caffeine.",
        "Develop a consistent sleep routine.",
      ],
    },
    {
      question: "What is the difference between stress and anxiety?",
      answer:
        "Stress is a response to an external trigger, while anxiety is a persistent feeling of worry that may not be tied to a specific cause.",
      tips: [
        "Identify stressors and find ways to manage them.",
        "Practice deep breathing or meditation to calm anxiety.",
        "Consider professional help if anxiety persists.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Mental Health FAQs</h2>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className="faq-content"
              style={{
                maxHeight: activeIndex === index ? "300px" : "0",
                opacity: activeIndex === index ? "1" : "0",
                transition: "all 0.3s ease",
              }}
            >
              <div className="faq-answer">{faq.answer}</div>
              <ul className="faq-tips">
                {faq.tips.map((tip, i) => (
                  <li key={i} className="faq-tip">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
