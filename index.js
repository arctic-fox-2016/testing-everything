module.exports = {
  isEven : isEven,
  isOdd : isOdd,
  add : add
}

function isEven(par) {
  return par % 2 === 0
}

function isOdd(par) {
  return par % 2 != 0
}

function add(num1,num2) {
  return num1+num2
}
