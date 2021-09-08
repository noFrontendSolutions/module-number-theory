"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPrimitives = void 0;
const smallest_primitive_1 = require("./smallest-primitive");
const gcd_1 = require("./gcd");
const euler_phi_1 = require("./euler-phi");
const has_primitives_1 = require("./has-primitives");
const discrete_exp_1 = require("./discrete-exp");
const allPrimitives = (x) => {
    if (x < 0 || Number.isInteger(x) === false || has_primitives_1.hasPrimitives(x) === false)
        return null;
    let smallestPrimitiveModX = smallest_primitive_1.smallestPrimitive(x);
    let eulerPhiOfX = euler_phi_1.eulerPhi(x);
    let allPrimitivesModX = [smallestPrimitiveModX];
    let tempPrimitive;
    for (let i = 2; i <= eulerPhiOfX; i++) {
        if (gcd_1.gcd(i, eulerPhiOfX) === 1) {
            tempPrimitive = discrete_exp_1.discreteExp(smallestPrimitiveModX, i, x);
            allPrimitivesModX.push(tempPrimitive);
        }
    }
    allPrimitivesModX.sort((a, b) => a - b);
    return allPrimitivesModX;
};
exports.allPrimitives = allPrimitives;
