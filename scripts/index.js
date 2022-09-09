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

let aa = true;
const toggle = document.querySelector(".toggle");
const hours = new Date().getHours();
toggle.checked = hours > 7 && hours < 20;
if (hours > 7 && hours < 20) {
  aa = true;
} else {
  aa = false;
}

if (aa) {
  document.getElementById("header").style.transition = "2s";
  document.querySelector("#header").style.background =
    "url(../image/home-day.jpg)";
  document.getElementById("header").style.backgroundSize = "cover";
  document.documentElement.style.setProperty("--white", "#080808");
  aa = false;
} else {
  document.getElementById("header").style.transition = "2s";
  document.querySelector("#header").style.background = "url(../image/home.jpg)";
  document.getElementById("header").style.backgroundSize = "cover";
  document.documentElement.style.setProperty("--white", "#fff");
  aa = true;
}

toggle.addEventListener("change", function () {
  if (aa) {
    document.getElementById("header").style.transition = "2s";
    document.querySelector("#header").style.background =
      "url(../image/home-day.jpg)";
    document.getElementById("header").style.backgroundSize = "cover";
    // document.querySelector("#header").style.background = "white";
    document.documentElement.style.setProperty("--white", "#080808");
    aa = false;
  } else {
    document.getElementById("header").style.transition = "2s";
    document.querySelector("#header").style.background =
      "url(../image/home.jpg)";

    document.getElementById("header").style.backgroundSize = "cover";
    // document.getElementById("#header").style.backgroundSize = "cover";
    document.documentElement.style.setProperty("--white", "#fff");
    aa = true;
  }
});
