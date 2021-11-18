function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}
function work(a, b) {
  return( a + b ); // произвольная функция или метод
}

work = spy(work);

console.log('work(1, 2)',work(1,2)); // 3
console.log('work(1, 2)',work(3,4)); 

for (let args of work.calls) {
  console.log( 'call:' + args.join()); // "call:1,2", "call:4,5"
}
// на другом примере ...попробовал сделать... задача не сделана
