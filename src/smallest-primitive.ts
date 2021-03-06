import { hasPrimitives } from "./has-primitives"
import { multiplicativeGroup } from "./multiplicative-group"
import { discreteExp } from "./discrete-exp"

//I didn't import eulerPhi because it's implicitly calculated by multiplicativeGroup(x).length (see below).

const smallestPrimitive = (x: number) => {
    if (x < 0 || Number.isInteger(x) === false || hasPrimitives(x) === false) return null
    let multiplicativeGroupArray = multiplicativeGroup(x) 
    let eulerPhiOfX = multiplicativeGroupArray!.length
    for (let e of multiplicativeGroupArray!) { 
        for (let i = 2; i <= eulerPhiOfX; i++) {
            if(e === 1 || (discreteExp(e, i, x) === 1 && i !== eulerPhiOfX)) break
            if(discreteExp(e, i, x) === 1 && i === eulerPhiOfX) return e
        }
    }
    return null
}

export {smallestPrimitive}