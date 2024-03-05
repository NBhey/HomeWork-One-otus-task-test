// HOMEWORK 7

function userList(element){

 //  Сверстать страницу и подключить к ней файл со скриптом. Настранице должны быть три текстовых параграфа, поле ввода и кнопка. Написать скрипт,который будет выполнять следующие условия:

    let body = document.querySelector('body');
    body.append(element)

    const title = document.createElement('h2');
    title.innerText = 'Список с параграфами';
    element.append(title);
    
    const input = document.createElement('input');
    input.value = '';
    element.append(input);
    
    const btn = document.createElement('button');
    btn.innerText = 'Добавить параграф';
    element.append(btn);
    btn.hidden = true;

    const paragraphsArr = []
    for (let i = 1;  i < 4; i++) {
        const el = document.createElement('p')
        el.innerHTML = `Параграф ${i}`;
        element.append(el);
        paragraphsArr.push(el.innerText = `Параграф ${i}`)
    }
    // console.log(paragraphsArr);
// Task 1: Кнопка скрыта,если в поле ввода нет значения 

    input.addEventListener('input',() => {
        if (input.value == '') {
            btn.hidden = true;
        } else { btn.hidden = false; }
    });

// Task 2: При клике на кнопку добавляется параграф содержащий текст из поля ввода
// Task 3: Если параграфов становится больше 5, первый из них удаляется 
    let count = 3;
    btn.addEventListener('click', (ev) => {
        ev.preventDefault();
        let new_paragraph = document.createElement('p');
        new_paragraph.innerText = input.value;
        // paragraphsArr.push(input.value)
        // if (paragraphsArr.length == 6){
        //     paragraphsArr.shift()
        // }
        // console.log(paragraphsArr)
        input.value = '';
        btn.hidden = true;
        element.append(new_paragraph)
        // count ++; 
        // if (count == 6 ){
        //     document.querySelector('p').remove();
        //     count--
        // }

        const paragraphs = element.querySelectorAll('p');
        if (paragraphs.length > 5) paragraphs[0].remove();
        // console.log(paragraphs);
    })
    
}
let rock = document.createElement('section')
userList(rock)




module.exports = {userList}