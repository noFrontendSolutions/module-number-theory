const MathTools = {
    max: (x: number, y: number) => {
        return (x >= y ? x : y)
    },

    min: (x: number, y: number) => {
        return (x <= y ? x : y)
    }
}

export {MathTools}