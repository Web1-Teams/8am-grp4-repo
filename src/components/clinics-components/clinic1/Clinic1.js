import './Styles_C1 en.css'
import Review from '../../Review/Review'
import Header from '../../header/Header'
import InfoSection from "../../clinic1components/InfoSection";
import BenefitsSection from "../../clinic1components/BenefitsSection";
import ServiceCard from '../../clinic2 Components/ServiceCard';
import services  from '../../clinic1components/ServicesSection'
import FAQ from '../../clinic1components/FAQ';
import DoctorCard from '../../doctorCard/DoctorCard';
import Dr1 from "../../../assests/Images/medical team/D1.png";
import Dr2 from "../../../assests/Images/medical team/D2.png";
import Dr3 from "../../../assests/Images/medical team/DO1.jpeg";
import Dr4 from "../../../assests/Images/medical team/D4.jpg";

const Clinic1=()=>{
   return(
    <>

          <Header
           ClinicName="Physiotherapy clinic"
           ClinicAyah="{The Messenger of God - may God bless him and grant him peace - said: “There is nothing wrong with wealth for the one who fears God, and health for the one who fears God is better than wealth, and a good soul is a blessing.” Sahih Ahmad and Ibn Majah}"
           className="page1Background"
           />

      <InfoSection />
      <BenefitsSection />
      <div className="services-grid">
      <ServiceCard
        serImage={services[0].image}
        service="https://galleriawoodsseniorliving.com/blog/orthopedic-physical-therapy/"
        serviceName={services[0].title}
        intro={services[0].description}
      />
      <ServiceCard
        serImage={services[1].image}
        service="https://en.wikipedia.org/wiki/Sports_medicine"
        serviceName={services[1].title}
        intro={services[1].description}
      />
      <ServiceCard
        serImage={services[2].image}
        service="https://en.wikipedia.org/wiki/Neural_therapy"
        serviceName={services[2].title}
        intro={services[2].description}
      />
      <ServiceCard
        serImage={services[3].image}
        service="https://en.wikipedia.org/wiki/Occupational_therapy"
        serviceName={services[3].title}
        intro={services[3].description}
      />
    </div>

<FAQ/>
<br/>
<section className="team-section physical-therapy">
        <h2>Physical Therapy Team</h2>
        <div className="team-grid">
          <DoctorCard
            d_name="Dr. Michael"
            d_specialist="Orthopedist"
            d_num="0594567890"
            d_email="michael@example.com"
            d_img = {Dr1}
          />
          
          <DoctorCard
            d_name="Dr. Ethan"
            d_specialist="Pulmonologist"
            d_num="0592345678"
            d_email="ethan@example.com"
            d_img = {Dr2}
          />
          {/* Additional Doctors */}
          <DoctorCard
            d_name="Dr. Sophia"
            d_specialist="Physiatrist"
            d_num="0598765432"
            d_email="sophia@example.com"
            d_img = {Dr3}
          />
          <DoctorCard
            d_name="Dr. Olivia"
            d_specialist="Rehabilitation Specialist"
            d_num="0591234567"
            d_email="olivia@example.com"
            d_img = {Dr4}
          />
        </div>
      </section>
     <Review/>

     </>
   )
}


export default Clinic1