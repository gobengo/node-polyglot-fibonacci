/**
 * Calculate the Nth fibonacci recursively
 */
module.exports = function fib(n){
  var fibN =  n < 2
    ? 1
    : fib(n-1)+fib(n-2);
  return fibN;
}

if (require.main === module) {
  var n = process.argv[2];
  if ( ! n) {
    console.error('Please pass an argument');
    process.exit(1);
  }
  if (typeof n === 'string') {
    n = parseInt(n, 10);
  }
  if (typeof n !== 'number' || Number.isNaN(n)) {
    console.error('Please pass an integer argument');
    process.exit(1);
  }
  console.log(module.exports(n));
}
