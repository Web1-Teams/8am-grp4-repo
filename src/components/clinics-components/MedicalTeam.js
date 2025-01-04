import "./MedicalTeam.css";
import DoctorCard from "../doctorCard/DoctorCard";

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
          />
          
          <DoctorCard
            d_name="Dr. Ethan"
            d_specialist="Pulmonologist"
            d_num="0592345678"
            d_email="ethan@example.com"
          />
          {/* Additional Doctors */}
          <DoctorCard
            d_name="Dr. Sophia"
            d_specialist="Physiatrist"
            d_num="0598765432"
            d_email="sophia@example.com"
          />
          <DoctorCard
            d_name="Dr. Olivia"
            d_specialist="Rehabilitation Specialist"
            d_num="0591234567"
            d_email="olivia@example.com"
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
          />
          <DoctorCard
            d_name="Dr. Manar"
            d_specialist="Oncologist"
            d_num="0595678901"
            d_email="grace@example.com"
          />
          <DoctorCard
            d_name="Dr. Noah"
            d_specialist="Urologist"
            d_num="0596789012"
            d_email="noah@example.com"
          />
          {/* Additional Doctors */}
          <DoctorCard
            d_name="Dr. Ava"
            d_specialist="Therapist"
            d_num="0592345678"
            d_email="ava@example.com"
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
          />
          <DoctorCard
            d_name="Dr. Reem"
            d_specialist="Dermatologist"
            d_num="0590012345"
            d_email="adam@example.com"
          />
          <DoctorCard
            d_name="Dr. Olivia"
            d_specialist="Dentist"
            d_num="0599012345"
            d_email="olivia@example.com"
          />
          {/* Additional Doctors */}
          <DoctorCard
            d_name="Dr. Isabella"
            d_specialist="Cosmetic Surgeon"
            d_num="0599876543"
            d_email="isabella@example.com"
          />
        </div>
      </section>

      <section className="team-section nutrition">
        <h2>Nutrition Team</h2>
        <div className="team-grid">
          <DoctorCard
            d_name="Dr. Mia"
            d_specialist="Gynecologist"
            d_num="0591234567"
            d_email="mia@example.com"
          />
          <DoctorCard
            d_name="Dr. Isabella"
            d_specialist="Rheumatologist"
            d_num="0593456789"
            d_email="isabella@example.com"
          />
          <DoctorCard
            d_name="Dr. Lucas"
            d_specialist="Hematologist"
            d_num="0594567890"
            d_email="lucas@example.com"
          />
          {/* Additional Doctors */}
          <DoctorCard
            d_name="Dr. Henry"
            d_specialist="Endocrinologist"
            d_num="0596543210"
            d_email="henry@example.com"
          />
        </div>
      </section>
    </div>
  );
};

export default MedicalTeam;
