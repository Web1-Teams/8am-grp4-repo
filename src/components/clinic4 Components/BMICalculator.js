// BMICalculator.js
import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters ** 2)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("نقص الوزن");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setStatus("وزن طبيعي");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setStatus("زيادة في الوزن");
    } else {
      setStatus("سمنة");
    }
  };

  return (
    <section id="bmi-calculator" style={styles.container}>
      <h2 style={styles.heading}>حاسبة مؤشر كتلة الجسم (BMI)</h2>
      <form onSubmit={calculateBMI} style={styles.form}>
        <label htmlFor="weight" style={styles.label}>الوزن (كجم):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          style={styles.input}
        />

        <label htmlFor="height" style={styles.label}>الطول (سم):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>احسب</button>
      </form>

      {bmi && (
        <div style={styles.result}>
          <p><strong>BMI:</strong> {bmi}</p>
          <p><strong>الحالة:</strong> {status}</p>
        </div>
      )}
    </section>
  );
};

const styles = {
  container: {
    backgroundColor: "#e3ff80",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "100%",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  heading: {
    color: "#333",
    fontSize: "1.8rem",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontSize: "1.2rem",
    color: "#333",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#eeffb3",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#d4e880",
  },
  result: {
    marginTop: "20px",
    backgroundColor: "#eeffb3",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default BMICalculator;
