let user = { name: "John", years: 30 };

let {name, years: age, isAdmin=true}=user;
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
//Деструктурирующее присваивание
