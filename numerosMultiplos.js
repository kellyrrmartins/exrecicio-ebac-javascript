

function somar(limite) {
  let multiplosDe5 = 0
  let multiplosDe7 = 0


  for (let i = 0; i < limite; i++) {
    if (i % 3 === 0) {
      multiplosDe5 += i
    } else if (i % 5 === 0) {
      multiplosDe7 += i
    }
  }


  console.log(multiplosDe5 + multiplosDe7)
}

somar(1000)