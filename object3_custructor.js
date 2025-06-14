//pascel Notation -> OneTwoThreeFour

//pascal Notation -> oneTwoThreeFour

function createCircle(radius){
    this.radius = radius;
    this.draw = function(){
        document.writeln("Object");
    }
}

let object3 = new createCircle(5);
//new keyword here is able to create a new empty object, assigning value and return that object agian.
//this variable here pointing to the object createCircle.
console.log(object3);