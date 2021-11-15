console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
function pow (a,b)
{
  return a**b;
}
//Функция pow(x,n)
--------
let a=3;
let b=4;
if (b>0){
  console.log(pow(a,b));
}
else{
  console.log("число b не натурально");
}
function pow (a,b)
{let result=a;
        for (let i=1;i<b;i++)
       result*=a;
      return result;
}
