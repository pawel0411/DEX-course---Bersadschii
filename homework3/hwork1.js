 //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
for (let i=0; i<cartData.length; i++) {
  if((cartData[i].oldPrice-cartData[i].price)>0)
  cartData[i].discount=cartData[i].oldPrice-cartData[i].price;
} 
for (let j=0;j<cartData.length; j++) 
 delete cartData[j].oldPrice;

 for (let i=0; i<cartData.length; i++) {
  let name=cartData[i];
 // console.log(name); 
 }
return cartData;
