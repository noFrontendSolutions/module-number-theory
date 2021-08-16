# module-number-theory
---
is a small library that contains a collection of mathematical functions (type definitions are included) from the fields of number theory and modular arithmetic. <br>
The library is independent of the JavaScript **Math** object and only uses the standard operators + * - %. 
<br/><br/>

## Installation
---
```bash
npm install module-number-theory
```
Adds **module-number-theory** to your dependencies in your **package.json** file.
<br><br>

## Usage
---

Via Node:
```js
const numberTheory = require("module-number-theory")

numberTheory.hasPrimitives(13) // returns true
numberTheory.allPrimitives(13) // returns [2, 6, 7, 11]
```

Using React, Typescript or jsx/tsx files you can also use the import statement:
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

## Descriptions
---

**gcd**: $\mathbb{Z}\times\mathbb{Z}\to\mathbb{N}$<br>
**gcd(x, y)** returns the greatest common devisor (gcd) of x and y.
___


**isPrime**: $\mathbb{N}\to$ {true, false}<br>
**isPrime(x)** returns **true** if x is a prime number.
___

**eulerPhi**: $\mathbb{N}\to\mathbb{N}$<br>
**eulerPhi(x)** returns the result of Euler's totient / phi function evaluated at x, i.e. the quantity of numbers that are relative prime to x.
___

**multiplicativeGroup**: $\mathbb{N}\to$ Array\<$\mathbb{N}$> <br>
**multiplicativeGroup(x)** returns the multiplicative group of integers modulo x ( the natural numbers relative prime to x) in form of an array of natural numbers. <br> Remark: eulerPhi(x) === multiplicativeGroup(x).length()
___

**devisors**: $\mathbb{N}\to$ Array\<$\mathbb{N}$> <br>
**devisors(x)** returns an array of all devisors of x.
___

**primeFactors**: $\mathbb{N}\to$ Array\<$\mathbb{N}$> <br>
**primeFactors(x)** returns an array of all prime devisors of x.
___

**primeFactorization**: $\mathbb{N}\to$ Array\<$\mathbb{N}\times\mathbb{N}$> <br>
**primeFactors(x)** returns the prime-factorization of x in form of an array of pairs of natural numbers.
```ts
primeFactorization(5440) // returns [ [2, 6], [5, 1], [17,1] ] (since 2^6 * 5^1 * 17^1 = 5440)
```
___
**hasPrimitives**: $\mathbb{N}\to$ {true, false}<br>
**hasPrimitives(x)** returns **true** if there exists a primtive roots modulo x. I.e. it returns **true** if the multiplicative group of integers modulo x contains an element that is cyclic. This statement holds true if and only if x is equal to 2, 4, $p^k$, or $2p^k$, where k can be any natural number and p an odd prime.
___
**primtiveCount**: $\mathbb{N}\to\mathbb{N}$<br>
**primitiveCount(x)** returns the quantity of primitive roots modulo x (returns 0 if there does't exist primitive roots modulo x).
___

**smallestPrimitive**: $\mathbb{N}\to\mathbb{N}$<br>
**smallestPrimitive(x)** returns the smallest primitive root modulo x (returns null if there does't exist primitive roots modulo x).
___

**allPrimitives**: $\mathbb{N}\to$ Array\<$\mathbb{N}$> <br>
**allPrimitives(x)** returns an array of all primitive roots modulo x (returns null if there does't exist primitive roots modulo x).
___

**discreteExp**: $\mathbb{N}\times\mathbb{N}\times\mathbb{N}\to\mathbb{N}$<br>
**discreteExp(x, y, z)** returns the result k of the equation  $x^y \equiv k \mod z$.
___
**discreteLog**: $\mathbb{N}\times\mathbb{N}\times\mathbb{N}\to\mathbb{N}$<br>
**discreteLog(x, y, z)** returns the index k (i.e. the **discrete logarithm** modulo z) of the equation $x^k \equiv y \mod z$ (returns null if no such index exists).<br>
**Important Fact**: x needs to be a primitive root modulo z, and y has to be an element of the multiplicative group modulo z to guarantee that such an index k exists. Otherwise discreteLog() returns null.  

### Example:
```ts
import { discreteLog, discreteExp, hasPrimitives, allPrimitives, multiplicativeGroup } from "module-number-theory"

// lets choose "50" as an example
// since 50 === 2 * 5^2 (50 is of the form 2p^k) 
hasPrimitives(50) //returns true 

// now we compute all primitive roots modulo 50 as well as the multiplicative group modulo 50
multiplicativeGroup(50) // returns [1, 3, 7, 9, 11, 13, 17, 19, 21, 23, 27, 29, 31, 33, 37, 39, 41, 43, 47, 49]
allPrimitives(50) // returns [3, 13, 17, 23, 27, 33, 37, 47]

//now for all elements of the multiplicative group we can choose any primitive root as a basis to get an result for the discretelog().

//for instance: basis = 17 
discreteLog(17, 37, 50) // returns 13
discreteExp(17, 13, 50) // returns 37
// since 17^13 = 27 mod 50

// another example: basis 27 
discreteLog(27, 11, 50)// returns 16
discreteExp(27, 16, 50) // returns 11
//since 27^16 = 11 mod 50
```
