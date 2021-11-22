// так работает

const getData = (str) => {

  let promise = new Promise(function(resolve, reject) {
    if (false) // или ответ от str
    reject(new Error('ошибка'));
    resolve("все отлично");
  });
let answer;
 promise.then(resolve => answer= "положительно");
 promise.catch(reject=> answer="отрицательно"); 
return answer;
};
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch



---------------------------------------------

// мои пробные
  ******************************************
import { compareText } from "./data";
const answer =(compareText)=>
{
  if (compareText.then)
  compareText.then (return("выполнено успешно"));
   compareText.catch (return("выполнено ошибочно"));
}
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch


-------------
//пробная
const getData = (str) => { 
  compareText
  .then(=>{
    return "положительный";
  });   
  .catch(=>{
return "ошибка";
  }
  );
  
};
