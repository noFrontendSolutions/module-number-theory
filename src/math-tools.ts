const MathTools = {
    max: (x: number, y: number) => {
        return (x >= y ? x : y)
    },

    min: (x: number, y: number) => {
        return (x <= y ? x : y)
    },

    ceil: (x: number) => {
        if((x | 0) === x) return x
        return (x | 0) + 1
    },

    floor : (x: number) => {
        return (x | 0)
    }
}

export {MathTools}