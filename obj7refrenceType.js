let y = 20;
let x = y;

let a = {value : 10}
let b = a;

console.log("before change y = 20 and x = y /n a = 10 adn b = a");
console.log(y,x,a,b);
y = 30;
a.value = 20;
console.log("after change y to 30 and a to 20/n the values of x , b are");
console.log (x,b)

// let number = 10;

// function increase(number){
//     number++;
// }

// increase(number);

// console.log(number);

let obj = {value : 10}
function increase(obj){
    obj.value++;
}

increase(obj);

console.log(obj);

