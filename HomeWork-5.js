// HOMEWORK 5
// Создайте массив целых чисел из 10 элементов 

const arr = [1,2,3,4,5,6,7,8,9,10]

// Task 1: Выведите в консоль сумму всех элементов массива 

function sumArr(a){
     let sum = 0
    for (let i = 0; i <= a.length; i++){
        sum = sum + i;
    }
    console.log(sum);
    return sum
}

// Task 2: Создайте новый массив на основе исходного в котором каждый элемент будет вдвое больше элемента исходного массива 

function newArr(el){
    let newArr = el.map(function(item){
       return item = item * 2
    });
    return newArr;
}

// Task 3: Найдите и выведите в консоль наибольший и наименьший элемент исходного массива. 
function minMax(arr){
    console.log(`Наибольшее значение массива ${Math.max(...arr)}`)
    console.log(`Наименьшее значение массива ${Math.min(...arr)}`)
}



module.exports = {sumArr, newArr, minMax}