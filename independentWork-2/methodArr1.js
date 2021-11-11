function camelize(str)
       {
         let arr=str.split('-');
         arr=arr.map((str,index) => index==0 ? str: (str[0].toUpperCase()+str.slice(1)));

          return arr.join('');
       }
      alert(camelize("background-color"));
      alert(camelize("list-style-image"));
      alert(camelize("-webkit-transition"));
      //Переведите текст вида border-left-width в borderLeftWidth
