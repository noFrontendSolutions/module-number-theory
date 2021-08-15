"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primitiveCount = void 0;
const has_primitives_1 = require("./has-primitives");
const euler_phi_1 = require("./euler-phi");
const primitiveCount = (x) => {
    if (x < 0 || Number.isInteger(x) === false)
        return null;
    if (has_primitives_1.hasPrimitives(x) === true)
        return euler_phi_1.eulerPhi(euler_phi_1.eulerPhi(x));
    return 0;
};
exports.primitiveCount = primitiveCount;
