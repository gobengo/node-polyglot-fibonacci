# node-polyglot-fibonacci

An experiment in writing node.js bindings to other languages.

The bindings are to a function that calculates the Nth Fibonacci term.

## Implementations

* [C++](./lib/fibonacci.cc) - [bindings](./lib/fibonacci-cc.js) via [node-gyp](https://github.com/TooTallNate/node-gyp)
    - recursive
    - #TODO: recursive memoized
    - iterative
* [JavaScript](../lib/fibonacci-js.js)
    - recursive
    - #TODO: recursive memoized
    - iterative
* #TODO
    - Rust - [example](https://github.com/alexcrichton/rust-ffi-examples/tree/master/node-to-rust/src)
    - C++ via node-ffi. [example](https://github.com/node-ffi/node-ffi/blob/master/example/factorial/factorial.c) 

## Use it

```
⚡ FIBONACCI_IMPL=lib/fibonacci-cc.js node index.js 42
433494437
```
```
⚡ FIBONACCI_IMPL=lib/fibonacci-js.js node index.js 42
433494437
```

## Compare Implementations

```
⚡ make compare N=42
node bin/compare.js
Comparing implementations of Fibonacci(42)
1148.6017629394532ms - C++.recursive
0.0134940185546875ms - C++.iterative
5944.805768920898ms - JavaScript.recursive
0.0868218994140625ms - JavaScript.iterative

The fastest was C++.iterative
```
