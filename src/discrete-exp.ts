//The third argument of the discreteExp function calculates the power modulo the choosen third argument. discreteExp(., ., mod) gets reduced to its modulo-representative in every step of the for-loop and thereby avoids calculating and storing large numbers, unlike the standard Math.pow() function would.

const discreteExp = (base: number, exponent: number, mod: number) => {
    if (Number.isInteger(base) === false || Number.isInteger(exponent) === false || Number.isInteger(mod) === false || base <= 0 || exponent <= 0 || mod <= 0) return null
    let tempValue = 1
    for (let i = 1; i <= exponent; i++) {
        tempValue = (tempValue * base) % mod
    }
    return tempValue 
 }

export {discreteExp}
