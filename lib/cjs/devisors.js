"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devisors = void 0;
const math_tools_1 = require("./math-tools");
const devisors = (x) => {
    if (x < 0 || Number.isInteger(x) === false)
        return null;
    let xDevisors = [];
    for (let i = 1; i <= math_tools_1.MathTools.ceil(x / 2); i++) {
        if (x % i === 0)
            xDevisors.push(i);
    }
    xDevisors.push(x);
    return xDevisors;
};
exports.devisors = devisors;
