const tipsRow = document.querySelector(".tips-row");

let scrollAmount = 0;
const scrollStep = 2; 
const scrollInterval = 25; 


function autoScroll() {
  scrollAmount += scrollStep;
  tipsRow.scrollLeft = scrollAmount;


  if (scrollAmount >= tipsRow.scrollWidth - tipsRow.clientWidth) {
    scrollAmount = 0;
  }
}
setInterval(autoScroll, scrollInterval);


