// alert('hi')
clockTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridian = "AM";

  if (hours == 12) hours = 12;
  if (hours > 12) {
    hours = hours - 12;
    meridian = "PM";
  }
  //this ensures that there is 2digit numbers ,if seconds let say become 9 then it will become 09
  hours = hours < 10 ? (hours = "0" + hours) : hours;
  minutes = minutes < 10 ? (minutes = "0" + minutes) : minutes;
  seconds = seconds < 10 ? (seconds = "0" + seconds) : seconds;

  //updating final time
  let time = hours + ":" + minutes + ":" + seconds + ":" + meridian;

  //putting this updated time in our html
  document.getElementById("clock").innerText = time;

  //hr ek seond bad ye function dobara call hoga and since timie goes forward ye auto update hota rhega by having new time in time variable
  setTimeout(function () {
    clockTime();
  }, 1000);
};
clockTime();
