const MathTools = {
    max: (x: number, y: number) => {
        return (x >= y ? x : y)
    },

    min: (x: number, y: number) => {
        return (x <= y ? x : y)
    },

    ceil: (x: number) => {
        if((x | 0) === x) return x
        if (x < 0) return (x | 0)
        return (x | 0) + 1
    },

    floor: (x: number) => {
        if (x < 0) return (x | 0) - 1
        return (x | 0)
    },

    absolute: (x: number) => {
        if (x < 0) return -x
    return x
    },

    //third argument of power fct calculates power modulo that number. This can be very useful for large exponents to avoid number overflow. 
    power: (base: number, exponent: number, mod: number | null = null) => {
        if (Number.isInteger(exponent) === false || exponent < 0) return null
        let tempValue = 1
        if (exponent === 0) return 1
        if (mod) {
            for (let i = 1; i <= exponent; i++) {
                tempValue = (tempValue * base) % mod
            }
            return tempValue 
        }
        for (let i = 1; i <= exponent; i++) {
            tempValue = tempValue * base 
        } 
        return tempValue
    }
}

export {MathTools}