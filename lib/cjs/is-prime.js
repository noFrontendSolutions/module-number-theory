"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = void 0;
const math_tools_1 = require("./math-tools");
const isPrime = (x) => {
    if (x === 0 || x === 1)
        return false;
    if (x < 0 || Number.isInteger(x) === false)
        return null;
    for (let i = 2; i <= math_tools_1.MathTools.ceil(x / 2); i++) {
        if (x % i === 0)
            return false;
    }
    return true;
};
exports.isPrime = isPrime;
