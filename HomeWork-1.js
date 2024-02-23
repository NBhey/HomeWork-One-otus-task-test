// HOMEWORK 1

//Task 1: В переменных a и b хранятся числа. Написать программу, которая выводит в консоль произведение и сумму этих чисел. 
function sum(a,b){
    let res = a + b
   console.log(res);
   return res

}                    


// Task 2: В двух переменных хранятся строки символов. Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.
function lengthWord(str1,str2){
    let result = str1.length + str2.length
    console.log (result);
    return result;
}
 


//Task 3: Написать программу, которая запрашивает у пользователя ввод трехзначного числа, а потом выводит в консоль сумму цифр введенного числа. 
function transformation(input){    
    const num = Number(input);
    const digit3 = num % 10;
    const digit2 = (num % 100 - digit3) / 10
    const digit1 = (num - (num % 100 - digit3) - digit3  ) /100
    const sum = digit1 + digit2 + digit3;
    console.log(sum)
    return sum;
}

module.exports = {sum, lengthWord, transformation}; 