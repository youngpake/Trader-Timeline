stringMonths = ["stupidsolution", "Januari", "Februari", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"]
   const dayOfWeekDigit = new Date().getDay();

    const dayOfWeekName = new Date().toLocaleString(
    'default', {weekday: 'long'}
    );

    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()

    document.getElementById("DayOfWeek").innerHTML = dayOfWeekName + " " + cDay + " " + stringMonths[cMonth];

    const current = new Date();

    let time = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });

    if (time == "08:00") {
      //start timer
    } if (time == "17:00") {
      //reset timer
    }
    //every minute = + 1 tick on the input range slider bar


function ClickTransition(elementName) {
  document.getElementById(elementName).style.animation = "spin 0.35s forwards";
  document.getElementById(elementName).innerHTML = "✔";
  document.getElementById(elementName).style.fontSize = "40px";
  document.getElementById(elementName).style.color = "#fff";
}

const moddedTime = ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", 
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const slider = document.getElementById("timeline");
setInterval(updateSlider, 1000 * 30);

function updateSlider() {
  const now = new Date();
  const mod = now.getHours();
  slider.value = moddedTime[mod]
  currentTime = now.getHours()+ ":" + now.getMinutes()
  document.getElementById('clock').innerHTML = currentTime;
}

updateSlider();