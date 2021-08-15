import { primeFactors } from "./prime-factors";
const hasPrimitives = (x) => {
    if (x < 0 || Number.isInteger(x) === false)
        return null;
    let xPrimeFactors = primeFactors(x);
    if (x === 2 || x === 4)
        return true;
    if (xPrimeFactors.length === 1 && xPrimeFactors[0] !== 2)
        return true;
    if (xPrimeFactors.length === 2 && xPrimeFactors[0] === 2 && (x / 2) % 2 !== 0)
        return true;
    return false;
};
export { hasPrimitives };
