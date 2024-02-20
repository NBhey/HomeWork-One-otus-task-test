// HOMEWORK 8

// Task 1: Запросите у пользователя дату в формате ДД.ММ.ГГГГ. Напишите программу, выводящую день недели во введённой дате. 

let input = prompt('Введите дату в формате ДД.ММ.ГГГГ.')

function dayOfWeek(){    
    let date = input.split('.');
    let [day,month,year] = date;
    const newDate = new Date(`${year}-${month}-${day}`);
    const dayOfWeek = newDate.getDay();
    let dayWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    return dayWeek[dayOfWeek];
}