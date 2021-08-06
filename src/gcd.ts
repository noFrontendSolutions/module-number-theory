import {MathTools} from "./math-tools"

const gcd = (x: number, y: number) => {
    let gcdTemp = 1
    if(Number.isInteger(x) === false || Number.isInteger(y) === false) return undefined
    for (let i = 1; i <= MathTools.min(MathTools.absolute(x), MathTools.absolute(y)); i++) {
        if (x % i === 0 && y % i === 0) gcdTemp = i
    }
    return gcdTemp
}

export {gcd}