import { multiplicativeGroup } from "./multiplicative-group"
import { allPrimitives } from "./all-primitives"
import { hasPrimitives } from "./has-primitives" 
import { MathTools } from "./math-tools"

const discreteLog = (base: number, x: number, mod: number) => {
    if (mod < 0 || Number.isInteger(mod) === false || hasPrimitives(mod) === false) return null
    let multiplicativeGroupMod = multiplicativeGroup(mod)
    let allPrimitivesMod = allPrimitives(mod)
    let eulerPhiOfMod = multiplicativeGroupMod!.length
    if(!multiplicativeGroupMod!.includes(x)) return null
    if(!allPrimitivesMod!.includes(base)) return null
    for(let i = 1; i <= eulerPhiOfMod!; i++) {
        if(MathTools.power(base, i, mod) === x) return i
    }
    return null
}

export {discreteLog}