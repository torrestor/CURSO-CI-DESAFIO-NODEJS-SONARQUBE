const soma = require('./soma')

test('Soma 10 + 20 resultado - 30', () => {
   expect(soma(10, 20)).toBe(30);
});
