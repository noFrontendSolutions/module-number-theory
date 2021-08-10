import {discreteLog} from "../discrete-log"

test('returns the discrete log of second argument given the base (first argument) modulo third argument)', () => {
    expect(discreteLog(7, 13, 22)).toEqual(3)
    expect(discreteLog(7, 17, 22)).toEqual(7)
    expect(discreteLog(2, 10, 11)).toEqual(5)
})