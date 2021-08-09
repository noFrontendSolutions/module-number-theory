import {hasPrimitives} from '../has-primitives'

test('returns true if the underlying multiplicative group of the argument is cyclic', () => {
    expect(hasPrimitives(8)).toEqual(false)
    expect(hasPrimitives(100)).toEqual(false)
    expect(hasPrimitives(21)).toEqual(false)
    expect(hasPrimitives(250)).toEqual(true)
    expect(hasPrimitives(27)).toEqual(true)
    expect(hasPrimitives(18)).toEqual(true)
})