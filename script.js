import generate, {
  majorScale,
  minorScale,
  pentatonicScale,
  chromaticScale,
} from "./generator.js";

const keyDropdown = document.querySelector(".key");
const keyOptions = document.querySelectorAll(".key-options p");
const scaleDropdown = document.querySelector(".scale");
const scaleOptions = document.querySelectorAll(".scale-options p");
const speedDropdown = document.querySelector(".speed");
const speedOptions = document.querySelectorAll(".speed-options p");
const notes = document.querySelector(".notes");
const start = document.querySelector("button");
let interval = null;

const train = (arr, speed) => {
  interval = setInterval(() => {
    const idx = Math.floor(Math.random() * arr.length);
    notes.textContent = arr[idx];
  }, 1000 / parseInt(speed));
};

keyDropdown.addEventListener("click", () => {
  document.querySelector(".key-options").id =
    document.querySelector(".key-options").id === "" ? "show" : "";
});
keyOptions.forEach((option) =>
  option.addEventListener("click", () => {
    keyDropdown.querySelector("p").textContent = option.textContent;
  })
);
scaleDropdown.addEventListener("click", () => {
  document.querySelector(".scale-options").id =
    document.querySelector(".scale-options").id === "" ? "show" : "";
});
scaleOptions.forEach((option) =>
  option.addEventListener("click", () => {
    scaleDropdown.querySelector("p").textContent = option.textContent;
  })
);
speedDropdown.addEventListener("click", () => {
  document.querySelector(".speed-options").id =
    document.querySelector(".speed-options").id === "" ? "show" : "";
});
speedOptions.forEach((option) =>
  option.addEventListener("click", () => {
    speedDropdown.querySelector("p").textContent = option.textContent;
  })
);
start.addEventListener("click", () => {
  start.textContent = start.textContent == "Start" ? "Stop" : "Start";

  if (start.textContent == "Stop") {
    const key = document.querySelector(".key > p").textContent;
    const scale = document.querySelector(".scale > p").textContent;
    const speed = document.querySelector(".speed > p").textContent;

    if (scale == "Major") {
      train(majorScale(generate(key)), speed);
    } else if (scale == "Minor") {
      train(minorScale(generate(key)), speed);
    } else if (scale == "Pentatonic") {
      train(pentatonicScale(generate(key)), speed);
    } else if (scale == "Chromatic") {
      train(chromaticScale(generate(key)), speed);
    }
  } else {
    clearInterval(interval);
  }
});
