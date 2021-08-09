import { primeFactors } from "./prime-factors";
type IntegerPair = [number, number]

const primeFactorization = (x: number) => {
    if (x < 0 || Number.isInteger(x) === false) return null
    let primeFactorizationTemp: IntegerPair[] = [] 
    let xPrimeFactors = primeFactors(x)
    for(const e of xPrimeFactors!) {
        let ePower = 1
        let tempValue = x / e
        while (tempValue % e === 0) {
            ePower++
            tempValue = tempValue / e
        }
        primeFactorizationTemp.push([e, ePower])
    }
    return primeFactorizationTemp
}

export {primeFactorization}