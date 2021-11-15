 let fruits;
  for (let fruit of cartData)
  { if (fruit.name==="Пицца с анчоусами")
      fruits = Object.assign({}, fruit);
  }
  let fruits1 = Object.assign({}, fruits.addedIngredients[0]);
  delete fruits.addedIngredients[0];
  fruits1.count++
  fruits.addedIngredients[0]=fruits1;

console.log(fruits); 
 //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
