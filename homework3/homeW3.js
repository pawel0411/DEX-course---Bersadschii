//TODO: посчитать суммы по типам товаров и их цены
  let tot_Count=cartData.reduce((prev, user) => prev + user.count, 0);
  let tot_Sum=cartData.reduce((prev, user) => prev + user.price, 0);
  let someUser=cartData.filter(item => item.type =='water');
  let wat_Count=someUser.reduce((prev, user) => prev + user.count, 0);
  let wat_Sum=someUser.reduce((prev, user) => prev + user.price, 0);
  someUser=cartData.filter(item => item.type =='pizza');
  let piz_Count=someUser.reduce((prev, user) => prev + user.count, 0);
  let piz_Sum=someUser.reduce((prev, user) => prev + user.price, 0);
  someUser=cartData.filter(item => item.type =='other');
  let other_Count=someUser.reduce((prev, user) => prev + user.count, 0);
  let other_Sum=someUser.reduce((prev, user) => prev + user.price, 0);
  return { 
    total: { count: tot_Count, sum: tot_Sum },
    water: { count: wat_Count, sum: wat_Sum },
    pizza: { count: piz_Count, sum: piz_Sum },
    other: { count: other_Count, sum: other_Sum }
  };
