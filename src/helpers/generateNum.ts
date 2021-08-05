type minMax = {
  min?: number;
  max?: number;
};

export default function (trueMax: number, numRange?: minMax): number {
  const max =
    numRange?.max != undefined && numRange.max <= trueMax
      ? numRange.max
      : trueMax;
  const min =
    numRange?.min != undefined && numRange.min >= 0 ? numRange.min : 0;

  return Math.floor(Math.random() * (max - min) + min);
}
