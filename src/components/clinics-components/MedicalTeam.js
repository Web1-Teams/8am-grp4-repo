import "./MedicalTeam.css";
import DoctorCard from "../DoctorCard/DoctorCard";
import DoctorCard from "../doctorCard/DoctorCard";
import Dr1 from "../../assests/Images/medical team/D1.png";
import Dr2 from "../../assests/Images/medical team/D2.png";
import Dr3 from "../../assests/Images/medical team/DO1.jpeg";
import Dr4 from "../../assests/Images/medical team/DO2.jpg";
import Dr5 from "../../assests/Images/medical team/DO3.jpg";
import Dr6 from "../../assests/Images/medical team/DO4.png";
import Dr7 from "../../assests/Images/medical team/D3.avif";
import Dr8 from "../../assests/Images/medical team/DO5.jpeg";
import Dr9 from "../../assests/Images/medical team/DO6.webp";
import Dr10 from "../../assests/Images/medical team/DO7.jpeg";
import Dr11 from "../../assests/Images/medical team/DO8.avif";
import Dr12 from "../../assests/Images/medical team/D4.jpg";
import Dr13 from "../../assests/Images/medical team/D5.jpg";
import Dr14 from "../../assests/Images/medical team/DO9.webp";
import Dr15 from "../../assests/Images/medical team/D6.png";
import Dr16 from "../../assests/Images/medical team/D8.jpeg";

const MedicalTeam = () => {
  return (
    <div className="medical-team-container">
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

      <section className="team-section mental-health">
        <h2>Mental Health Team</h2>
        <div className="team-grid">
          <DoctorCard
            d_name="Dr. Farah"
            d_specialist="Psychiatrist"
            d_num="0597890123"
            d_email="chloe@example.com"
            d_img = {Dr5}
          />
          <DoctorCard
            d_name="Dr. Manar"
            d_specialist="Oncologist"
            d_num="0595678901"
            d_email="grace@example.com"
            d_img = {Dr6}
          />
          <DoctorCard
            d_name="Dr. Noah"
            d_specialist="Urologist"
            d_num="0596789012"
            d_email="noah@example.com"
            d_img = {Dr7}
          />
          {/* Additional Doctors */}
          <DoctorCard
            d_name="Dr. Ava"
            d_specialist="Therapist"
            d_num="0592345678"
            d_email="ava@example.com"
            d_img = {Dr8}
          />
        </div>
      </section>

      <section className="team-section self-care">
        <h2>Self-Care Team</h2>
        <div className="team-grid">
          <DoctorCard
            d_name="Dr. Sedra"
            d_specialist="Surgeon"
            d_num="0599090256"
            d_email="sedra@example.com"
            d_img = {Dr9}
          />
          <DoctorCard
            d_name="Dr. Reem"
            d_specialist="Dermatologist"
            d_num="0590012345"
            d_email="adam@example.com"
            d_img = {Dr10}
          />
          <DoctorCard
            d_name="Dr. Olivia"
            d_specialist="Dentist"
            d_num="0599012345"
            d_email="olivia@example.com"
            d_img = {Dr11}
          />
          {/* Additional Doctors */}
          <DoctorCard
            d_name="Dr. Momen"
            d_specialist="Cosmetic Surgeon"
            d_num="0599876543"
            d_email="isabella@example.com"
            d_img = {Dr12}
          />
        </div>
      </section>

      <section className="team-section nutrition">
        <h2>Nutrition Team</h2>
        <div className="team-grid">
          <DoctorCard
            d_name="Dr. Ahmad"
            d_specialist="Gynecologist"
            d_num="0591234567"
            d_email="mia@example.com"
            d_img = {Dr13}
          />
          <DoctorCard
            d_name="Dr. Isabella"
            d_specialist="Rheumatologist"
            d_num="0593456789"
            d_email="isabella@example.com"
            d_img = {Dr14}
          />
          <DoctorCard
            d_name="Dr. Lucas"
            d_specialist="Hematologist"
            d_num="0594567890"
            d_email="lucas@example.com"
            d_img = {Dr15}
          />
          {/* Additional Doctors */}
          <DoctorCard
            d_name="Dr. Henry"
            d_specialist="Endocrinologist"
            d_num="0596543210"
            d_email="henry@example.com"
            d_img = {Dr16}
          />
        </div>
      </section>
    </div>
  );
};

export default MedicalTeam;
