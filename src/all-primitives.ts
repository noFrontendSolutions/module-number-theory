import { smallestPrimitive } from "./smallest-primitive";
import { gcd } from "./gcd";
import { eulerPhi } from "./euler-phi";
import { hasPrimitives } from "./has-primitives";
import { discreteExp } from "./discrete-exp";

const allPrimitives = (x: number) => {
    if (x < 0 || Number.isInteger(x) === false || hasPrimitives(x) === false) return null
    let smallestPrimitiveModX = smallestPrimitive(x)
    let eulerPhiOfX = eulerPhi(x)
    let allPrimitivesModX: number[] = [smallestPrimitiveModX!]
    let tempPrimitive: number | null
    for (let i = 2 ; i <= eulerPhiOfX!; i++) {
        if (gcd(i, eulerPhiOfX!) === 1) {
        tempPrimitive = discreteExp(smallestPrimitiveModX!, i, x)
        allPrimitivesModX.push(tempPrimitive!)
        }
    }
    allPrimitivesModX.sort((a,b) => a - b)
    return allPrimitivesModX
}

export {allPrimitives}