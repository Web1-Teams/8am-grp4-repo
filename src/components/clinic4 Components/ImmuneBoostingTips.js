import React from "react";
import './immune.css'

const ImmuneBoostingTips = () => {
  return (
    <section id="تعزيز-المناعة">
      <img src="تقويه المنااعه.png" alt="" />
      <img src="صوره طعام يقوي المناعه.jpg" alt="" />
      <h2>تعزيز المناعة باستخدام الأغذية</h2>
      <p>
        في ظل انتشار الأمراض والأوبئة، يعد تعزيز المناعة ضرورة أساسية للحفاظ على صحة الجسم. يمكن تحقيق ذلك من خلال التغذية السليمة التي توفر العناصر الغذائية اللازمة لدعم الجهاز المناعي.
      </p>

      <div id="نصائح-المناعة">
        <h3>نصائح غذائية لتعزيز المناعة</h3>
        <ul>
          <li><strong>تناول الفواكه الغنية بفيتامين سي:</strong> مثل البرتقال، الليمون، والجوافة.</li>
          <li><strong>أضف الأطعمة الغنية بالزنك:</strong> مثل المكسرات، الحبوب الكاملة، والأسماك.</li>
          <li><strong>تناول البروبيوتيك:</strong> لدعم صحة الأمعاء، مثل الزبادي والكيمتشي.</li>
          <li><strong>أضف الدهون الصحية:</strong> مثل زيت الزيتون والأفوكادو لدعم الجسم.</li>
        </ul>
      </div>

      <div id="خطط-غذائية">
        <h3>خطط غذائية مقترحة</h3>
        <table id="جدول-المناعة">
          <thead>
            <tr>
              <th>الوجبة</th>
              <th>المكونات</th>
              <th>الفوائد</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>الفطور</td>
              <td>عصير برتقال طبيعي، شوفان مع زبادي، مكسرات</td>
              <td>تعزيز الطاقة والمناعة بفيتامين سي والبروبيوتيك.</td>
            </tr>
            <tr>
              <td>الغداء</td>
              <td>سمك مشوي، أرز بني، خضروات طازجة</td>
              <td>دعم الجسم بالبروتين والزنك.</td>
            </tr>
            <tr>
              <td>العشاء</td>
              <td>سلطة الأفوكادو، شوربة العدس</td>
              <td>وجبة خفيفة غنية بالدهون الصحية.</td>
            </tr>
            <tr>
              <td>وجبة خفيفة</td>
              <td>حفنة لوز، كوب شاي أخضر</td>
              <td>مصدر مضادات الأكسدة.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ImmuneBoostingTips;
