import { primeFactors } from "./prime-factors";

const primeFactorization = (x: number) => {
    if (x < 0 || Number.isInteger(x) === false) return undefined
    let primeFactorizationTemp: any[] = [] 
    let xPrimeFactors = primeFactors(x)
    if (xPrimeFactors) {
        for(const e of xPrimeFactors) {
            //primeFactorizationTemp.push([e, 1])
            let ePower = 1
            let tempValue = x / e
            while (tempValue % e === 0) {
                ePower++
                tempValue = tempValue / e
            }
            primeFactorizationTemp.push([e, ePower])
        }
    }
    return primeFactorizationTemp
}

export {primeFactorization}