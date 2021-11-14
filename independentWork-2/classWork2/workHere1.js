let someUsers = data.filter(item => isFinite(item.address.street[0])== true);
let UsStreet='';
let UsName='';
  for (let i=0;i<someUsers.length; i++)
  {
    UsStreet=UsStreet+', '+someUsers[i].address.street;
    UsName=UsName+', '+someUsers[i].name;
  }
  return `По адресу ${UsStreet} живут пользователи ${UsName}`;
//TODO: Вывести  пользователей, у которых в адресе есть число, к примеру
// {street: "8 March"}
// Вывод: "По адресу {...} живут пользователи {...}"
