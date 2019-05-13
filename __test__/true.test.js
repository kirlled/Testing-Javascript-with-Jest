import { isNull, isTrue, isFalse, isUndefined } from '../true'

describe('Check null results', () => {
  test('Is null', () => {
    expect(isNull()).toBeNull();
  });
});
describe('Check true results', () => {
  test('Is true', () => {
    expect(isTrue()).toBeTruthy();
  });
});
describe('Check false results', () => {
  test('Is false', () => {
    expect(isFalse()).toBeFalsy();
  });
});
describe('Check undefined results', () => {
  test('Is undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});
