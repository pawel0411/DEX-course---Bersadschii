let count1=7;
let items ="Сок яблочный";

  let ElemInx = cartData.findIndex(item => item.name == items);
  cartData[ElemInx].count+= count1;
return CartData;
//TODO: увеличить кол-во товара в полученном элементе
