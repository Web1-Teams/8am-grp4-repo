// JavaScript for handling form submission

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        alert(`شكرًا لك يا ${name}! تم إرسال رسالتك بنجاح.`);
    } else {
        alert('يرجى ملء جميع الحقول قبل الإرسال.');
    }
});
document.getElementById('showExerciseVideosBtn').addEventListener('click', function () {
    alert('شاهد فيديوهات استخدام الأجهزة الرياضية للحصول على أقصى استفادة.');
});

document.getElementById('getToolTipsBtn').addEventListener('click', function () {
    alert('تأكد من ضبط الجهاز بشكل صحيح قبل الاستخدام لتجنب الإصابات.');
});

document.getElementById('selectExercisesBtn').addEventListener('click', function () {
    const goal = prompt('ما هو هدفك؟ (خسارة الوزن/بناء العضلات/تحسين اللياقة)').toLowerCase();
    let exercises;
    switch (goal) {
        case 'خسارة الوزن':
            exercises = 'قم بتمارين الكارديو وتمارين الأوزان الخفيفة.';
            break;
        case 'بناء العضلات':
            exercises = 'ركز على رفع الأوزان الثقيلة وتمارين المقاومة.';
            break;
        case 'تحسين اللياقة':
            exercises = 'ادمج بين الكارديو والمقاومة لتحسين الأداء.';
            break;
        default:
            exercises = 'يرجى اختيار هدف واضح للحصول على تمارين مناسبة.';
    }
    alert(exercises);
});