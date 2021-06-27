import hsl from './hsl';
import hsla from './hsla';
import rgb from './rgb';
import rgba from './rgba';

type HSL = {
  h?: { min?: number; max?: number };
  s?: { min?: number; max: number };
  l?: { min?: number; max?: number };
};
type HSLA = {
  h?: { min?: number; max?: number };
  s?: { min?: number; max: number };
  l?: { min?: number; max?: number };
  a?: { min?: number; max?: number };
};

type RGB = {
  r?: { min: number; max: number };
  g?: { min: number; max: number };
  b?: { min: number; max: number };
};

type RGBA = {
  r?: { min: number; max: number };
  g?: { min: number; max: number };
  b?: { min: number; max: number };
};

class GenerateRandomColor {
  hsl = (input?: HSL): string => {
    return hsl(input);
  };

  hsla = (input?: HSLA): string => {
    return hsla(input);
  };

  rgb = (input?: RGB): string => {
    return rgb(input);
  };

  rgba = (input?: RGBA): string => {
    return rgba(input);
  };
}
export default new GenerateRandomColor();
