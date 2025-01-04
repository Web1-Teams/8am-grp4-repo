import './Styles_C1 en.css'
import Review from '../../Review/Review'
import Header from '../../header/Header'
import InfoSection from "../../clinic1components/InfoSection";
import BenefitsSection from "../../clinic1components/BenefitsSection";
import ServiceCard from '../../clinic2 Components/ServiceCard';
import services  from '../../clinic1components/ServicesSection'
import FAQ from '../../clinic1components/FAQ';


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
     <Review/>

     </>
   )
}


export default Clinic1