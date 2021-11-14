let UsBonus='';
let UsName='';
  for (let i=0;i<data.length; i++)
  { let obj=data[i].userBonuses;
    UsBonus= UsBonus+', '+sumSalaries(obj)*2;
    UsName=UsName+', '+data[i].name;
  }
  function sumSalaries(obj) {
     return Object.values(obj).reduce((a, b) => a + b, 0);
  }
  return `Пользователи ${UsName} получат соответственно бонусов ${UsBonus}`;
//TODO: Вывести имена пользователей и количество их бонусов за все года, удвоить их
// Вывод: "Пользователи {...} получат соответственно {...} бонусов
