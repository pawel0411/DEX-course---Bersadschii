const requestURL = "https://jsonplaceholder.typicode.com/users";

const getUsers=(method, url)=>{
return fetch (url.name=='Oleg').then((r)=>r.json());
};
getUsers("GET", requestURL).then((data)=> console.log(data));
-------------------------

  //решение работает
  
  (async () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  let response = await fetch(url);
  
  let commits = await response.json(); // читаем ответ в формате JSON
  for (let i=0; i<commits.length;i++)
  {

    if (commits[i].name=="Leanne Graham")
    console.log (commits[i]);  
  }
  })()
