// HOMEWORK 2

// Task 1: В переменных a и b хранятся числа. Вывести в консоль наибольшее из них 

function moreLess(a,b){
    return (a > b ) ? a : b
}

// Task 2: Запросить у пользователя ввод числа от 1 до  12. Вывести в консоль название месяца, соответсвующее этому числу (1 - январь, 2 - феварль и т.д.)
function monthSearch(month){
    switch(month){
        case 1:
            return 'January'
        case 2:
            return 'February'
        case 3:
            return 'March'
        case 4:
            return 'April'
        case 5:
            return 'May'
        case 6:
            return 'June'
        case 7:
            return 'July'
        case 8:
            return 'August'
        case 9: 
            return 'September'
        case 10:
            return 'October'
        case 11:
            return 'November'
        case 12:
            return 'December'
    }
}

// Task 3: В переменных circle и square хранятся площади круга и квадрата соотвественно. Написать программу, которая определяет, поместится ли круг в квадрат.

function check(circle, square){
    let d = 2 * Math.sqrt(circle / Math.PI);
    let a = Math.sqrt(square);
    return  (d > a) ? false : true
}

module.exports = {moreLess, monthSearch, check}; 