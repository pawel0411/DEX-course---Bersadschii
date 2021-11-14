let now = new Date();

  let arr1=cartData.filter(item => item.date == date);
  
  let arr =[];

  let j=0;
  for (let key of arr1)
  {
    arr[j]=Object.assign({}, arr1[key]);
    j++;  
  }
  //alert(arr.length);
  arr.map(item => item.date=now);
 
  for (let i of arr)
  {
  while (true)
  {
      let id =Math.floor(Math.random() * 100);
      let index= cartData.findIndex(item=> item.id==id)
      if (index==-1)
      {
        i.id=id;
         break;
      }
  
  }
}
let mass = arr.concat(cartData);
  
  for (let name of mass) {
  alert( `${name.id} ${name.type}${name.price}
  ${name.name}${name.count} ${name.date}`); 
 }
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
    
