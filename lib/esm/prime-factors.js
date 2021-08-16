import { isPrime } from "./is-prime";
import { MathTools } from "./math-tools";
const primeFactors = (x) => {
    if (x < 0 || Number.isInteger(x) === false)
        return null;
    let primeFactorsTemp = [];
    for (let i = 2; i <= MathTools.ceil(x / 2); i++) {
        if (isPrime(i) && (x % i === 0))
            primeFactorsTemp.push(i);
    }
    if (isPrime(x))
        primeFactorsTemp.push(x);
    return primeFactorsTemp;
};
export { primeFactors };
