let isEven = function(input){
  if(input % 2 == 0){
    return true
  } else {
    return false
  }
}

let isOdd = function(input){
  if(input % 2 != 0){
    return true
  } else {
    return false
  }
}

module.exports = {isEven, isOdd}
