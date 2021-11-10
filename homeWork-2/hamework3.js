//Проверьте что в строке есть 'Success' без учёта регистра
let bankResponseLow=bankResponse.toLowerCase();
  if (bankResponseLow.includes('success')==true)
  {
    return 'Yes';

  }
  return 'No';
