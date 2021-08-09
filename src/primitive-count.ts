import { isCyclic } from "./is-cyclic"
import { eulerPhi } from "./euler-phi"

const primitiveCount = (x: number) => {
    if (x < 0 || Number.isInteger(x) === false) return null
    let xIsCyclic = isCyclic(x)
    if (xIsCyclic === true) return eulerPhi(eulerPhi(x)!) 
    return 0
}

export {primitiveCount}