 //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
 for (let fruit of cartData) {
  if((fruit.oldPrice-fruit.price)>0)
  fruit.discount=fruit.oldPrice-fruit.price;
} 
for (let fruit of cartData) 
 delete fruit.oldPrice;
 for (let i=0; i<cartData.length; i++) {
  let name=cartData[i];
  console.log( `${name.id} ${name.type}${name.price}
  ${name.name}${name.count} ${name.date} ${name.discount}`); 
 }
