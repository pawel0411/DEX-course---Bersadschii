const getDataFromAPI = async () => {
  async function f() {

    try {
      let response = await fetch("https://randomuser.me/api");
    } catch(err) {
      (err); // TypeError: failed to fetch
    }
  }
  
  f();
};
---------------------
  // Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI = async () => {
  let response = await fetch("https://randomuser.me/api");

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json = await response.json();
} else {
  console.log("Ошибка HTTP: " + response.status);
}
};

getDataFromAPI("https://randomuser.me/api");
getDataFromAPI("https://randomuser123.me/api");
getDataFromAPI("https://randomuser.me/api123");
