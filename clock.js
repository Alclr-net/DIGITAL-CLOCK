let functionForClock = () => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let day = currentTime.getDay();
  switch (day) {
    case 0:
      day = "SUNDAY";
      break;
    case 1:
      day = "MONDAY";
      break;
    case 2:
      day = "TUESDAY";
      break;
    case 3:
      day = "WEDNESDAY";
      break;
    case 4:
      day = "THURSDAY";
      break;
    case 5:
      day = "FRIDAY";
      break;
    case 6:
      day = "SATURDAY";
      break;
    default:
      day = "";
      break;
  }
  let hoursElem = document.getElementsByClassName("hours");
  let minutesElem = document.getElementsByClassName("minutes");
  let secondsElem = document.getElementsByClassName("seconds");
  let dayElem = document.getElementsByClassName("day");
  let ampmElem = document.getElementsByClassName("ampm");

  setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
        if (hours === 24) {
          hours = 0;
          day++;
          if (day === 7) {
            day = 0;
          }
        }
      }
    }
    hoursElem[0].textContent = hours > 12 ? `0${hours - 12}` : hours;
  minutesElem[0].textContent = minutes < 10 ? `0${minutes}` : minutes;  
  secondsElem[0].textContent = seconds < 10  ? `0${seconds}` : seconds;
  dayElem[0].textContent = day;
  ampmElem[0].textContent = hours > 12 ? "PM" : "AM";
  }, 1000);
};
functionForClock();

