import Aboutc4 from "../../clinic4 Components/Aboutc4";
import BMICalculator from "../../clinic4 Components/BMICalculator";
import ImmuneBoostingTips from "../../clinic4 Components/ImmuneBoostingTips";
import WeightGainTips from "../../clinic4 Components/WeightGainTips";
import Header from "../../header/Header";
import Review from "../../Review/Review";
import NutritionTable from '../../NVTable/NutritionTable';
import CaloriesCalculator from "../../clinic4 Components/CaloriesCalculator";




const Clinic4=()=>{
    return(
     <>
       <div> 
           <Header
            ClinicName="عيادة التغذيه "
            ClinicAyah="{ يَا أَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا وَلَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ إِنَّهُ لَكُمْ عَدُوٌّ مُبِينٌ.}"
            className="page4Background"
            />
         </div>
         <Aboutc4/>
         <ImmuneBoostingTips/>
         <WeightGainTips/>
         <BMICalculator/>
         <CaloriesCalculator/>
         <NutritionTable/>
      <Review/>
      </>
    )
 }
 
 
 export default Clinic4