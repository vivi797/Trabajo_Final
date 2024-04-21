const fibonacci = require('./fibonacci');

test('serie fibonacci de los primeros 5 numeros', () => {
    expect(fibonacci(7)).toBe(8);
});