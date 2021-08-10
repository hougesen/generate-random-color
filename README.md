# generate-random-color

NPM package for generating random HEX, RGB, RGBA, HSL and HSLA colors.

## Install

```bash
npm install generate-random-color
```

## Usage

```js
const generateRandomColor = require('generate-random-color');
// or
import generateRandomColor from 'generate-random-color';

// The function can either be called by simply calling the function like this
generateRandomColor.hex();
generateRandomColor.rgb();
generateRandomColor.rgba();
generateRandomColor.hsl();
generateRandomColor.hsla();

// or by passing optional min max values.
generateRandomColor.rgb({
  r: { min: 0, max: 255 },
  g: { min: 0, max: 255 },
  b: { min: 0, max: 255 },
});

// Omitted values will default to the min & max value of the color type.
generateRandomColor.rgb({
  g: { min: 100 },
  b: { min: 0, max: 100 },
});

// HEX can be passed a specific value. If no input is given the value will be between 00 - FF
// Returns #FF69B4
generateRandomColor.hex({
  r: 'ff',
  g: '69',
  b: 'b4',
});

// RGBA default values
generateRandomColor.rgba({
  r: { min: 0, max: 255 },
  g: { min: 0, max: 255 },
  b: { min: 0, max: 255 },
  a: { min: 0, max: 1 },
});

// HSL default values
generateRandomColor.hsl({
  h: { min: 0, max: 360 },
  s: { min: 0, max: 100 },
  l: { min: 0, max: 100 },
});

// HSLA default values
generateRandomColor.hsla({
  h: { min: 0, max: 360 },
  s: { min: 0, max: 100 },
  l: { min: 0, max: 100 },
  a: { min: 0, max: 1 },
});
```
