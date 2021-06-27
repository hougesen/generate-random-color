import generateNum from './helpers/generateNum';
import generateFloat from './helpers/generateFloat';

type RGBA = {
  r?: { min: number; max: number };
  g?: { min: number; max: number };
  b?: { min: number; max: number };
  a?: { min: number; max: number };
};

export default function rbg(input?: RGBA): string {
  return `rgba(${generateNum(256, input?.r)}, ${generateNum(256, input?.g)}, ${generateNum(
    256,
    input?.b,
  )}, ${generateFloat(1, input?.a)})`;
}
