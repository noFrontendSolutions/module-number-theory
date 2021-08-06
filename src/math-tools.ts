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
    }
}

export {MathTools}