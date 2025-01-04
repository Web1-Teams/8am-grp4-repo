import React, { useState } from "react";
import "./CaloriesCalculator.css";

const CaloriesCalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    if (!age || !weight || !height) {
      alert("يرجى إدخال جميع القيم");
      return;
    }

    // صيغة حساب السعرات (Mifflin-St Jeor Equation)
    const bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 5;
    const totalCalories = bmr * parseFloat(activityLevel);
    setCalories(totalCalories.toFixed(2));
  };

  return (
    <div id="حاسبة-السعرات">
      <h2>حاسبة السعرات الحرارية</h2>
      <p>استخدم هذه الحاسبة لمعرفة كمية السعرات الحرارية اليومية التي تحتاجها.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateCalories();
        }}
      >
        <label>
          العمر (بالسنوات):
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="أدخل العمر"
          />
        </label>

        <label>
          الوزن (بالكيلوجرام):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="أدخل الوزن"
          />
        </label>

        <label>
          الطول (بالسنتيمتر):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="أدخل الطول"
          />
        </label>

        <label>
          مستوى النشاط:
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="1.2">قليل النشاط</option>
            <option value="1.375">نشاط خفيف</option>
            <option value="1.55">نشاط متوسط</option>
            <option value="1.725">نشاط عالي</option>
            <option value="1.9">نشاط مكثف</option>
          </select>
        </label>

        <button type="submit">احسب السعرات</button>
      </form>

      {calories && (
        <div className="نتيجة">
          <h3>كمية السعرات اليومية:</h3>
          <p>{calories} سعر حراري</p>
        </div>
      )}
    </div>
  );
};

export default CaloriesCalculator;
