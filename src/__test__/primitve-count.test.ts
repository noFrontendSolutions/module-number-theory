import {primitiveCount} from "../primitive-count"

test('returns count of primitive roots of underlying multiplicative group of the argument (if there are any)', () => {
    expect(primitiveCount(13)).toEqual(4)
    expect(primitiveCount(34)).toEqual(8)
    expect(primitiveCount(8)).toEqual(0)
    expect(primitiveCount(20)).toEqual(0)
    expect(primitiveCount(54)).toEqual(6)
})