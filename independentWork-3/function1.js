function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
-------
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
//Перепишите функцию, используя оператор '?' или '||'
