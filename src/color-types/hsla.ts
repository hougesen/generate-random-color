import generateNum from '../helpers/generateNum';
import generateFloat from '../helpers/generateFloat';

type HSLA = {
  h?: { min?: number; max?: number };
  s?: { min?: number; max: number };
  l?: { min?: number; max?: number };
  a?: { min?: number; max?: number };
};

export default function (input?: HSLA): string {
  return `hsla(${generateNum(361, input?.h)}, ${generateNum(101, input?.s)}%, ${generateNum(
    101,
    input?.l,
  )}%, ${generateFloat(1, input?.a)})`;
}
