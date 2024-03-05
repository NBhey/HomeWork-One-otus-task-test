// HOMEWORK 6

// Task 1: Напишите функцию diff, которая получает в качестве параметров 2 числа и возвращает разницу между наибольшим и наименьшим. 

function diff(a, b){
    return (a > b ? a - b : b - a);
}

// Task 2: Напишите функцию isWord, которая принимает на вход текстовую строку. Функция возвращает true, если строка состоит из одного слова и false, если из нескольких

function isWord(str){
    let arr = str.split(' ')
    let newArr = []; 
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] != '') {
            newArr.push(arr[i]); 
        }
    }
    return ( newArr.length > 1 ) ? false  : true;
}

// Task 3: Напишите функцию pow(a,x), которя вернёт значение числа а, возвдененого в степент х  

function pow(a,x){
    return a ** x;
}
module.exports = {diff, isWord, pow}