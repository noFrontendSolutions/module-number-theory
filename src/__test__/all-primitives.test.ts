import {allPrimitives} from "../all-primitives"

test('returns all primitive roots modulo the argument', () => {
    expect(allPrimitives(22)).toEqual([7, 13, 17, 19])
    expect(allPrimitives(29)).toEqual([2, 3, 8, 10, 11, 14, 15, 18, 19, 21, 26, 27])
    expect(allPrimitives(71)).toEqual([7, 11, 13, 21, 22, 28, 31, 33, 35, 42, 44, 47, 52, 53, 55, 56, 59, 61, 62, 63, 65, 67, 68, 69])
})