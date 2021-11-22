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
  // Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
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
