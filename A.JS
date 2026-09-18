// 1. تحديد جميع عناصر القلوب في الصفحة
const allHearts = document.querySelectorAll('.heart-icon');

// 2. المرور على كل قلب وإضافة حدث النقر عليه
allHearts.forEach(heart => {
  heart.addEventListener('click', function() {
    
    // تبديل حالة اللون الأحمر
    this.classList.toggle('active');

    // تغيير الرمز بين مفرغ وممتلئ
    if (this.classList.contains('active')) {
      this.innerHTML = '&#9829;'; // قلب ممتلئ ♥
    } else {
      this.innerHTML = '&#9825;'; // قلب مفرغ ♡
    }
  });
});