import { compareText } from "./data";
const answer =(compareText)=>
{
  if (compareText.then)
  compareText.then (console.log("выполнено успешно"));
   compareText.catch (console.log("выполнено успешно"));
}
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
