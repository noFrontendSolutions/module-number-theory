import {MathTools} from "./math-tools"

const gcd = (x: number, y: number) => {
    if (Number.isInteger(x) === false || Number.isInteger(y) === false) return null
    let gcdTemp = 1
    let xAbsolute = MathTools.absolute(x)
    let yAbsolute = MathTools.absolute(y)
    for (let i = 1; i <= MathTools.min(xAbsolute, yAbsolute); i++) {
        if (x % i === 0 && y % i === 0) gcdTemp = i
    }
    return gcdTemp
}

export {gcd}