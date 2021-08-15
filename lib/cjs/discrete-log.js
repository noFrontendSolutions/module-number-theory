"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discreteLog = void 0;
const multiplicative_group_1 = require("./multiplicative-group");
const all_primitives_1 = require("./all-primitives");
const has_primitives_1 = require("./has-primitives");
const discrete_exp_1 = require("./discrete-exp");
const discreteLog = (base, x, mod) => {
    if (Number.isInteger(base) === false || Number.isInteger(x) === false || Number.isInteger(mod) === false || base <= 0 || x <= 0 || mod <= 0 || has_primitives_1.hasPrimitives(mod) === false)
        return null;
    let multiplicativeGroupMod = multiplicative_group_1.multiplicativeGroup(mod);
    let allPrimitivesMod = all_primitives_1.allPrimitives(mod);
    let eulerPhiOfMod = multiplicativeGroupMod.length;
    if (!multiplicativeGroupMod.includes(x))
        return null;
    if (!allPrimitivesMod.includes(base))
        return null;
    for (let i = 1; i <= eulerPhiOfMod; i++) {
        if (discrete_exp_1.discreteExp(base, i, mod) === x)
            return i;
    }
    return null;
};
exports.discreteLog = discreteLog;
