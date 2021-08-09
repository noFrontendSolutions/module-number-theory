import {primitiveCount} from "../primitive-count"

test('returns quantity of primitive roots modulo argument (if there are any)', () => {
    expect(primitiveCount(13)).toEqual(4)
    expect(primitiveCount(34)).toEqual(8)
    expect(primitiveCount(8)).toEqual(0)
    expect(primitiveCount(20)).toEqual(0)
    expect(primitiveCount(54)).toEqual(6)
    expect(primitiveCount(29)).toEqual(12)
})