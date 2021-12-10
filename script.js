countDownDate = new Date("Jan 28, 2022 00:00:00").getTime();

var x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  calcDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  calcHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  calcMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  calcSeconds = Math.floor((distance % (1000 * 60)) / 1000);

  const days = calcDays;
  const hours = calcHours;
  const minutes = calcMinutes;
  const seconds = calcSeconds;

  // Output the result in an element with individual id's"
  document.getElementById("clock-day").innerHTML = days;
  document.getElementById("clock-hour").innerHTML = hours;
  document.getElementById("clock-minute").innerHTML = minutes;
  document.getElementById("clock-second").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("greetings").innerHTML = "Happy Birthday! Babe";
  }
}, 1000);
