//TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров
  let tot_Sum=cartData.reduce((prev, user) => prev + user.price*user.count, 0);
  let mass=cartData.filter(item => item.price*item.count >500);

 let flag=false;
 for (let key=0; key<cartData.length; key++)
 {
  if (('discount' in cartData[key])===true)
  flag=true;
 }
  return {
    total: tot_Sum>1000,
    oneBigPosition: mass.length>0,
    notDiscounted: flag
  };
