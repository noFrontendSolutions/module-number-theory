import {gcd} from '../gcd'

test('returns greatest common devisor of the two arguments', () => {
    expect(gcd(15, 5)).toEqual(5)
    expect(gcd(17, 42)).toEqual(1)
    expect(gcd(42, 22)).toEqual(2)
    expect(gcd(15.5, 5)).toEqual(null)
    expect(gcd(-16, 24)).toEqual(8)
    expect(gcd(-12, 12)).toEqual(12)
  })