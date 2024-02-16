// HOMEWORK 3 

// Task 1: Вывести в консоль сумму всех целых чисел от 50 до 100.

function sumInteger(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++){
        sum = sum + i;
    }
    return sum;
}

// Task 2: Вывести в консоль таблицу умнодения на 7. 

function multiSeven(a) {
    let multi = 7 * a; 
    return `7 * ${a} = ${multi}`
}

// Task 3: Запросить у пользователя ввод числа N. Вывести в  консоль среднее арифметическое всех нечетных чисел от 1 до N. 

function averageOf(num){
    let count = 0; 
    let res = 0; 
    for (let i = 0; i <= num; i++){
        if (i % 2 != 0 ){
            count++;
            res = res + i;
        }
    }
    return res / count;
}

module.exports = {sumInteger, multiSeven, averageOf}; 