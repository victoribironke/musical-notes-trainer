import generate, {
  majorScale,
  minorScale,
  bluesScale,
  pentatonicScale,
  wholetoneScale,
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

// Showing the selection dropdown
[
  { arr: keyDropdown, selector: ".key-options" },
  { arr: scaleDropdown, selector: ".scale-options" },
  { arr: speedDropdown, selector: ".speed-options" },
].forEach((obj) => {
  obj.arr.addEventListener("click", () => {
    const options = document.querySelector(obj.selector);
    options.id = options.id === "" ? "show" : "";
  });
});

// Selecting an option from the dropdown
[
  { arr: keyOptions, selector: keyDropdown },
  { arr: scaleOptions, selector: scaleDropdown },
  { arr: speedOptions, selector: speedDropdown },
].forEach((obj) => {
  obj.arr.forEach((option) =>
    option.addEventListener("click", () => {
      obj.selector.querySelector("p").textContent = option.textContent;
    })
  );
});

start.addEventListener("click", () => {
  if (start.textContent == "Start") {
    const key = document.querySelector(".key > p").textContent;
    const scale = document.querySelector(".scale > p").textContent;
    const speed = document.querySelector(".speed > p").textContent;

    if (scale == "Major") {
      train(majorScale(generate(key)), speed);
    } else if (scale == "Minor") {
      train(minorScale(generate(key)), speed);
    } else if (scale == "Blues") {
      train(bluesScale(generate(key)), speed);
    } else if (scale == "Pentatonic") {
      train(pentatonicScale(generate(key)), speed);
    } else if (scale == "Whole Tone") {
      train(wholetoneScale(generate(key)), speed);
    } else if (scale == "Chromatic") {
      train(chromaticScale(generate(key)), speed);
    }
  } else {
    clearInterval(interval);
  }

  start.textContent = start.textContent == "Start" ? "Stop" : "Start";
});
