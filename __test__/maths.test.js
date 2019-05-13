import { sumar, restar, multiplicar, dividir } from '../maths.js'

describe('Prueba de calculos', () => {
  test('Test de suma', () =>{
    expect(sumar(1, 2)).toBe(3);
  });
  test('Multiplicacion', () => {
    expect(multiplicar(2, 4)).toBe(8);
  });
});