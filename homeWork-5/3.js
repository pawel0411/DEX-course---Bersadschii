const getResponse = async (str) => {
  let promise = new Promise(function(resolve, reject) {
    if (false) // или ответ от str
    reject(new Error('ошибка'));
    resolve("все отлично");
  });

 promise.then(resolve => {
   resolve= resolve +':)';
            if (resolve.length<20)
               resolve = resolve+ ')'.repeat(20-resolve.length)
              alert(resolve);});
 promise.catch(reject=> {
   reject=reject+':(';
            if (reject.length<20)
                reject = reject+ '('.repeat(20-reject.length)
              alert(reject);});

};

getResponse("короткий текст");
getResponse("Длинный");
// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих
