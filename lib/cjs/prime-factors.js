"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeFactors = void 0;
const is_prime_1 = require("./is-prime");
const math_tools_1 = require("./math-tools");
const primeFactors = (x) => {
    if (x < 0 || Number.isInteger(x) === false)
        return null;
    let primeFactorsTemp = [];
    for (let i = 2; i <= math_tools_1.MathTools.ceil(x / 2); i++) {
        if (is_prime_1.isPrime(i) && (x % i === 0))
            primeFactorsTemp.push(i);
    }
    if (is_prime_1.isPrime(x))
        primeFactorsTemp.push(x);
    return primeFactorsTemp;
};
exports.primeFactors = primeFactors;
