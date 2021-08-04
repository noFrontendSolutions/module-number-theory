import { MathTools } from '../math-tools'

test('returns the smaller number', () => {
    expect(MathTools.min(4, 5)).toEqual(4)
    expect(MathTools.min(8.4, 3.1)).toEqual(3.1)
    expect(MathTools.min(8.5, 8.5)).toEqual(8.5)
  })

test('returns the bigger number', () => {
  expect(MathTools.max(4, 5)).toEqual(5)
  expect(MathTools.max(83.4, 3.4)).toEqual(83.4)
  expect(MathTools.max(83.5, 83.5)).toEqual(83.5)
})

test('returns smallest integer bigger than argument', () => {
   expect(MathTools.ceil(5.58)).toEqual(6)
   expect(MathTools.ceil(5)).toEqual(5)
 })

 test('returns biggest integer smaller than argument', () => {
  expect(MathTools.floor(5.52)).toEqual(5)
  expect(MathTools.floor(5)).toEqual(5)
})