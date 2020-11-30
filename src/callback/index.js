function sum(sum1, sum2) {
  return sum1 + sum2
}

const sumaJ = (nume1, nume2) => nume1 + nume2;

function calc(num1, num2, callback) {
  return callback(num1, num2)
}
// const calcularJ = (man1, man2, callback) => {
//   return callback(man1, man2)
// }


console.log(calc(2, 2, sum))

console.log(calc(4, 2, sumaJ))


const date = (callback) => {
  console.log(new Date)
  setTimeout( function () {
    let date = new Date
    callback(date)
  }, 3000)
}

function printDate(dateNow) {
  console.log(dateNow)
}

date(printDate);