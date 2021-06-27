# generate-random-color

Randomly generate a color

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
generateRandomColor.rgb();

// or by passing optional min max values.
generateRandomColor.rgb({ r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } });

// Omitted values will default to the min & max value of the color type.
generateRandomColor.rgb({ g: { min: 100 }, b: { min: 0, max: 100 } });

// RGBA
generateRandomColor.rgba({ r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 }, a: { min: 0, max: 1 } });

// HSL
generateRandomColor.hsl({ h: { min: 0, max: 360 }, g: { min: 0, max: 100 }, b: { min: 0, max: 100 }, a: { min: 0, max: 1 } });

// HSLA
generateRandomColor.hsla({ h: { min: 0, max: 360 }, g: { min: 0, max: 100 }, b: { min: 0, max: 100 }, a: { min: 0, max: 1 } });
```
