const getData = (str) => {
  try
  {
    if (str=="короткий текст")
    console.log("Success: получен "+ str);
    else
    throw new SyntaxError("в сообщении "+ str+"есть ошибка");
  }
  catch(e)
  {
console.log("Error: "+e.message);
  }
};
// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
