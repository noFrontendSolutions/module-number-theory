import {eulerPhi} from '../euler-phi'

test('returns result of Euler Phi/Totient Function', () => {
    expect(eulerPhi(15)).toEqual(8)
    expect(eulerPhi(17)).toEqual(16)
    expect(eulerPhi(22)).toEqual(10)
    expect(eulerPhi(200)).toEqual(80)
    expect(eulerPhi(15.5)).toEqual(null)
    expect(eulerPhi(-8)).toEqual(null)
    expect(eulerPhi(13.5)).not.toEqual(false)
  })