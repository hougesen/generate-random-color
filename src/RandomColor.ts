type RGBA = {
  r?: {
    min: number;
    max: number;
  };
  g?: {
    min: number;
    max: number;
  };
  b?: {
    min: number;
    max: number;
  };
  a?: {
    min: number;
    max: number;
  };
};

class RandomColor {
  public rgb(input?: RGBA) {
    return `rgb(${this.generateRgbNum(input?.r?.min, input?.r?.max)}, ${this.generateRgbNum(
      input?.g?.min,
      input?.g?.max,
    )}, ${this.generateRgbNum(input?.b?.min, input?.b?.max)})`;
  }

  public rgba(input?: RGBA) {
    return `rgba(${this.generateRgbNum(input?.r?.min, input?.r?.max)}, ${this.generateRgbNum(
      input?.g?.min,
      input?.g?.max,
    )}, ${this.generateRgbNum(input?.b?.min, input?.b?.max)}, ${this.generateAlpha(input?.a?.min, input?.a?.max)})`;
  }

  private generateRgbNum(min = 0, max = 256) {
    max = max > 256 ? 256 : max;
    min = max < 0 ? 0 : min;

    return Math.floor(Math.random() * (max - min) + min);
  }

  private generateAlpha(min = 0, max = 1) {
    max = max > 1 ? 1 : max;
    min = max < 0 ? 0 : min;

    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }
}

export default new RandomColor();
