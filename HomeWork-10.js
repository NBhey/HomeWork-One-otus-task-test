//  HOMEWORK 10 
// Пользователь вводит текстовую строку. Определить с помощью регулярного выражения, является ли введённая строка:

// const input = prompt("Введите дату, email или номер телефона: ");

// Task1: Датой.
function inputDate(d){
let regDate = /[0-9]{1,2}[\.\/][0-9]{1,2}[\.\/][0-9]{2,4}/;

if (regDate.test(d)){
    console.log('Vallid date')
} else {
    console.log('Invalid date')
}
}
// Task2: Адресом электронной почты.
function inputMail(mail){
let regEmail = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/

if (regEmail.test(mail)){
    console.log('Vallid email')
} else {
    console.log('Invalid email')
}
}
// Task3: Номером телефона.
function inputNum(num){
    let regNum = /\+\d[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0,1}\d{2}/;
    
    if (regNum.test(num)){
        console.log('Vallid number')
    } else {
        console.log('Invalid number')
    }
    }

module.exports = {inputDate, inputMail, inputNum}