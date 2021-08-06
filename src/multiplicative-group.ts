import {gcd} from "./gcd"
import {isPrime} from "./is-prime"

const multiplicativeGroup = (x: number) => {
    let coprimesTemp: number[] = [1]
    if (Number.isInteger(x) === false || x < 0) return undefined
    if (isPrime(x)) {
        for (let j =2; j < x; j++) {
            coprimesTemp.push(j)
        }
        return coprimesTemp
    }
    for (let i = 2; i < x; i++) {
        if(gcd(x, i) === 1) coprimesTemp.push(i)
    }
    return coprimesTemp
}

export {multiplicativeGroup}