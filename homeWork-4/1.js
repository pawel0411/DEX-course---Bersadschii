function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

console.log(work(1, 2)); // 3
console.log(work(4, 5)); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
function spy(func) {

  function wrapper(...args) {
    console.log(...args);
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}
//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
