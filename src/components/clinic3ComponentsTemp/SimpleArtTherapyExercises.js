

const SimpleArtTherapyExercises = () => {
  const toggleContent = (event) => {
    const content = event.currentTarget.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  };

  return (
    <section className="simple-art-therapy">
      <h2>Simple Art Therapy Exercises</h2>
      <div className="exercise">
        <button className="toggle-button" onClick={toggleContent}>
          Drawing Emotions Exercise
        </button>
        <div className="content" style={{ display: "none" }}>
          <ul>
            <li><b>Goal:</b> Express your current feelings using colors and lines.</li>
            <li><b>Method:</b></li>
            <ul>
              <li>Take a blank sheet of paper and some colored pencils or watercolor paints.</li>
              <li>Ask yourself: "How am I feeling right now?"</li>
              <li>Draw lines or shapes that represent your emotions.</li>
              <li>Avoid judging your drawings; focus on how you feel during the process.</li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="exercise">
        <button className="toggle-button" onClick={toggleContent}>
          Vision Board Exercise
        </button>
        <div className="content" style={{ display: "none" }}>
          <ul>
            <li><b>Goal:</b> Visualize your goals and dreams creatively.</li>
            <li><b>Method:</b></li>
            <ul>
              <li>Use colored paper, magazine clippings, and glue.</li>
              <li>Design a board that reflects the things you want to achieve in the future.</li>
              <li>Place it somewhere visible to inspire you daily.</li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="exercise">
        <button className="toggle-button" onClick={toggleContent}>
          Anxiety Box Exercise
        </button>
        <div className="content" style={{ display: "none" }}>
          <ul>
            <li><b>Goal:</b> Manage negative or worrisome thoughts in a healthy way.</li>
            <li><b>Method:</b></li>
            <ul>
              <li>Create a box or repurpose an old container, decorating it as you like.</li>
              <li>Write down your worries or fears on small pieces of paper.</li>
              <li>
                Place these papers in the box and tell yourself that these concerns are now
                "stored," lightening your mental load.
              </li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="exercise">
        <button className="toggle-button" onClick={toggleContent}>
          Collaborative Drawing Exercise
        </button>
        <div className="content" style={{ display: "none" }}>
          <ul>
            <li><b>Goal:</b> Enhance communication and collaboration with others.</li>
            <li><b>Method:</b></li>
            <ul>
              <li>Gather a group of people (family, friends).</li>
              <li>Start with a large sheet of paper and draw something simple.</li>
              <li>Let each person add something to the drawing.</li>
              <li>Enjoy the final result together!</li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SimpleArtTherapyExercises;
