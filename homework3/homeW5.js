let date ="2021-10-30T20:55:15.220Z";
let now = new Date();

  let arr1=cartData.filter(item => item.date === date);
  
  let arr =[];

  
  for (let j=0; j<arr1.length; j++)
  {
    arr[j]=Object.assign({}, arr1[j]);
    
  }  
  arr.map(item => item.date=now);
 
  for (let i of arr)
  {
  while (true)
  {
      let id =Math.floor(Math.random() * 100);
      let index= cartData.findIndex(item=> item.id===id)
      if (index===-1)
      {
        i.id=id;
         break;
      }
  
  }
}
let mass = arr.concat(cartData);
for (let i=0; i<mass.length; i++) {
  let name=mass[i];
  console.log( `${name.id} ${name.type}${name.price}
  ${name.name}${name.count} ${name.date}`); 
 }
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
    
