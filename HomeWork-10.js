//  HOMEWORK 10 
// Пользователь вводит текстовую строку. Определить с помощью регулярного выражения, является ли введённая строка:

const input = prompt("Введите дату, email или номер телефона: ");

// Task1: Датой.

let regDate = /[0-9]{1,2}[\.\/][0-9]{1,2}[\.\/][0-9]{2,4}/;

if (regDate.test(input)){
    console.log('Vallid date')
} else {
    console.log('Invalid date')
}


// Task2: Адресом электронной почты.

let regEmail = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/

if (regEmail.test(input)){
    console.log('Vallid email')
} else {
    console.log('Invalid email')
}

// Task3: Номером телефона.

const regNum = /\+\d[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0,1}\d{2}/;
const str = '+7 999 999-99-99';
console.log(reg.test(str));
