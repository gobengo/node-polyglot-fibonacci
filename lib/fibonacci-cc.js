var impl = require('bindings')('fibonacci');

/**
 * Calculate the Nth fibonacci recursively using C++
 */
exports.recursive = impl.recursive;

/**
 * Calculate the Nth fibonacci iteratively using C++
 */
exports.iterative = impl.iterative
