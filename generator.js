/* Key Array Generator */
const generate = (key) => {
  const newKeys = [key];
  const keys = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const idx = keys.indexOf(key) + 1;

  for (let i = idx; i < 12; i++) {
    newKeys.push(keys[i]);

    if (i == 11) {
      i = -1;
    }

    if (keys[i] == key) {
      newKeys.pop();
      break;
    }
  }

  return newKeys;
};

/* SCALE GENERATORS */
const majorScale = (keys) => {
  const scale = [];

  for (let i = 0; i < keys.length; i++) {
    if (i == 1 || i == 3 || i == 6 || i == 8 || i == 10) {
      continue;
    }
    scale.push(keys[i]);
  }

  return scale;
};

const minorScale = (keys) => {
  const scale = [];

  for (let i = 0; i < keys.length; i++) {
    if (i == 1 || i == 4 || i == 6 || i == 9 || i == 11) {
      continue;
    }
    scale.push(keys[i]);
  }

  return scale;
};

const pentatonicScale = (keys) => {
  const scale = [];

  for (let i = 0; i < keys.length; i++) {
    if (i == 1 || i == 3 || i == 5 || i == 6 || i == 8 || i == 10 || i == 11) {
      continue;
    }
    scale.push(keys[i]);
  }

  return scale;
};

const wholetoneScale = (keys) => {
  const scale = [];

  for (let i = 0; i < keys.length; i++) {
    if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9 || i == 11) {
      continue;
    }
    scale.push(keys[i]);
  }

  return scale;
};

const chromaticScale = (keys) => {
  return keys;
};
/* END */

// console.log(pentatonicScale(newKeys));
export default generate;
export {
  majorScale,
  minorScale,
  pentatonicScale,
  wholetoneScale,
  chromaticScale,
};
