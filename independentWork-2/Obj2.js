 // Напишите функцию isEmpty(obj), которая возвращает true, 
//если у объекта нет свойств, иначе false.
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
function isEmpty(obj)
{
 for (let key in obj)
 {
  return true;
 }
  return false;
}
