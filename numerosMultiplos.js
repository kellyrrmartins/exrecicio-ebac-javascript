function somarMultiplos(valor1, valor2, limite) {
  let multiplosDe5 = 0
  let multiplosDe7 = 0
  let result

  for (let i = 0; i < limite; i++) {
    if (i % valor1 === 0) {
      multiplosDe5 += i
    } else if (i % valor2 === 0) {
      multiplosDe7 += i
    }
  }
  result = multiplosDe5 + multiplosDe7
  return result
}
console.log(somarMultiplos(5, 7, 1000))
module.exports = { somarMultiplos }
