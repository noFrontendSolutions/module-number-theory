import { MathTools } from "./math-tools"

const devisors = (x: number) => {
    if (x < 0 || Number.isInteger(x) === false) return null
    let xDevisors: number[] = []
    for(let i = 1; i <= MathTools.ceil(x / 2); i++) {
        if (x % i === 0) xDevisors.push(i)
    }
    xDevisors.push(x)
    return xDevisors
}

export {devisors}