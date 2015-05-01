#include <nan.h>

using namespace v8;

/**
 * calculate the Nth Fibonacci, recursively (ie naively)
 */
int recursiveFibonacci(int n) {
  if (n < 2) return 1;
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}
// V8 Method
NAN_METHOD(RecursiveFibonacci) {
  NanScope();
  int n = args[0].As<Number>()->IntegerValue();
  int fib = recursiveFibonacci(n);
  Local<Number> fibNumber = NanNew(fib);
  NanReturnValue(fibNumber);
}

/**
 * iterative implementation
 */
int iterativeFibonacci(int n) {
  int a = 0;
  int b = 1;
  int accum;
  while (n--) {
    accum = a + b;
    a = b;
    b = accum;
  }
  return b;
}
// V8 Method
NAN_METHOD(IterativeFibonacci) {
  NanScope();
  int n = args[0].As<Number>()->IntegerValue();
  int fib = iterativeFibonacci(n);
  Local<Number> fibNumber = NanNew(fib);
  NanReturnValue(fibNumber);
}

/**
 * exporter
 */
void Init(Handle<Object> exports) {
  exports->Set(
    NanNew("recursive"),
    NanNew<FunctionTemplate>(RecursiveFibonacci)->GetFunction()
  );
  exports->Set(
    NanNew("iterative"),
    NanNew<FunctionTemplate>(IterativeFibonacci)->GetFunction()
  );
}

// require('bindings')('fibonacci') = Init(exports)
NODE_MODULE(fibonacci, Init);
