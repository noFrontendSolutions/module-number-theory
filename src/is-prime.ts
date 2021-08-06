import {MathTools} from "./math-tools"

const isPrime = (x: number) => {
    if(x === 0 || x === 1) return false
    if(x < 0 || Number.isInteger(x) === false) return null
    for(let i= 2; i <= MathTools.ceil(x / 2); i++) {
        if(x % i === 0) return false
    }
return true
}

export {isPrime}