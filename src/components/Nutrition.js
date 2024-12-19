
import Table from './Table'; 
const NutritionTables = () => {
  return (
    <div>
      <Table
        title="Balanced Diet"
        focus="All-around health"
        benefits="Promotes overall well-being, supports immune function, energy balance"
        foods="Vegetables, fruits, whole grains, lean proteins, healthy fats"
      />

      <Table
        title="Low-Carb Diet"
        focus="Weight loss, blood sugar control"
        benefits="Helps with weight loss, reduces blood sugar spikes"
        foods="Meat, fish, eggs, leafy greens, nuts, seeds"
      />

      <Table
        title="Ketogenic Diet"
        focus="Fat-burning, energy from fats"
        benefits="Supports fat burning, improves brain function, reduces seizures"
        foods="Fatty fish, butter, avocado, nuts, oils, low-carb veggies"
      />

      <Table
        title="Plant-Based Diet"
        focus="Environmental health, ethical eating"
        benefits="Reduces risk of chronic diseases, supports heart health"
        foods="Vegetables, fruits, legumes, nuts, seeds, whole grains"
      />

      <Table
        title="Paleo Diet"
        focus="Eating like our ancestors"
        benefits="Improves digestion, promotes weight loss"
        foods="Meat, fish, eggs, vegetables, fruits, nuts"
      />

      <Table
        title="Intermittent Fasting"
        focus="Weight loss, metabolic health"
        benefits="Helps with weight loss, improves insulin sensitivity"
        foods="Depends on eating window, typically normal meals"
      />
    </div>
  );
};

export default NutritionTables;
