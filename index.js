module.exports = {
  isEven : isEven,
  isOdd : isOdd
}

function isEven(par) {
  return par % 2 === 0
}

function isOdd(par) {
  return par % 2 != 0
}
