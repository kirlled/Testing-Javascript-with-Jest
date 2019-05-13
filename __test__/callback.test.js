import { callbackHell } from '../callback'

describe('Checking callbacks', () => {
  test('Callback', done => {
    function otherCallback(data) {
      expect(data).toBe('Hola');
      done();
    }
    callbackHell(otherCallback);
  });
});