// HOMEWORK 2

// Task 1: В переменных a и b хранятся числа. Вывести в консоль наибольшее из них 

function moreLess(a,b){
    let res = (a > b ) ? a : b;
    console.log(res)
    return res
}

// Task 2: Запросить у пользователя ввод числа от 1 до  12. Вывести в консоль название месяца, соответсвующее этому числу (1 - январь, 2 - феварль и т.д.)
function monthSearch(month){
    switch(month){
        case 1:
            console.log('January');
            return 'January'
        case 2:
            console.log('February');
            return 'February'
        case 3:
            console.log('March');
            return 'March'
        case 4:
            console.log('April');
            return 'April'
        case 5:
            console.log('May');
            return 'May'
        case 6:
            console.log('June');
            return 'June'
        case 7:
            console.log('July');
            return 'July'
        case 8:
            console.log('August');
            return 'August'
        case 9:
            console.log('September'); 
            return 'September'
        case 10:
            console.log('October');
            return 'October'
        case 11:
            console.log('November');
            return 'November'
        case 12:
            console.log('December');
            return 'December'
        default:
            let error = "Введите число от 1-12";
            console.log(error);
            return error
    }
}

// Task 3: В переменных circle и square хранятся площади круга и квадрата соотвественно. Написать программу, которая определяет, поместится ли круг в квадрат.

function check(circle, square){
    let d = 2 * Math.sqrt(circle / Math.PI);
    let a = Math.sqrt(square);
    return  (d > a) ? 'Не вместится' : 'Вместится'
}

module.exports = {moreLess, monthSearch, check}; 