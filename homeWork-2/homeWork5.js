for (let i = 1; i < data.length; i++) {
  let count = data[i];
  let j = i;
  while (j > 0 && ((data[j - 1]).localeCompare(count)) > 0) {
    data[j] = data[j - 1];
    j--;
  }
  data[j] = count;
}
   //Отсортируйте массив строк по алфавиту
