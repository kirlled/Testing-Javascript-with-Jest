describe('Check strings', () => {

  const str = "A good string";

  test('It must containt the following text', () => {
    expect(str).toMatch(/good/);
  });
});