const getDataFromAPI = async () => {
  try
  {
    let response = await fetch("https://randomuser.me/api123");
    
       if (response.ok) { 

  let json = await response.json();
        console.log("все работает"+ json);
          } else {
            throw new Error("Ошибка HTTP: " + response.status);           
          }
        
      }
      catch(err)
      {
        console.log(err+" Ошибка!");
      }
};
// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
