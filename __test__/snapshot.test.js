import { getCharacter } from '../snapshot'
import rick from '../rick.json'

describe('Working with snapshots', () => {
  test('Snapshot test', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test('The snapshot always will fail', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20)
    };
    expect(user).toMatchSnapshot();
  });

  test('We have one exception inside of code', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Kirlled Araque"
    };
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    });
  });
});