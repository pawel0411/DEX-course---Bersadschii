 //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  for (let fruit of cartData) {
     if((fruit.oldPrice-fruit.price)>0)
     fruit.discount=fruit.oldPrice-fruit.price;
  } 
for (let fruit of cartData) 
    delete fruit.oldPrice;
  return cartData;
