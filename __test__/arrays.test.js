import { arrayFruits, arrayColors } from '../arrays'

describe('Check that exist one element', () => {
  test('Exist one element', () => {
    expect(arrayFruits()).toContain('Manzana');
  });
  test('Does not exist one element', () => {
    expect(arrayFruits()).not.toContain('Sapote');
  });
  test('Check lengh of colors array', () => {
    expect(arrayColors()).toHaveLength(4);
  });
  test('Check lengh of fruits array', () => {
    expect(arrayFruits()).toHaveLength(5);
  });
});