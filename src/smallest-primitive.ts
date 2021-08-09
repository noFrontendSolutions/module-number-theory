import { primeFactors } from "./prime-factors"
import { hasPrimitives } from "./has-primitives"
import { multiplicativeGroup } from "./multiplicative-group"
import { devisors } from "./devisors"
import { MathTools } from "./math-tools"

//I didn't import eulerPhi because its implicitly calculated by multiplicativeGroup(x).length

const smallestPrimitive = (x: number) => {
    if (x < 0 || Number.isInteger(x) === false || hasPrimitives(x) === false) return null
    let multiplicativeGroupArray = multiplicativeGroup(x) 
    let xEulerPhi = multiplicativeGroupArray!.length
    let possibleOrders = devisors(xEulerPhi) 
    
    //let tempValue: number
    for (let e of multiplicativeGroupArray!) { /*
        for (let order of possibleOrders!) {
            console.log(MathTools.power(e, order)!)     
            if (MathTools.power(e, order)! % xEulerPhi === e && order !== xEulerPhi) break
            if (MathTools.power(e, order)! % xEulerPhi === e && order === xEulerPhi) return e           
        }

      /* tempValue = e
        for (let order of possibleOrders!) {
            for(let i=2; i <= order; i++) {
                tempValue = (tempValue * e) % multiplicativeGroupArray!.length
                if(tempValue === 1 && i !== order) break
            }
            break
        } 

        tempValue = (e * e) % multiplicativeGroupArray!.length
        let ePower = 1
        for (let i = 2; i <= multiplicativeGroupArray!.length; i++) {
            if (tempValue === e && i !== multiplicativeGroupArray!.length) break
            if (i === multiplicativeGroupArray!.length) return e
            tempValue = (tempValue * e) % multiplicativeGroupArray!.length  
        } */
    }
}

export {smallestPrimitive}

