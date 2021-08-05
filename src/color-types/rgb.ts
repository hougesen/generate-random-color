import generateNum from '../helpers/generateNum';

type RGB = {
  r?: { min: number; max: number };
  g?: { min: number; max: number };
  b?: { min: number; max: number };
};

export default function (input?: RGB): string {
  return `rgb(${generateNum(256, input?.r)}, ${generateNum(256, input?.g)}, ${generateNum(256, input?.b)})`;
}
