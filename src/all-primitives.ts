import { smallestPrimitive } from "./smallest-primitive";
import { gcd } from "./gcd";
import { eulerPhi } from "./euler-phi";
import { hasPrimitives } from "./has-primitives";
import { MathTools } from "./math-tools";

const allPrimitives = (x: number) => {
    if (x < 0 || Number.isInteger(x) === false || hasPrimitives(x) === false) return null
    let smallestPrimitiveOfX = smallestPrimitive(x)
    let eulerPhiOfX = eulerPhi(x)
    let allPrimitivesOfX: number[] = [smallestPrimitiveOfX!]
    let tempPrimitive: number | null
    for (let i = 2 ; i <= eulerPhiOfX!; i++) {
        if (gcd(i, eulerPhiOfX!) === 1) {
        tempPrimitive = MathTools.power(smallestPrimitiveOfX!, i, x)
        allPrimitivesOfX.push(tempPrimitive!)
        }
    }
    allPrimitivesOfX.sort((a,b) => a - b)
    return allPrimitivesOfX
}

export {allPrimitives}