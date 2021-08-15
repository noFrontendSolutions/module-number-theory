declare const MathTools: {
    max: (x: number, y: number) => number;
    min: (x: number, y: number) => number;
    ceil: (x: number) => number;
    floor: (x: number) => number;
    absolute: (x: number) => number;
    power: (base: number, exponent: number, mod?: number | null) => number | null;
};
export { MathTools };
