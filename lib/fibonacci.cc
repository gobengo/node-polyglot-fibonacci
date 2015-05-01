#include <nan.h>

using namespace v8;

int fibN(int n) {
  if (n < 2) return 1;
  return fibN(n-1) + fibN(n-2);
}

NAN_METHOD(FibN) {
  NanScope();
  // @param 0 {string} - String to print 
  int n = args[0].As<Number>()->IntegerValue();
  //int lengthOfStr = strlen(*String::Utf8Value(str));
  //printf(" %d\n", lengthOfStr);
  //Local<Number> v8len = NanNew(lengthOfStr);
  int fib = fibN(n);
  Local<Number> fibNumber = NanNew(fib);
  NanReturnValue(fibNumber);
}

void Init(Handle<Object> exports) {
  exports->Set(
    NanNew("fibN"),
    NanNew<FunctionTemplate>(FibN)->GetFunction()
  );
}

NODE_MODULE(fibonacci, Init);

