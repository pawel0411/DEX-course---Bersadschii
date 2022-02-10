export const FormCompomemt = () => {
  const submit = (e: any) => {
    alert(e.target.password.value);
  };

  return (
    <>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Подформа 1</legend>
          <label>скрытый</label>
          <input type="hidden" />
          <label htmlFor="Ipassword">пароль</label>
          <input id="Ipassword" name="password" type="password" required />
          <label htmlFor="IreadOnly">чтение</label>
          <input id="IreadOnly" type="text" value="inn" readOnly />
          <label>радиокнопки</label>
          <div>
             
            <input type="radio" name="radiBtn" id="radiBtn1" value="radiBtn1" />
            radiBtn1
            <input
              type="radio"
              name="radiBtn"
              id="radiBtn2"
              value="radiBtn1"
            />{" "}
            radiBtn2
            <input
              type="radio"
              name="radiBtn"
              id="radiBtn3"
              value="radiBtn1"
            />{" "}
            radiBtn3
          </div>
        </fieldset>
        <fieldset>
          <legend>Подформа 2</legend>
          <label htmlFor="">на активное поле</label>
          <input type="text" disabled />
          <label htmlFor="">Число</label>
          <input type="number" max={100} min={1} />
          <label htmlFor="">Поле с граниченной длиной</label>
          <input type="text" maxLength={9} minLength={3} />
          <label htmlFor="">email с множественным вводом</label>
          <input type="email" />
          <label htmlFor="podskaska">поле с подсказкой</label>
          <input id="podskaska" type="text"  placeholder="подсказка" readOnly />
        </fieldset>
          <fieldset>
          <legend>Подформа 3</legend>
          <label htmlFor="">Дата</label>
          <input type="date" />
          <label htmlFor="">Телефон</label>
          <input type="number"/>
          <label>загрузка файла</label>
          <input type="file" id="file-uploader"/>
             <label>Чекбоксы</label>
          <div>
  <input type="checkbox" id="scales" name="scales" />
  условие1
  <input type="checkbox" id="horns" name="horns"/>
  условие2
  <input type="checkbox" id="rocks" name="rocks"/>
  условие3
</div>
        </fieldset>
         <fieldset disabled>
          <legend >Подформа 4</legend>
          <label>скрытый</label>
          <input type="hidden" />
          <label >пароль</label>
          <input id="" name="" type="password" required />
          <label htmlFor="">чтение</label>
          <input id="" type="text" value="inn" readOnly />
          <label>радиокнопки</label>
          <div>
             
            <input type="radio" name="radiBtn" id="radiBtn1" value="radiBtn1" />
            radiBtn1
            <input
              type="radio"
              name="radiBtn"
              id="radiBtn2"
              value="radiBtn1"
            />{" "}
            radiBtn2
            <input
              type="radio"
              name="radiBtn"
              id="radiBtn3"
              value="radiBtn1"
            />{" "}
            radiBtn3
          </div>
        </fieldset>
        <input type="submit" />
        <input type="reset" />
      </form>
      {/* 1 Сделать форму  с кнопкой отправки и кнопкой сброса полей.
   По кнопке отправить долна вызваться функция которая вызвает alert с паролем */}
      {/*2  разбить форму на 4 группы элементов с заголовками (Подформа 1, Подформа 2, ...) */}

      {/* 3 */}
      {/* 1 группа : скрытое поле, обязательное поле пароля,
       текстовое поля(только для чтения), группа из 3 радиобатаннов */}
      {/* 2 группа : не активное поле,поле с числами с ограничением от 1 до 100,
       текстовое поля(с ограничением длины от 3 до 9 символов), 
       поле email с множественным вводом, текстове поле c подсказкой */}
      {/* 3 группа : поле с датой,поле телефона, поле загрузки файлаю, 
       группа из 3 checkbox */}
      {/* 4 группа аналогична с 1 только все поля должны быть не активны. */}
    </>
  );
