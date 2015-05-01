var addon = require('bindings')('fibonacci');

/**
 * Calculate the Nth fibonacci recursively using C++
 */
module.exports = function (n) {
  return addon.fibN(n);
}
