"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeFactorization = void 0;
const prime_factors_1 = require("./prime-factors");
const primeFactorization = (x) => {
    if (x < 0 || Number.isInteger(x) === false)
        return null;
    let primeFactorizationTemp = [];
    let xPrimeFactors = prime_factors_1.primeFactors(x);
    for (const e of xPrimeFactors) {
        let ePower = 1;
        let tempValue = x / e;
        while (tempValue % e === 0) {
            ePower++;
            tempValue = tempValue / e;
        }
        primeFactorizationTemp.push([e, ePower]);
    }
    return primeFactorizationTemp;
};
exports.primeFactorization = primeFactorization;
