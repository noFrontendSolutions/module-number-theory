import { hasPrimitives } from "./has-primitives";
import { eulerPhi } from "./euler-phi";
const primitiveCount = (x) => {
    if (x < 0 || Number.isInteger(x) === false)
        return null;
    if (hasPrimitives(x) === true)
        return eulerPhi(eulerPhi(x));
    return 0;
};
export { primitiveCount };
