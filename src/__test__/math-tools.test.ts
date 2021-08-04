import { MathTools } from '../math-tools';

test('comparing two numbers', () => {
    expect(MathTools.min(4,5)).toEqual(4);
  });