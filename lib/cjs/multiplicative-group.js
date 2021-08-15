"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicativeGroup = void 0;
const gcd_1 = require("./gcd");
const is_prime_1 = require("./is-prime");
const multiplicativeGroup = (x) => {
    let coprimesTemp = [1];
    if (Number.isInteger(x) === false || x < 0)
        return null;
    if (is_prime_1.isPrime(x)) {
        for (let j = 2; j < x; j++) {
            coprimesTemp.push(j);
        }
        return coprimesTemp;
    }
    for (let i = 2; i < x; i++) {
        if (gcd_1.gcd(x, i) === 1)
            coprimesTemp.push(i);
    }
    return coprimesTemp;
};
exports.multiplicativeGroup = multiplicativeGroup;
