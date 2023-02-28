function calculoMdc(valor1, valor2) {
  let resto
  while (valor2 != 0) {
    resto = valor1 % valor2

    valor1 = valor2

    valor2 = resto
  }

  return valor1
}

console.log(calculoMdc(24, 60))

module.exports = { calculoMdc }
