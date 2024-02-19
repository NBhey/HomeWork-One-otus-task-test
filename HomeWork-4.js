// HOMEWORK 4 
//  Создайте объект user, содержащий поле name со значением "John"

let user = {
    name: 'John'
}

// Task 1: Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user

function ageUser(enterAge) {
  user.age = enterAge;
    return user;
}
// Task 2: Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением 'admin' 

function copyUser(role) {   
    let admin = Object.assign({},user);     
    admin.role = role;
    return admin
}


// Task 3: Записать все значения полей объекта admin в отедльные переменные.Имена перемменных должны совпадать с названием полей

function variables(user){
    let {name,age,role} = admin;
    return (name === 'John' && age === 22 && role === 'admin') ? console.log(true) : console.log(false);
}



module.exports = {ageUser, copyUser}