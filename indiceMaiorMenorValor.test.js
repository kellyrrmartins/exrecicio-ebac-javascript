const { min, max } = require('./indiceMaiorMenorValor.js')

describe('Teste do exercicio 2 do modulo 20', () => {
  it('Verificar qual é o indice do menor ', () => {
    expect(min).toBe(6)
  })
  it('Verificar qual é o indice do maior valor', () => {
    expect(max).toBe(4)
  })
})
