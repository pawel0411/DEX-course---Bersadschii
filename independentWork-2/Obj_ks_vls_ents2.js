//Подсчёт количества свойств объекта
let user = {
  name: 'John',
  age: 30
};
function count(user)
{
let count=0;
for (let keys of Object.values(user))
count++;
   return count;
}
alert(count(user));
