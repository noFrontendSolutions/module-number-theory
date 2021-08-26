# module-number-theory
---
is a small library that contains a collection of mathematical functions from the fields of number theory and modular arithmetic. <br><br>
The library is independent of the JavaScript **Math** object and only uses the standard operators + * - %. It contains a fuction to compute the **discrete logarithm** (if certain requirements are met). <br><br>
Type definitions are included.
<br/><br/>

## Installation:
---
```bash
npm install module-number-theory
```
Adds **module-number-theory** to your dependencies in your **package.json** file.
<br><br>

## Usage:
---

Import module using Node.js **require**:
```js
const numberTheory = require("module-number-theory")

numberTheory.hasPrimitives(13) // returns true
numberTheory.allPrimitives(13) // returns [2, 6, 7, 11]
```

or as ES6 module using **import**:
```ts
import * as numberTheory from "module-number-theory"

numberTheory.isPrime(1831) // returns true
``` 
or be more specific if you don't need the whole library:
```ts
import { discreteLog, discreteExp } from "module-number-theory"

discreteExp(31, 403, 1831) // returns 219 (since 31^403 = 219 mod 1831)
discreteLog(31, 219, 1831) // returns 403 (since 31^403 = 219 mod 1831)
```
<br>

## Descriptions:
---
<img src="https://render.githubusercontent.com/render/math?math=gcd\colon\mathbb{Z}\times\mathbb{Z}\to\mathbb{N}">

**gcd(x, y)** returns the greatest common devisor (gcd) of x and y.
___

<img src="https://render.githubusercontent.com/render/math?math=isPrime\colon\mathbb{N}\to \{true, false\}">

**isPrime(x)** returns **true** if x is a prime number.
___

<img src="https://render.githubusercontent.com/render/math?math=eulerPhi\colon\mathbb{N}\to\mathbb{N}">

**eulerPhi(x)** returns the result of Euler's totient/phi function evaluated at x; i.e. the quantity of numbers that are relative prime to x.
___

<img src="https://render.githubusercontent.com/render/math?math=multiplicativeGroup\colon\mathbb{N}\to Array\<\mathbb{N}>">

**multiplicativeGroup(x)** returns the multiplicative group of integers modulo x ( the natural numbers relative prime to x) in form of an array of natural numbers. <br> Remark: eulerPhi(x) === multiplicativeGroup(x).length()
___

<img src="https://render.githubusercontent.com/render/math?math=devisors\colon\mathbb{N}\to Array\<\mathbb{N}>">

**devisors(x)** returns an array of all devisors of x.
___

<img src="https://render.githubusercontent.com/render/math?math=primeFactors\colon\mathbb{N}\to Array\<\mathbb{N}>">

**primeFactors(x)** returns an array of all prime factors of x.
___

<img src="https://render.githubusercontent.com/render/math?math=primeFactorization\colon\mathbb{N}\to Array\<\mathbb{N}\times\mathbb{N}>">

**primeFactorization(x)** returns the prime-factorization of x in form of an array of pairs of natural numbers.
```ts
primeFactorization(5440) // returns [ [2, 6], [5, 1], [17,1] ] (since 2^6 * 5^1 * 17^1 = 5440)
```
___

<img src="https://render.githubusercontent.com/render/math?math=hasPrimitives\colon\mathbb{N}\to \{true, false\}">

**hasPrimitives(x)** returns **true** if there exists a primtive roots modulo x. I.e. it returns **true** if the multiplicative group of integers modulo x contains an element that is cyclic. This statement holds true if and only if x is equal to 2, 4, <img src="https://render.githubusercontent.com/render/math?math=p^k">, or <img src="https://render.githubusercontent.com/render/math?math=2p^k">, where k can be any natural number and p an odd prime.
___

<img src="https://render.githubusercontent.com/render/math?math=primitiveCount\colon\mathbb{N}\to\mathbb{N}">

**primitiveCount(x)** returns the quantity of primitive roots modulo x (returns 0 if there does't exist primitive roots modulo x).
___

<img src="https://render.githubusercontent.com/render/math?math=smallestPrimitive\colon\mathbb{N}\to\mathbb{N}">

**smallestPrimitive(x)** returns the smallest primitive root modulo x (returns null if there does't exist primitive roots modulo x).
___

<img src="https://render.githubusercontent.com/render/math?math=allPrimitives\colon\mathbb{N}\to Array\<\mathbb{N}>">

**allPrimitives(x)** returns an array of all primitive roots modulo x (returns null if there does't exist primitive roots modulo x).
___

<img src="https://render.githubusercontent.com/render/math?math=discreteExp\colon\mathbb{N}\times\mathbb{N}\times\mathbb{N}\to\mathbb{N}">

**discreteExp(x, y, z)** returns the result k of the equation 
<img src="https://render.githubusercontent.com/render/math?math=x^y \equiv k \mod z">

___

<img src="https://render.githubusercontent.com/render/math?math=discreteLog\colon\mathbb{N}\times\mathbb{N}\times\mathbb{N}\to\mathbb{N}">

**discreteLog(x, y, z)** returns the index k of the equation 
<img src="https://render.githubusercontent.com/render/math?math=x^k \equiv y \mod z"> 
; i.e. the **discrete logarithm** base x of y modulo z. It returns null if no such index exists.

**Important Fact**: x needs to be a primitive root modulo z, and y has to be an element of the multiplicative group modulo z, in order to guarantee that such an index k exists. Otherwise discreteLog() returns null eventhough such an index might exist...which is a problem for another day.  

### Example:
```ts
import { discreteLog, discreteExp, hasPrimitives, allPrimitives, multiplicativeGroup } from "module-number-theory"

// let us choose "50" as an example
// since 50 === 2 * 5^2 (50 is of the form 2p^k) 
hasPrimitives(50) //returns true 

// now we compute all primitive roots modulo 50 as well as the multiplicative group modulo 50
multiplicativeGroup(50) // returns [1, 3, 7, 9, 11, 13, 17, 19, 21, 23, 27, 29, 31, 33, 37, 39, 41, 43, 47, 49]
allPrimitives(50) // returns [3, 13, 17, 23, 27, 33, 37, 47]

//now for all elements of the multiplicative group we can choose any primitive root as a basis to get an result for the discretelog().

//for instance: basis = 17 
discreteLog(17, 37, 50) // returns 13
discreteExp(17, 13, 50) // returns 37
// since 17^13 = 37 mod 50

// another example: basis 27 
discreteLog(27, 11, 50)// returns 16
discreteExp(27, 16, 50) // returns 11
//since 27^16 = 11 mod 50
```
