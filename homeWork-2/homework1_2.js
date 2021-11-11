function iter(a)
  {let sum;
    if ((typeof(a))!='symbol')
    {
             if (isFinite(parseFloat(a))==true)
                return parseFloat(a);
              else
                 if ((typeof (a)=='string')&&(a.length>1))
                  if (isFinite(parseFloat(a.slice(1,a.length)))==true)
                    return parseFloat(a.slice(1,a.length));
    }
    return 0;
 }
  // Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи
  alert( iter(f)+iter(s));
