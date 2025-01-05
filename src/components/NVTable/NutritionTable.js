import React from "react";
import Table from "./NutritionValue";

const NutritionTables = () => {
  const nutritionData = [
    {
      name: "بيضة كبيرة",
      quantity: "1 بيضة",
      protein: 6.25,
      fat: 5,
      carbs: 0.5,
      calories: 75,
    },

    {
      name: "بياض بيضة",
      quantity: "1 بياض",
      protein: 3.5,
      fat: 0,
      carbs: 0.35,
      calories: 16.5,
    },

    {
      name: "صفار بيضة",
      quantity: "1 صفار",
      protein: 2.7,
      fat: 5,
      carbs: 0.5,
      calories: 55,
    },

    {
      name: "جبنة كاملة الدسم",
      quantity: "100 غم",
      protein: 8,
      fat: 8,
      carbs: 1,
      calories: 115,
    },

    {
      name: "جبنة قليلة الدسم",
      quantity: "100 غم",
      protein: 8,
      fat: 5,
      carbs: 1,
      calories: 88,
    },

    {
      name: "لبن كامل الدسم",
      quantity: "100 غم",
      protein: 8,
      fat: 8,
      carbs: 8,
      calories: 115,
    },

    {
      name: "لبن قليل الدسم",
      quantity: "100 غم",
      protein: 8,
      fat: 5,
      carbs: 8,
      calories: 88,
    },

    {
      name: "جبنة مثلثات كاملة الدسم",
      quantity: "مثلث واحد",
      protein: 1,
      fat: 8,
      carbs: 1,
      calories: 55,
    },

    {
      name: "جبنة مثلثات قليلة الدسم",
      quantity: "مثلث واحد",
      protein: 1,
      fat: 5,
      carbs: 1,
      calories: 35,
    },

    {
      name: "جبنة قريش كاملة الدسم",
      quantity: "100 غم",
      protein: 16,
      fat: 8,
      carbs: 3,
      calories: 160,
    },

    {
      name: "جبنة قريش قليلة الدسم",
      quantity: "100 غم",
      protein: 17,
      fat: 2,
      carbs: 3,
      calories: 90,
    },

    {
      name: "حليب كامل الدسم",
      quantity: "كوب",
      protein: 8,
      fat: 8,
      carbs: 11,
      calories: 150,
    },

    {
      name: "حليب قليل الدسم",
      quantity: "كوب",
      protein: 8,
      fat: 5,
      carbs: 12,
      calories: 120,
    },

    {
      name: "لبن زبادي قليل الدسم",
      quantity: "علبة طعام",
      protein: 8,
      fat: 2,
      carbs: 5.5,
      calories: 60,
    },

    {
      name: "كريمة لباني مخفوقة",
      quantity: "ملعقة طعام",
      protein: 0.3,
      fat: 2,
      carbs: 0.3,
      calories: 28.4,
    },
  ];

  return (
    <div>
      <Table title="جدول القيم الغذائية" rows={nutritionData} />
    </div>
  );
};

export default NutritionTables;
