
// compose(fn1, fn2, fn3)
// => fn1(fn2(fn3))
export default function compose (...funcs) {
  if(funcs.length === 0) return arg => arg;
  if(funcs.length === 1) return funcs[0];
  return funcs.reduce((result, item) => (...args) => result(item(...args)));
}
