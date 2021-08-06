import {primeFactorization} from '../prime-factorization'

test('returns prime factorization of argument', () => {
    expect(primeFactorization(34)).toEqual([[2,1], [17,1]])
    expect(primeFactorization(52)).toEqual([[2,2], [13,1]])
    expect(primeFactorization(192)).toEqual([[2,6], [3,1]])
  })