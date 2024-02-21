//  HOMEWORK 9

//  Task 1: Даны длины трех сторон треугольника. Определитть, является ли триугольник прямоугольным
let a = 3;
let b = 4;
let c = 5;


function rectangular(a,b,c){
    let result = (Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)) ? "Прямоугольный" : "Не прямоугольный";
    console.log(result);
}
rectangular(a,b,c)

// Task 2: Пользователь вводит число R. Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R

let input = +prompt('Введите R');
let circleSquare = Math.PI * Math.pow(input, 2);
let circleLength = 2 * Math.PI * input;
console.log(`Площадь круга с радиусом ${input} равна: ${Math.round(circleSquare)}. Длина окружности равна: ${Math.round(circleLength)}`);