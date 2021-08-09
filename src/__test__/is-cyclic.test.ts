import {isCyclic} from '../is-cyclic'

test('returns true if the underlying multiplicative group of the argument is cyclic', () => {
    expect(isCyclic(8)).toEqual(false)
    expect(isCyclic(100)).toEqual(false)
    expect(isCyclic(21)).toEqual(false)
    expect(isCyclic(250)).toEqual(true)
    expect(isCyclic(27)).toEqual(true)
    expect(isCyclic(18)).toEqual(true)
})