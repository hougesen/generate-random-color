import generateNum from '../helpers/generateNum';

type HEX = {
  r?: string;
  g?: string;
  b?: string;
};

function generateHex() {
  const generate = () => {
    const value = generateNum(16, { min: 0, max: 15 });

    return convertNumberToHex(value);
  };

  return `${generate()}${generate()}`;
}

function convertNumberToHex(input: number) {
  switch (input) {
    case 10:
      return 'A';

    case 11:
      return 'B';

    case 12:
      return 'C';

    case 13:
      return 'D';

    case 14:
      return 'E';

    case 15:
      return 'F';

    default:
      return input.toString();
  }
}

export default function (input?: HEX): string {
  const r = input?.r ? input.r : generateHex();
  const g = input?.g ? input.g : generateHex();
  const b = input?.b ? input.b : generateHex();

  return `#${r.toUpperCase()}${g.toUpperCase()}${b.toUpperCase()}`;
}
