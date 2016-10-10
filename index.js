module.exports = {
  isGenap : isGenap,
  isGanjil : isGanjil
}

function isGenap(n) {
  if (n % 2 == 0) return true
  return false
}

function isGanjil(n) {
  if (n % 2 == 0) return false
  return true
}
