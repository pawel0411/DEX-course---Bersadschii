// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет
        // из него все значения кроме тех, которые находятся между a и b. То есть, проверка
        // имеет вид a ≤ arr[i] ≤ b.

       //Функция должна изменять принимаемый массив и ничего не возвращать.
       let arr = [5, 3, 8, 1];
       let a=1;
       let b=4;
       filterRangeInPlace(arr, a, b);
       function filterRangeInPlace(arr, a, b)
       {
         for (let i=0; i<arr.length; i++)
         {
           let index=arr[i];
           if (index<a||index>b)
           {
           arr.splice(i,1);
           i--;
           }     
        }
       }
       alert(arr);
