let bankResponseLow=bankResponse.toLowerCase();
  if (bankResponseLow.includes('success')==true)
  {
    return 'Yes';

  }
  return 'No';
