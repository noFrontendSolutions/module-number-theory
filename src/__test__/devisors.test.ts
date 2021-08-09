import {devisors} from "../devisors"

test('returns array of devisors of argument', () => {
    expect(devisors(13)).toEqual([1, 13])
    expect(devisors(20)).toEqual([1, 2, 4, 5, 10, 20])
})