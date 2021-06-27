import generateNum from './helpers/generateNum';

type HSL = {
  h?: { min?: number; max?: number };
  s?: { min?: number; max: number };
  l?: { min?: number; max?: number };
};

export default function hsl(input?: HSL): string {
  return `hsl(${generateNum(361, input?.h)}, ${generateNum(101, input?.s)}%, ${generateNum(101, input?.h)}%)`;
}
