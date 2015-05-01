var addon = require('bindings')('fibonacci');

/**
 * Calculate the Nth fibonacci recursively using C++
 */
module.exports = function (n) {
  return addon.fibN(n);
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
