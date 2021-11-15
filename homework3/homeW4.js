//TODO: выбрать покупки сделанные за выбранную дату

//TODO: выбрать покупки сделанные за выбранную дату
  let mass= cartData.filter(item => item.date == date);
  if (mass.length>0)
  return mass;
  return cartData;
