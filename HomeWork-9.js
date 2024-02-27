//  HOMEWORK 9

//  Task 1: Даны длины трех сторон треугольника. Определитть, является ли триугольник прямоугольным
let a = 3;
let b = 4;
let c = 5;


function rectangular(a,b,c){
    let result = (Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)) ? "Прямоугольный" : "Не прямоугольный";
    console.log(result);
}

// Task 2: Пользователь вводит число R. Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R
function lengthAndSquare(input){
    let circleSquare = Math.PI * Math.pow(input, 2);
    let circleLength = 2 * Math.PI * input;
    console.log(`Площадь круга с радиусом ${input} равна: ${Math.round(circleSquare)}. Длина окружности равна: ${Math.round(circleLength)}`);   
}


// Task 3: Пользователь вводит числа a, b и c. Написать программу, выводящую корни квадратного  уравнения с коэффициентами a, b и c.

function quadraticEquation(a,b,c){
    let discr = Math.pow(b,2)-4*a*c;
        if (discr>0){
    let x1 = (-b + Math.sqrt(discr)) / (2 * a);
    let x2 = (-b - Math.sqrt(discr)) / (2 * a);
    console.log(`корень x1:${x1}, корень х2:${x2}`);
}       else if (discr===0){
    const x = -b / (2 * a);
    console.log(`x= ${x}`);
}       else {
    console.log("Нет корней");
}
}



module.exports = {rectangular, lengthAndSquare, quadraticEquation}