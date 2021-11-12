 //Сумма свойств объекта
        let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// reduce перебирает массив значений salaries,
// складывает их
// и возвращает результат
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}
alert( sumSalaries(salaries) );
