import React from 'react';
import '../../components/NVTable/NutritionTable.css';

const Table = ({ title, rows }) => {
  return (
    <div className="table-container">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>المادة</th>
            <th>الكمية</th>
            <th>بروتين (غم)</th>
            <th>دهون (غم)</th>
            <th>كربوهيدرات (غم)</th>
            <th>سعرات حرارية</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.quantity}</td>
              <td>{row.protein}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
