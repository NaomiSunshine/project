const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock() {
  try {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
      h = h - 12;
      ampm = "pm";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerHTML = h;
    minuteE1.innerHTML = m;
    secondE1.innerHTML = s;
    ampmE1.innerHTML = ampm;

    console.log("Clock updated: " + h + ":" + m + ":" + s + " " + ampm);
  } catch (error) {
    console.error("An error occurred while updating the clock:", error);
  } finally {
    setTimeout(() => {
      updateClock();
    }, 1000);
  }
}

updateClock();
