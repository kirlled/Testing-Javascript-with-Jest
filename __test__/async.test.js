import { getData } from '../promises'

describe('Probar Async await', () => {
  test('Realizar una peticion a una api', async () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    const getRick = 'https://rickandmortyapi.com/api/character/1';
    await getData(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
    });
    await getData(getRick).then(data => {
      expect(data.name).toEqual('Rick Sanchez');
    });
  });

  test('Realizando una peticion a una api con erro', async () => {
    const apiError = 'http://httpstat.us/404';
    const peticion = getData(apiError);
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
  })

  test('Resuelve un hola', async () => {
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
    await expect(Promise.reject('Error')).rejects.toBe('Error');
  });
});