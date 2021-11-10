 let dayToday=new Date();
  
  if (dayToday.getDay()==s.getDay()&& dayToday.getMonth()==s.getMonth())
  {
    
    let IsPremia=get.Day()*(get.Month()+1)+t*10/100;
    IsPremia=(IsPremia/10).toFixed(0)*10;
    return `У ${f} сегодня праздник его премия составляет ${IsPremia}`;
  }
