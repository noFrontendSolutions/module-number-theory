"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPrimitives = void 0;
const prime_factors_1 = require("./prime-factors");
const hasPrimitives = (x) => {
    if (x < 0 || Number.isInteger(x) === false)
        return null;
    let xPrimeFactors = prime_factors_1.primeFactors(x);
    if (x === 2 || x === 4)
        return true;
    if (xPrimeFactors.length === 1 && xPrimeFactors[0] !== 2)
        return true;
    if (xPrimeFactors.length === 2 && xPrimeFactors[0] === 2 && (x / 2) % 2 !== 0)
        return true;
    return false;
};
exports.hasPrimitives = hasPrimitives;
