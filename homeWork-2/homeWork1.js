function iter(a)
  {let sum;
     if (Object.is(parseFloat(a),NaN)!=true)
     {
      return parseFloat(a);
     }
     else
     if ((typeof (a)=='string')&&(typeof(parseFloat(a[1]))=='number'))
        return +a.slice(1,a.length);
        else
        return 0;
    }

  // Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи
  return iter(f)+iter(s);
      
