let name ="Сок яблочный";
let someUsers = cartData.filter(item => item.name ===name);

for (let i=0;i<someUsers.length; i++)
someUsers[i].count++;
  //TODO: увеличить кол-во товара в полученном элементе
  return cartData;
