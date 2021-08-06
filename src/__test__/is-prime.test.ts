import {isPrime} from '../is-prime'

test('returns true if the argument is a prime', () => {
    expect(isPrime(7)).toEqual(true)
    expect(isPrime(41)).toEqual(true)
    expect(isPrime(15)).toEqual(false)
    expect(isPrime(24)).toEqual(false)
    expect(isPrime(3)).toEqual(true)
    expect(isPrime(1)).toEqual(false)
    expect(isPrime(0)).toEqual(false)
    expect(isPrime(2)).toEqual(true)
    expect(isPrime(22.5)).toEqual(null)
    expect(isPrime(-13)).toEqual(null)
    expect(isPrime(-13.7)).toEqual(null)
  })
