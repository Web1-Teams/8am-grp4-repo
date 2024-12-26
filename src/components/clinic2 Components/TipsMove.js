const tipsRow = document.querySelector(".tips-row");

let scrollAmount = 0;
const scrollStep = 2; // سرعة الحركة
const scrollInterval = 25; // سرعة الإطارات (ms)

// حركة تلقائية
function autoScroll() {
  scrollAmount += scrollStep;
  tipsRow.scrollLeft = scrollAmount;

  // إعادة الحركة من البداية إذا وصل للنهاية
  if (scrollAmount >= tipsRow.scrollWidth - tipsRow.clientWidth) {
    scrollAmount = 0;
  }
}

// بدء الحركة
setInterval(autoScroll, scrollInterval);


