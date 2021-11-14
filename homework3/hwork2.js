 let fruits;
  for (let fruit of cartItem)
  { if (fruit.name=="Пицца с анчоусами")
      fruits = Object.assign({}, fruit);
  }
  fruits.addedIngredients.count++;
  return fruits;
//TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
