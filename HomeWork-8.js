// HOMEWORK 8

// Task 1: Запросите у пользователя дату в формате ДД.ММ.ГГГГ. Напишите программу, выводящую день недели во введённой дате. 

function dayOfWeek(){   
    let input = prompt('Введите дату в формате ДД.ММ.ГГГГ.') 
    let date = input.split('.');
    let [day,month,year] = date;
    const newDate = new Date(`${year}-${month}-${day}`);
    const dayOfWeek = newDate.getDay();
    let dayWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    return dayWeek[dayOfWeek];
}

// Task 2: Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.

const today = new Date(); 
const minute = today.getMinutes() + today.getHours()*60;
console.log(minute)

// Task 3: В двух переменных хранятся даты рождения двух пользователей в форматен ДД.ММ.ГГГГ. Написать программу, которая определяет более молодого пользователя

let user1 = "20.03.1993";
let user2 = "13.05.2003"; 

function checkBirthday(somethingUser){
    let [day,month,year] = somethingUser.split('.')
    let date = new Date(`${year}-${month}-${day}`)
    let timeStamp = date.getTime();
    return timeStamp
}
checkBirthday(user1) > checkBirthday(user2) ? console.log('Старше user2') : console.log('Старше user1')