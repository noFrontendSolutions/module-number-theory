import {smallestPrimitive} from "../smallest-primitive"

test('returns the smallest primitive Root modulo argument (if there exist any)', () => {
    expect(smallestPrimitive(13)).toEqual(2)
    expect(smallestPrimitive(18)).toEqual(5)
    expect(smallestPrimitive(22)).toEqual(7)
    expect(smallestPrimitive(71)).toEqual(7)
})