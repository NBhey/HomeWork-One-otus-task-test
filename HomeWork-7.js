// HOMEWORK 7
//  Сверстать страницу и подключить к ней файл со скриптом. Настранице должны быть три текстовых параграфа, поле ввода и кнопка. Написать скрипт,который будет выполнять следующие условия:

// Task 1: Кнопка скрыта,если в поле ввода нет значения 

let btn = document.querySelector('.btn');
let textInput = document.querySelector('.input-text');
let main = document.querySelector('.main')

textInput.addEventListener('input', input)
btn.addEventListener('click',addItem)

function input(){
    if (textInput.value === '' ){
        btn.hidden = true;
    } else {
        btn.hidden = false;
    }
}
input();

// Task 2: При клике на кнопку добавляется параграф содержащий текст из поля ввода

function addItem(){
    const text = textInput.value;
    const el = document.createElement('p');
    el.innerText = text;
    main.append(el);
}

// Task 3: Если параграфов становится больше 5, первый из них удаляется 



