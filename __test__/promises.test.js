import { getData } from '../promises'

describe('Checking promises', () => {
  test('Making a request to an API', done => {
    const api = 'https://rickandmortyapi.com/api/character';
    getData(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
  test('Resuelve una promesa', () => {
    return expect(Promise.resolve('Hola')).resolves.toBe('Hola');
  });
  test('Rechaza con un error', () => {
    return expect(Promise.reject('Error')).rejects.toBe('Error');
  });
});