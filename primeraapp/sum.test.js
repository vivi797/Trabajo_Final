const {sum, mul, div} = require('./sum');

test('agregar 1 y 2 esperando 3 como resultado', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Multiplicar 3 y 3 esperando 9 como resultado', () => {
    expect(mul(3, 3)).toBe(9);
});

test('Dividir 10 y 2 esperando 5 como resultado', () => {
    expect(div(10, 2)).toBe(5);
});


