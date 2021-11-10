var mass=date.split('T');
var YsMoDa=mass[0].split('-');
   
  //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
  return `${YsMoDa[0]}: ${YsMoDa[1]}: ${YsMoDa[2]}`;
