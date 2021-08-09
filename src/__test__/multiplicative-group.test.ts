import {multiplicativeGroup} from '../multiplicative-group'

test('returns array of all coprime numbers', () => {
    expect(multiplicativeGroup(9)).toEqual([1, 2, 4, 5, 7, 8])
    expect(multiplicativeGroup(11)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(multiplicativeGroup(22)).toEqual([1, 3, 5, 7, 9, 13, 15, 17, 19, 21])
    expect(multiplicativeGroup(18)).toEqual([1, 5, 7, 11, 13, 17])
    expect(multiplicativeGroup(9.5)).toEqual(null)
    expect(multiplicativeGroup(-25)).toEqual(null)
  })