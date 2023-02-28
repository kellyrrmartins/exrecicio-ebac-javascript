const { somarMultiplos } = require('./numerosMultiplos')

describe('Teste exercicio 3, modulo 20', () => {
  it('Calcular a soma dos multiplos de 5 ou 7 abaixo de 1000', () => {
    expect(somarMultiplos(5, 7, 1000)).toBe(156361)
  })
})
