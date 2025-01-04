import React from "react";
import "./aboutc4.css";

const Aboutc4 = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="text-section">
          <h2 className="about-title">عن عيادة التغذية</h2>
          <p className="about-description">
            في عيادة التغذية، نسعى إلى تقديم أفضل الخدمات الصحية المتعلقة بالتغذية
            لمساعدتك على تحسين نمط حياتك والوصول إلى أهدافك الصحية. نحن نؤمن بأن
            التغذية السليمة هي أساس الصحة والعافية.
          </p>
          <div className="about-services">
            <h3 className="services-title">خدماتنا تشمل:</h3>
            <ul className="services-list">
              <li>تقديم خطط غذائية مخصصة لكل فرد بناءً على احتياجاته الصحية.</li>
              <li>متابعة حالات فقدان الوزن وزيادته بطريقة صحية وآمنة.</li>
              <li>التعامل مع حالات الأمراض المزمنة مثل السكري وارتفاع ضغط الدم.</li>
              <li>تقديم النصائح والإرشادات لتغذية الأطفال والحوامل.</li>
              <li>توفير استشارات غذائية للرياضيين لتحسين الأداء.</li>
            </ul>
          </div>
          <div className="about-mission">
            <h3 className="mission-title">رسالتنا</h3>
            <p className="mission-text">
              تمكين الأفراد من تبني أسلوب حياة صحي ومتوازن من خلال تقديم الدعم
              الغذائي والمعرفي اللازم لتحقيق أهدافهم الصحية والشخصية.
            </p>
          </div>
        </div>

        <div className="image-section">
          <img src="/images/n1.jpg" alt="About Clinic" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default Aboutc4;
