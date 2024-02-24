// HOMEWORK 4 



function newObject(userName, years, profession){
    user = {}
    user.name = userName;
    user.age = years;

    const admin = Object.assign({},user);     
    admin.role = profession;
    let {name,age,role} = admin;

    console.log(name,age,role)
}


module.exports = {newObject}