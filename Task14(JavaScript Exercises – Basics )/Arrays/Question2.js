console.log("/*************Question2**************/");

let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruit.unshift();

console.log("Remove last item:- " + vegetables);
console.log("Remove first item:- " + fruit);

console.log("index of 'orange' " + fruit.indexOf("orange"));
const orang = fruit.indexOf("orange");
const edit = fruit.push(orang);
console.log("add the index of orange as last " + fruit);

console.log("length of veg array " + vegetables.length);
const lenOfVegi = vegetables.length;
const end = vegetables.push(lenOfVegi);
console.log("add the length as the lsat thing " + vegetables);

const food = fruit.concat(vegetables);
console.log("Two arrays combined together fruit array first:- " + food);

const index4 = food.splice(4, 2);
console.log("remove 2 elemnts that start at index 4:- " + food);

console.log("Reverse the array:- " + food.reverse());

const sp = food.join(" ");
const last = sp.toString();
console.log("I made them string and changed the ',' to a space \n"+last);
