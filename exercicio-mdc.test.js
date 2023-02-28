const { calculoMdc } = require('./exercicio-mdc')

describe('Teste do exercicio 1 do modulo 20', () => {
  it('Calculo do MDC', () => {
    expect(calculoMdc(24, 60)).toBe(12)
  })
})
