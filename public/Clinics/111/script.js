// حاسبة السعرات الحرارية
const form_السعرات = document.getElementById("form-السعرات");
const نتيجة_السعرات = document.getElementById("نتيجة-السعرات");

form_السعرات.addEventListener("submit", (e) => {
  e.preventDefault();

  const الوزن = document.getElementById("الوزن").value;
  const الطول = document.getElementById("الطول").value;
  const العمر = document.getElementById("العمر").value;

  if (الوزن && الطول && العمر) {
    // معادلة حساب السعرات
    const السعرات = 10 * الوزن + 6.25 * الطول - 5 * العمر + 5;
    نتيجة_السعرات.textContent = `سعراتك اليومية: ${Math.round(السعرات)} سعرة حرارية`;
  } else {
    نتيجة_السعرات.textContent = "يرجى إدخال جميع الحقول.";
  }
});



document.addEventListener("DOMContentLoaded", () => {
    const immuneTips = document.querySelector("#نصائح-المناعة ul");

    // زر لإضافة نصيحة جديدة
    const addTipButton = document.createElement("button");
    addTipButton.textContent = "إضافة نصيحة جديدة";
    addTipButton.style.padding = "10px";
    addTipButton.style.backgroundColor = "#4caf50";
    addTipButton.style.color = "white";
    addTipButton.style.border = "none";
    addTipButton.style.borderRadius = "5px";
    addTipButton.style.cursor = "pointer";
    immuneTips.parentNode.appendChild(addTipButton);

    addTipButton.addEventListener("click", () => {
        // إضافة نصيحة جديدة
        const newTip = document.createElement("li");
        newTip.innerHTML = "<strong>شرب الماء:</strong> يساعد في تحسين الدورة الدموية وتعزيز المناعة.";
        immuneTips.appendChild(newTip);

        // إخفاء الزر بعد الضغط
        addTipButton.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form_تقسيم = document.getElementById("form-تقسيم");
    const نتيجة_التقسيم = document.getElementById("نتيجة-التقسيم");

    form_تقسيم.addEventListener("submit", (e) => {
        e.preventDefault(); // منع تحديث الصفحة عند إرسال النموذج

        const tdeeInput = document.getElementById("tdee");
        const tdee = parseFloat(tdeeInput.value); // قراءة القيمة المدخلة وتحويلها إلى عدد

        if (!isNaN(tdee) && tdee > 0) {
            // النسب الموصى بها
            const نسبة_البروتين = 0.3; // 30%
            const نسبة_الكربوهيدرات = 0.5; // 50%
            const نسبة_الدهون = 0.2; // 20%

            // تقسيم السعرات
            const سعرات_البروتين = tdee * نسبة_البروتين;
            const سعرات_الكربوهيدرات = tdee * نسبة_الكربوهيدرات;
            const سعرات_الدهون = tdee * نسبة_الدهون;

            // تحويل السعرات إلى جرامات
            const جرام_البروتين = (سعرات_البروتين / 4).toFixed(1);
            const جرام_الكربوهيدرات = (سعرات_الكربوهيدرات / 4).toFixed(1);
            const جرام_الدهون = (سعرات_الدهون / 9).toFixed(1);

            // عرض النتيجة
            نتيجة_التقسيم.innerHTML = `
                <p><strong>إجمالي السعرات:</strong> ${tdee} سعرة حرارية</p>
                <ul>
                    <li><strong>البروتين:</strong> ${جرام_البروتين} جم (${سعرات_البروتين.toFixed(1)} سعرة)</li>
                    <li><strong>الكربوهيدرات:</strong> ${جرام_الكربوهيدرات} جم (${سعرات_الكربوهيدرات.toFixed(1)} سعرة)</li>
                    <li><strong>الدهون الصحية:</strong> ${جرام_الدهون} جم (${سعرات_الدهون.toFixed(1)} سعرة)</li>
                </ul>
            `;
        } else {
            نتيجة_التقسيم.innerHTML = "<p>يرجى إدخال قيمة صحيحة لإجمالي السعرات.</p>";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const زرالمزيد = document.getElementById("زر-المزيد");
    const نصائحإضافية = document.getElementById("نصائح-إضافية");

    زرالمزيد.addEventListener("click", () => {
        // عرض النصائح الإضافية
        نصائحإضافية.style.display = "block";

        // إخفاء الزر بعد الضغط
        زرالمزيد.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const زرزيادةالمزيد = document.getElementById("زر-زيادة-المزيد");
    const نصائحزيادةإضافية = document.getElementById("نصائح-زيادة-إضافية");

    زرزيادةالمزيد.addEventListener("click", () => {
        // عرض النصائح الإضافية
        نصائحزيادةإضافية.style.display = "block";

        // إخفاء الزر بعد الضغط
        زرزيادةالمزيد.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const زرالحفاظالمزيد = document.getElementById("زر-الحفاظ-المزيد");
    const نصائحالحفاظإضافية = document.getElementById("نصائح-الحفاظ-إضافية");

    زرالحفاظالمزيد.addEventListener("click", () => {
        // عرض النصائح الإضافية
        نصائحالحفاظإضافية.style.display = "block";

        // إخفاء الزر بعد الضغط
        زرالحفاظالمزيد.style.display = "none";
    });
});
