import { multiplicativeGroup } from "./multiplicative-group";
import { allPrimitives } from "./all-primitives";
import { hasPrimitives } from "./has-primitives";
import { discreteExp } from "./discrete-exp";
const discreteLog = (base, x, mod) => {
    if (Number.isInteger(base) === false || Number.isInteger(x) === false || Number.isInteger(mod) === false || base <= 0 || x <= 0 || mod <= 0 || hasPrimitives(mod) === false)
        return null;
    let multiplicativeGroupMod = multiplicativeGroup(mod);
    let allPrimitivesMod = allPrimitives(mod);
    let eulerPhiOfMod = multiplicativeGroupMod.length;
    if (!multiplicativeGroupMod.includes(x))
        return null;
    if (!allPrimitivesMod.includes(base))
        return null;
    for (let i = 1; i <= eulerPhiOfMod; i++) {
        if (discreteExp(base, i, mod) === x)
            return i;
    }
    return null;
};
export { discreteLog };
