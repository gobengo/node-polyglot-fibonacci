/**
 * Calculate the Nth fibonacci recursively
 * O(n^^2)
 */
exports.recursive = function recursiveFib(n){
  var fibN =  n < 2
    ? 1
    : recursiveFib(n-1)+recursiveFib(n-2);
  return fibN;
}

/**
 * Calculate the Nth fibonacci iteratively
 * O(n)
 */
exports.iterative = function iterativeFib(n) {
  var a = 0;
  var b = 1;
  var accum;
  while (n--) {
    accum = a + b;
    a = b
    b = accum
  }
  return b
}
