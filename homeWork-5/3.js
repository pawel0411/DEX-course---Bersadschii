// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих
const getResponse = async (str) => {
  let promise = new Promise(function(resolve, reject) {

    if (true) // или ответ от str
    reject(new Error('ошибка'));
    resolve("все отлично");
  
  }).then(function(result) {
  
    console.log(result); // 1
  
    return new Promise((resolve, reject) => { 
      setTimeout(() => resolve(result+':)'), 1000);
    });
  
  }).then(function(result) { 
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result +')'.repeat(20-(result.length))), 1000);
    });
  
  }).then(function(result) {
  
    console.log(result); // 4
  
  });   
              
 promise.catch(function(result) {
  
  console.log(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => reject(result+':('), 1000);
  });

}).catch(function(result) { // (**)

  console.log(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => reject(result +'('.repeat(20-(result.length))), 1000);
  });

}).catch(function(result) {

  console.log(result); // 4

});   

};





getResponse("короткий текст");
getResponse("Длинный");

