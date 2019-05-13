describe('Common Matchers', () => {
  const user = {
    name: 'Kirlled',
    lastname: 'Araque'
  };
  const user2 = {
    name: 'Kirlled',
    lastname: 'Araque'
  };
  test('Equality of elements', () => {
    expect(user).toEqual(user2);
  });
});