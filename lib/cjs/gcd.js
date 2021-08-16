"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcd = void 0;
const math_tools_1 = require("./math-tools");
const gcd = (x, y) => {
    if (Number.isInteger(x) === false || Number.isInteger(y) === false)
        return null;
    let gcdTemp = 1;
    let xAbsolute = math_tools_1.MathTools.absolute(x);
    let yAbsolute = math_tools_1.MathTools.absolute(y);
    for (let i = 1; i <= math_tools_1.MathTools.min(xAbsolute, yAbsolute); i++) {
        if (x % i === 0 && y % i === 0)
            gcdTemp = i;
    }
    return gcdTemp;
};
exports.gcd = gcd;
