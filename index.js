function isEven(value){
  if(value % 2 == 0) return true
  return false
}
function isOdd(value){
  if(value % 2 != 0) return true
  return false
}

module.exports = {
  isEven,
  isOdd
}
