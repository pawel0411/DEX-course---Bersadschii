 let fruits;
  for (let fruit of cartData)
  { if (fruit.name==="Пицца с анчоусами")
      fruits = Object.assign({}, fruit);
  }
  fruits.addedIngredients.count++;
  console.log( fruits); 
  console.log(fruits.addedIngredients.count);
//TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента


------
let nameProd="Пицца с анчоусами";
let fruits= cartData.find(item => item.name === nameProd);
------
let fruits;
  for (let fruit of cartData)
  { if (fruit.name==="Пицца с анчоусами")
      fruits = Object.assign({}, fruit);
  }
let doublePrices = Object.fromEntries(
    Object.entries(fruits.addedIngredients).map(([key, value]) => (key== 'count')?[key, value]: [key, value]));
 
    console.log(doublePrices);
