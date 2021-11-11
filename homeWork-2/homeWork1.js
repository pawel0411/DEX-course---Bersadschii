 function iter(a)
  {let sum;
    if ((typeof(a))!='symbol')
    {
      let check=Object.is(parseFloat(a),NaN);
             if (check!=true)
                return parseFloat(a);
              else
                 if ((typeof (a)=='string')&&(a.length>1))
                   check=Object.is(parseFloat(a.slice(1,a.length)),NaN);
                  if (check!=true)
                    return parseFloat(a.slice(1,a.length));
    }
    return 0;
 }
  // Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи
  return( iter(f)+iter(s));
      
