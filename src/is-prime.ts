import {MathTools} from "./math-tools"

const isPrime = (x: number) => {
    if(x === 0 || x === 1 || x < 0 || Number.isInteger(x) === false) return false
    for(let i= 2; i < MathTools.ceil(MathTools.absolute(x / 2)); i++) {
        if(x % i === 0) return false
    }
return true
}

export {isPrime}