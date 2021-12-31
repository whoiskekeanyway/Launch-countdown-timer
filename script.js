// console.clear();

countDownDate = new Date("Jan 01, 2022 00:00:00").getTime();

var x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  

  // Time calculations for days, hours, minutes and seconds
  calcDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  calcHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  calcMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  calcSeconds = Math.floor((distance % (1000 * 60)) / 1000);

  function upDate() {
    document.querySelector(".clock-day-value").innerHTML = calcDays;
    document.querySelector(".clock-hour-value").innerHTML = calcHours;
    document.querySelector(".clock-minute-value").innerHTML = calcMinutes;
    document.querySelector(".clock-second-value").innerHTML = calcSeconds;
    updateTextSize();
  }

  function updateTextSize() {
    const fonts = document.querySelector(".clock-day-value");
    const stringiFiedDays = calcDays.toString().length;

    if (stringiFiedDays === 3) {
      fonts.style.fontSize = "5rem";
    } else if (stringiFiedDays < 3) {
      fonts.style.fontSize = "8rem";
    }
  }

  upDate();


  // Output the result in an element with individual id's"

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("greetings").innerHTML = "Happy Birthday! Babe";
  }
}, 1000);
