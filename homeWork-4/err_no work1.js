function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

console.log(work(1, 2)); // 3
console.log(work(4, 5)); // 9
console.log(work(4, 5)); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
function spy(func) {
  let count = 0;
  function wrapper(...args) {
    //console.log(...args);
    wrapper.calls.push(args);
    console.log(++count);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}
//задача взята из примера( и считает пробную версию количества вызовов). 1ое задание не сделано

