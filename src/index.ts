import genHSL from './color-types/hsl';
import genHSLA from './color-types/hsla';
import genRGB from './color-types/rgb';
import genRGBA from './color-types/rgba';
import genHEX from './color-types/hex';

type HSL = {
  h?: { min?: number; max?: number };
  s?: { min?: number; max?: number };
  l?: { min?: number; max?: number };
};
type HSLA = {
  h?: { min?: number; max?: number };
  s?: { min?: number; max?: number };
  l?: { min?: number; max?: number };
  a?: { min?: number; max?: number };
};

type RGB = {
  r?: { min?: number; max?: number };
  g?: { min?: number; max?: number };
  b?: { min?: number; max?: number };
};

type RGBA = {
  r?: { min?: number; max?: number };
  g?: { min?: number; max?: number };
  b?: { min?: number; max?: number };
  a?: { min?: number; max?: number };
};

type HEX = {
  r?: string;
  g?: string;
  b?: string;
};

export const hsl = (input?: HSL): string => {
  const base = {
    h: {
      min: input?.h?.min || 0,
      max: input?.h?.max || 361,
    },
    s: {
      min: input?.s?.min || 0,
      max: input?.s?.max || 101,
    },
    l: {
      min: input?.l?.min || 0,
      max: input?.l?.max || 101,
    },
  };

  return genHSL(base);
};

export const hsla = (input?: HSLA): string => {
  const base = {
    h: {
      min: input?.h?.min || 0,
      max: input?.h?.max || 361,
    },
    s: {
      min: input?.s?.min || 0,
      max: input?.s?.max || 101,
    },
    l: {
      min: input?.l?.min || 0,
      max: input?.l?.max || 101,
    },
    a: {
      min: input?.a?.min || 0,
      max: input?.a?.max || 1,
    },
  };

  return genHSLA(base);
};

export const rgb = (input?: RGB): string => {
  const base = {
    r: {
      min: input?.r?.min || 0,
      max: input?.r?.max || 256,
    },
    g: {
      min: input?.g?.min || 0,
      max: input?.g?.max || 256,
    },
    b: {
      min: input?.b?.min || 0,
      max: input?.b?.max || 256,
    },
  };

  return genRGB(base);
};

export const rgba = (input?: RGBA): string => {
  const base = {
    r: {
      min: input?.r?.min || 0,
      max: input?.r?.max || 255,
    },
    g: {
      min: input?.g?.min || 0,
      max: input?.g?.max || 255,
    },
    b: {
      min: input?.b?.min || 0,
      max: input?.b?.max || 255,
    },
    a: {
      min: input?.a?.min || 0,
      max: input?.a?.max || 1,
    },
  };

  return genRGBA(base);
};

export const hex = (input?: HEX): string => {
  if (input) {
    return genHEX(input);
  } else {
    return genHEX();
  }
};
