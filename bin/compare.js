var N = process.env.N || 42;

var impls = [
  { lang: 'C++', file: __dirname+'/../lib/fibonacci-cc.js'},
  { lang: 'JavaScript', file: __dirname+'/../lib/fibonacci-js.js'}
];
var implPath = require('path').resolve(
  process.env.fibonacci_impl || './lib/fibonacci-cc'
);

console.log('Comparing implementations of Fibonacci('+N+')')
var fastest;
impls.forEach(function (impl) {
  var label = '  '+impl.lang;
  var fibImpl = require(require('path').resolve(impl.file));
  Object.keys(fibImpl).forEach(function (method) {
    var label = [impl.lang, method].join('.');
    var t0 = nanoTime();
    fibImpl[method](N)
    var t1 = nanoTime();
    var duration = t1 - t0;
    if ( ! fastest || duration < fastest.duration) {
      fastest = { label: label, duration: duration };
    }
    var msDelta = duration / 1000;
    var formattedDelta = msDelta + 'ms'
    console.log([formattedDelta, label].join(' - '));
  });
})
console.log('\nThe fastest was '+fastest.label);

// get the current time in nanoseconds
function nanoTime() {
  var hrTime = process.hrtime();
  return (hrTime[0] * 1000000 + hrTime[1] / 1000)
}
