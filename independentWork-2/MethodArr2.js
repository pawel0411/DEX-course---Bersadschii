// Напишите функцию filterRange(arr, a, b), которая принимает 
//массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
//Функция должна возвращать новый массив и не изменять исходный.
let a=1;
let b=4;
let arr=[5, 3, 8, 1, 2];
alert(filterRange(arr ,a ,b));
function filterRange(arr, a, b)
{
  if (a>b)
return arr.filter(index=> (index>=b)&&(index<=a));
return arr.filter(index=> (index>=a)&&(index<=b));
}
