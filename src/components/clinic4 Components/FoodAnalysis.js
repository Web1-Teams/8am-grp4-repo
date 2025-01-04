import React, { useState } from "react";

const FoodAnalysis = () => {
  const [tdee, setTdee] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tdeeValue = parseFloat(tdee);
    if (!isNaN(tdeeValue) && tdeeValue > 0) {
      const proteinRatio = 0.3; // 30%
      const carbsRatio = 0.5; // 50%
      const fatRatio = 0.2; // 20%

      const proteinCalories = tdeeValue * proteinRatio;
      const carbsCalories = tdeeValue * carbsRatio;
      const fatCalories = tdeeValue * fatRatio;

      setResult({
        proteinGrams: (proteinCalories / 4).toFixed(1),
        carbsGrams: (carbsCalories / 4).toFixed(1),
        fatGrams: (fatCalories / 9).toFixed(1),
        proteinCalories: proteinCalories.toFixed(1),
        carbsCalories: carbsCalories.toFixed(1),
        fatCalories: fatCalories.toFixed(1),
      });
    } else {
      setResult(null);
    }
  };

  return (
    <section id="تقسيم-السعرات">
      <h2>تقسيم السعرات الحرارية</h2>
      <form id="form-تقسيم" onSubmit={handleSubmit}>
        <label htmlFor="tdee">إجمالي احتياجك اليومي من السعرات (TDEE):</label>
        <input
          type="number"
          id="tdee"
          placeholder="أدخل إجمالي السعرات"
          value={tdee}
          onChange={(e) => setTdee(e.target.value)}
          required
        />
        <button type="submit">احسب</button>
      </form>
      {result ? (
        <div id="نتيجة-التقسيم">
          <p><strong>إجمالي السعرات:</strong> {tdee} سعرة حرارية</p>
          <ul>
            <li><strong>البروتين:</strong> {result.proteinGrams} جم ({result.proteinCalories} سعرة)</li>
            <li><strong>الكربوهيدرات:</strong> {result.carbsGrams} جم ({result.carbsCalories} سعرة)</li>
            <li><strong>الدهون الصحية:</strong> {result.fatGrams} جم ({result.fatCalories} سعرة)</li>
          </ul>
        </div>
      ) : (
        <p>يرجى إدخال قيمة صحيحة لإجمالي السعرات.</p>
      )}
    </section>
  );
};

export default FoodAnalysis;