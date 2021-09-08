"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eulerPhi = void 0;
const is_prime_1 = require("./is-prime");
const gcd_1 = require("./gcd");
const eulerPhi = (x) => {
    let eulerPhiTemp = 1;
    if (Number.isInteger(x) === false || x <= 0)
        return null;
    //line below is not necessary but should saves time on average
    if (is_prime_1.isPrime(x) === true)
        return x - 1;
    for (let i = 2; i <= x; i++) {
        if (gcd_1.gcd(x, i) === 1)
            eulerPhiTemp++;
    }
    return eulerPhiTemp;
};
exports.eulerPhi = eulerPhi;
