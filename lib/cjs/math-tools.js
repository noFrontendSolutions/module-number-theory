"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathTools = void 0;
const MathTools = {
    max: (x, y) => {
        return (x >= y ? x : y);
    },
    min: (x, y) => {
        return (x <= y ? x : y);
    },
    ceil: (x) => {
        if ((x | 0) === x)
            return x;
        if (x < 0)
            return (x | 0);
        return (x | 0) + 1;
    },
    floor: (x) => {
        if (x < 0)
            return (x | 0) - 1;
        return (x | 0);
    },
    absolute: (x) => {
        if (x < 0)
            return -x;
        return x;
    },
    //the optional third argument of the power function calculates the power modulo the choosen third argument. Power(., ., mod) gets reduced to its modulo-representative in every step of the for-loop and thereby avoids calculating and storing large numbers, unlike the standard Math.pow() function would.  
    power: (base, exponent, mod = null) => {
        if (Number.isInteger(exponent) === false || exponent < 0)
            return null;
        let tempValue = 1;
        if (exponent === 0)
            return 1;
        if (mod) {
            for (let i = 1; i <= exponent; i++) {
                tempValue = (tempValue * base) % mod;
            }
            return tempValue;
        }
        for (let i = 1; i <= exponent; i++) {
            tempValue = tempValue * base;
        }
        return tempValue;
    }
};
exports.MathTools = MathTools;
