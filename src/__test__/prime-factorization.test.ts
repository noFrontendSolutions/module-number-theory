import {primeFactorization} from '../prime-factorization'

test('returns prime factorization of argument as an array of number-pairs', () => {
    expect(primeFactorization(34)).toEqual([[2,1], [17,1]])
    expect(primeFactorization(52)).toEqual([[2,2], [13,1]])
    expect(primeFactorization(192)).toEqual([[2,6], [3,1]])
    expect(primeFactorization(23)).toEqual([[23,1]])
  })