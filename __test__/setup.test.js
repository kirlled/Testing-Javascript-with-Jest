afterEach(() => console.log('Despues de cada test'));
afterAll(() => console.log('Despues de todo'));

beforeAll(() => console.log('Antes de todo'));
beforeEach(() => console.log('Antes de cada test'));

describe('Preparar antes de ejecutar', () => {
  test('Es verdadero', () => {
    expect(true).toBeTruthy();
  });
});