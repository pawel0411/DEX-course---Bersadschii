//TODO: Напишите функцию счётчик вызовов, должна принимать функцию и название
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (name, func) => {
  let count = 1;
  return function () {
    console.log(name, count++);
    return func.apply(this);
  };
};

//TODO: Напишите функцию логгер, должна принимать функцию и название
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (name, func) => {
  return function (...params) {
    console.log(name + " params: ", params);
    const result = func.apply(this, params);

    console.log(name + " result", result);

    return result;
  };
};

//TODO: Напишите функцию каррирования, должна принимать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
export const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return (...args2) => curried.apply(this, args.concat(args2));
    }
  };
};
