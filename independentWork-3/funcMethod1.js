function sumArgs() {
  arguments.reduce = [].reduce;
  return arguments.reduce(function(a, b) {
    return a + b;
  });
}
console.log( sumArgs(4, 5, 6) );
//Перепишите суммирование аргументов
