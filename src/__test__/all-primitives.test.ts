import {allPrimitives} from "../all-primitives"

test('returns the smallest primitive Root modulo argument (if there exist any)', () => {
    expect(allPrimitives(22)).toEqual([7, 13, 17, 19])
    expect(allPrimitives(29)).toEqual([2, 3, 8, 10, 11, 14, 15, 18, 19, 21, 26, 27])
})