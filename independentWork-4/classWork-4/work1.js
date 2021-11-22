const requestURL = "https://jsonplaceholder.typicode.com/users";

const getUsers=(method, url)=>{
return fetch (url.name=='Oleg').then((r)=>r.json());
};
getUsers("GET", requestURL).then((data)=> console.log(data));
-------------------------
