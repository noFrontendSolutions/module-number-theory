import { isPrime } from "./is-prime";
import { gcd } from "./gcd";
const eulerPhi = (x) => {
    let eulerPhiTemp = 1;
    if (Number.isInteger(x) === false || x <= 0)
        return null;
    //line below is not necessary but should saves time on average
    if (isPrime(x) === true)
        return x - 1;
    for (let i = 2; i <= x; i++) {
        if (gcd(x, i) === 1)
            eulerPhiTemp++;
    }
    return eulerPhiTemp;
};
export { eulerPhi };
