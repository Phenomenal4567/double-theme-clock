window.addEventListener("load", calculateTime);

function calculateTime() {
  let date = new Date();
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let month = date.getMonth();
  let dates = date.getDate();
  let year = date.getFullYear();
  let ampm = hour >= 12 ? "PM" : "AM";
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

 document.getElementById("day").innerHTML = dayNames[dayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("dates").innerHTML = dates;
  document.getElementById("year").innerHTML = year;
  document.getElementById("ampm").innerHTML = ampm;

document.getElementById("month").innerHTML = months[month];



document.getElementById("wday").innerHTML = dayNames[dayNumber];
  document.getElementById("whour").innerHTML = hour;
 //document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("wminutes").innerHTML = minutes;
  document.getElementById("wdates").innerHTML = dates;
  document.getElementById("wyear").innerHTML = year;
  document.getElementById("wampm").innerHTML = ampm;

document.getElementById("wmonth").innerHTML = months[month];
  

  setTimeout(calculateTime, 1000);
}


function themeOne() {
document.getElementsByClassName("a")[0].style.display = ("none")
document.getElementsByClassName("all_container")[0].style.display = ("block")
}

function themeTwo() {
document.getElementsByClassName("all_container")[0].style.display = ("none")
document.getElementsByClassName("a")[0].style.display = ("block")

}