import React from "react";
import "./NutritionTable.css";
const NutritionTable = () => {
    return (
      <section id="جدول-الغذاء">
        <h2>جدول القيم الغذائية</h2>
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
            <tr>
              <td>بيضة كبيرة</td>
              <td>1 بيضة</td>
              <td>6.25</td>
              <td>5</td>
              <td>0.5</td>
              <td>75</td>
            </tr>
            <tr>
              <td>بياض بيضة</td>
              <td>1 بياض</td>
              <td>3.5</td>
              <td>0</td>
              <td>0.35</td>
              <td>16.5</td>
            </tr>
            <tr>
              <td>صفار بيضة</td>
              <td>1 صفار</td>
              <td>2.7</td>
              <td>5</td>
              <td>0.5</td>
              <td>55</td>
            </tr>
            <tr>
              <td>جبنة كاملة الدسم</td>
              <td>100 غم</td>
              <td>8</td>
              <td>8</td>
              <td>1</td>
              <td>115</td>
            </tr>
            <tr>
              <td>جبنة قليلة الدسم</td>
              <td>100 غم</td>
              <td>8</td>
              <td>5</td>
              <td>1</td>
              <td>88</td>
            </tr>
            <tr>
              <td>لبن كامل الدسم</td>
              <td>100 غم</td>
              <td>8</td>
              <td>8</td>
              <td>8</td>
              <td>115</td>
            </tr>
            <tr>
              <td>لبن قليل الدسم</td>
              <td>100 غم</td>
              <td>8</td>
              <td>5</td>
              <td>8</td>
              <td>88</td>
            </tr>
            <tr>
              <td>جبنة مثلثات كاملة الدسم</td>
              <td>مثلث واحد</td>
              <td>1</td>
              <td>8</td>
              <td>1</td>
              <td>55</td>
            </tr>
            <tr>
              <td>جبنة مثلثات قليلة الدسم</td>
              <td>مثلث واحد</td>
              <td>1</td>
              <td>5</td>
              <td>1</td>
              <td>35</td>
            </tr>
            <tr>
              <td>جبنة قريش كاملة الدسم</td>
              <td>100 غم</td>
              <td>16</td>
              <td>8</td>
              <td>3</td>
              <td>160</td>
            </tr>
            <tr>
              <td>جبنة قريش قليلة الدسم</td>
              <td>100 غم</td>
              <td>17</td>
              <td>2</td>
              <td>3</td>
              <td>90</td>
            </tr>
            <tr>
              <td>حليب كامل الدسم</td>
              <td>كوب</td>
              <td>8</td>
              <td>8</td>
              <td>11</td>
              <td>150</td>
            </tr>
            <tr>
              <td>حليب قليل الدسم</td>
              <td>كوب</td>
              <td>8</td>
              <td>5</td>
              <td>12</td>
              <td>120</td>
            </tr>
            <tr>
              <td>لبن زبادي قليل الدسم</td>
              <td>علبة طعام</td>
              <td>8</td>
              <td>2</td>
              <td>5.5</td>
              <td>60</td>
            </tr>
            <tr>
              <td>كريمة لباني مخفوقة</td>
              <td>ملعقة طعام</td>
              <td>0.3</td>
              <td>2</td>
              <td>0.3</td>
              <td>28.4</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  };
  
  export default NutritionTable;