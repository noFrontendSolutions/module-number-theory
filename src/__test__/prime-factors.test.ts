import {primeFactors} from '../prime-factors'

test('returns array of all prime factors', () => {
    expect(primeFactors(-9)).toEqual(undefined)
    expect(primeFactors(9)).toEqual([3])
    expect(primeFactors(34)).toEqual([2, 17])
    expect(primeFactors(52)).toEqual([2, 13])
  })