let valores = [2, 5, 6, 8, 22, 3, 1]
const min = valores.findIndex(valor => {
  return valor === Math.min(...valores)
})
const max = valores.findIndex(valor => {
  return valor === Math.max(...valores)
})

console.log(min)
console.log(max)

module.exports = { min, max }
