var typing = new Typed("#slide-text", {
  strings: [
    "Java developer.",
    "Java Backend developer.",
    "JavaScript developer.",
    "Frontend developer.",
  ],
  typeSpeed: 80,
  backSpeed: 90,
  loop: true,
});

// dark mode
// document.querySelector("button").addEventListener("click", function () {
//   document.documentElement.style.setProperty("--red", "black");
//   document.documentElement.style.setProperty("--black", "white");
//   document.querySelector("#header").style.background = "white";
//   //   alert("Done");
// });
let imagearr = [];
window.onload = (event) => {
  imagearr.push("url(../image/home.jpg)");
  imagearr.push("url(../image/home-day.jpg)");
};

// let aa = true;

const toggle = document.querySelector(".toggle");
const hours = new Date().getHours();

if (
  !window.matchMedia("(prefers-color-scheme: dark)").matches &&
  hours > 7 &&
  hours < 20
) {
  light();
} else {
  dark();
}

toggle.addEventListener("change", () => (aa ? light() : dark()));

function light() {
  toggle.checked = true;
  document.getElementById("header").style.transition = "2s";
  document.querySelector("#header").style.background =
    "url(../image/home-day.jpg)" || imagearr[1];
  document.getElementById("header").style.backgroundSize = "cover";
  // document.querySelector("#header").style.background = "white";
  document.documentElement.style.setProperty("--white", "#080808");
  aa = false;
}
function dark() {
  toggle.checked = false;
  document.getElementById("header").style.transition = "2s";
  document.querySelector("#header").style.background =
    "url(../image/home.jpg)" || imagearr[0];

  document.getElementById("header").style.backgroundSize = "cover";
  // document.getElementById("#header").style.backgroundSize = "cover";
  document.documentElement.style.setProperty("--white", "#fff");
  aa = true;
}

//////////

window.onload = (event) => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat, long);
    let cityurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e783b82949a3bcda42bf44dc5f338847`;

    fetch(cityurl)
      .then(function (ele) {
        return ele.json();
      })
      .then(function (ele) {
        console.log(ele);
        let temp = ele.main.temp - 273;
        temp = temp.toFixed(2);
        document.getElementById(
          "location"
        ).innerText = `${ele.name} Current Temperature is ${temp} °C`;
      });
  });
};
