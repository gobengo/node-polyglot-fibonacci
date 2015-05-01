/**
 * Calculate the Nth fibonacci recursively
 */
module.exports = function fib(n){
  var fibN =  n < 2
    ? 1
    : fib(n-1)+fib(n-2);
  return fibN;
}
