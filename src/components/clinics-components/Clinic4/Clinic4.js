import AboutNutrition from "../../clinic4 Components/AboutNutrition"
import Tips from "../../clinic4 Components/Tips"
import Header from "../../header/Header"
import Review from "../../Review/Review"





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
      <AboutNutrition/>
      <Tips/>
      <Review/>
      </>
    )
 }
 
 
 export default Clinic4