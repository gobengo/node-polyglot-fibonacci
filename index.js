var implPath = require('path').resolve(
  process.env.fibonacci_impl || __dirname+'/lib/fibonacci-cc'
)

module.exports = exports = require(implPath);

if (require.main === module) {
  var n = process.argv[2];
  var method = process.argv[3] || 'recursive';
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
  process.stdout.write(exports[method](n).toString())
}
