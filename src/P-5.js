/*function sortFruits(fruits) {
	return fruits.sort();
} */

//En Arrow Functions

/*const sortFruits =(fruits)=>{
    return fruits.sort();
}*/

//EJEMPLO
const fruits = ['banana', 'manzana', 'naranja', 'kiwi'];

const sortFruits =(fruits)=>{
    return fruits.sort();
}

console.log("Orden de Frutas: ",sortFruits(fruits));


/*function getElementInTheMiddle(list) {
	return list[list.length / 2];
}*/

//En Arrow Functions

/*const etElementInTheMiddle = (list) => {
    return list[list.length / 2];
}*/
//EJEMPLO:
const ListNumber = [1, 2, 3, 4, 5];

const etElementInTheMiddle = (list) => {
    return list[Math.floor(list.length / 2)];
}
 console.log("Numero medio de la lista: ", etElementInTheMiddle(ListNumber));


/* function adminLogin(user) {
	if(user == "ADMIN") return true;
	if(user == "DEV") return true;
	return false;
}*/

//En Arrow Functions

/*const adminLogin = (user) => {
    if (user === "ADMIN") return true;
    if (user === "DEV") return true;
    return false;
};*/

//EJEMPLO:

const adminLogin = (user) => {
    if (user === "ADMIN") return true;
    if (user === "DEV") return true;
    return false;
};
//const isAdmin = adminLogin("ADMIN");
const isAdmin = adminLogin("DEV");
//const isAdmin = adminLogin("user");

 if (isAdmin === true){
    console.log("BIENVENIDO");
 } else {
    console.log("ERROR"); 
 }