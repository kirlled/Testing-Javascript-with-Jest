import { convert } from '../date'

describe('Test for convertion from Date to a String', () => {
  test('Checking format May, 1', () => {
    let date = new Date('2019/05/01');
    expect(convert(date)).toBe('2019-05-01');
  });
  test('Checking format June, 16', () => {
    let date = new Date('2019/06/16');
    expect(convert(date)).toBe('2019-06-16');
  });
  test('Checking format October, 20', () => {
    let date = new Date('2019/10/20');
    expect(convert(date)).toBe('2019-10-20');
  });
  test('Checking November, 1', () => {
    let date = new Date('2019/11/01');
    expect(convert(date)).toBe('2019-11-01');
  });
  test('Checking December, 1', () => {
    let date = new Date('2019/12/01');
    expect(convert(date)).toBe('2019-12-01');
  });
  test('Checking January, 1', () => {
    let date = new Date('2019/01/01');
    expect(convert(date)).toBe('2019-01-01');
  });
  test('Checking January, 31', () => {
    let date = new Date('2019/01/31');
    expect(convert(date)).toBe('2019-01-31');
  });
});