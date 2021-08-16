import {discreteExp} from "../discrete-exp"

test('returns the discrete exp of second argument given the base (first argument) modulo third argument)', () => {
    expect(discreteExp(7, 3, 22)).toEqual(13)
    expect(discreteExp(7, 7, 22)).toEqual(17)
    expect(discreteExp(2, 5, 11)).toEqual(10)
    expect(discreteExp(2, 8, 16)).toEqual(0)
})