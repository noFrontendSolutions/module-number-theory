"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smallestPrimitive = void 0;
const has_primitives_1 = require("./has-primitives");
const multiplicative_group_1 = require("./multiplicative-group");
const discrete_exp_1 = require("./discrete-exp");
//I didn't import eulerPhi because it's implicitly calculated by multiplicativeGroup(x).length (see below).
const smallestPrimitive = (x) => {
    if (x < 0 || Number.isInteger(x) === false || has_primitives_1.hasPrimitives(x) === false)
        return null;
    let multiplicativeGroupArray = multiplicative_group_1.multiplicativeGroup(x);
    let eulerPhiOfX = multiplicativeGroupArray.length;
    for (let e of multiplicativeGroupArray) {
        for (let i = 2; i <= eulerPhiOfX; i++) {
            if (e === 1 || (discrete_exp_1.discreteExp(e, i, x) === 1 && i !== eulerPhiOfX))
                break;
            if (discrete_exp_1.discreteExp(e, i, x) === 1 && i === eulerPhiOfX)
                return e;
        }
    }
    return null;
};
exports.smallestPrimitive = smallestPrimitive;
