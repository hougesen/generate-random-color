import genHSL from './color-types/hsl';
import genHSLA from './color-types/hsla';
import genRGB from './color-types/rgb';
import genRGBA from './color-types/rgba';

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

export const hsl = (input?: HSL): string => {
  return genHSL(input);
};

export const hsla = (input?: HSLA): string => {
  return genHSLA(input);
};

export const rgb = (input?: RGB): string => {
  return genRGB(input);
};

export const rgba = (input?: RGBA): string => {
  return genRGBA(input);
};
