import { venezuelanFormat } from '../gastos'

describe('Venezuelan Format for amount of money', () => {
  test('Number converted to a String', () => {
    expect(venezuelanFormat(123)).toEqual("123");
  });
  test('4-digit number', () => {
    expect(venezuelanFormat(5123)).toEqual("5.123");
  });
  test('5-digit number', () => {
    expect(venezuelanFormat(15347)).toEqual("15.347");
  });
  test('6-digit number', () => {
    expect(venezuelanFormat(128500)).toEqual("128.500");
  });
  test('7-digit number', () => {
    expect(venezuelanFormat(1687537)).toEqual("1.687.537");
  });
  test('8-digit number', () => {
    expect(venezuelanFormat(17687537)).toEqual("17.687.537");
  });
  test('9-digit number', () => {
    expect(venezuelanFormat(179687537)).toEqual("179.687.537");
  });
  test('10-digit number', () => {
    expect(venezuelanFormat(5179687537)).toEqual("5.179.687.537");
  });
  test('Float converted to a String', () => {
    expect(venezuelanFormat(123.57)).toEqual("123,57");
  });
  test('Float converted to a String 5-digit', () => {
    expect(venezuelanFormat(12345.57)).toEqual("12.345,57");
  });
});