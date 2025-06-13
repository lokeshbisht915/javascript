//returning the object with a function.

// there can be a custome object with this

// we can initialise a method and define into the outside..

function createCircle(radius,location){
    return {
        radius,
        draw(){
            this.location = location; //this keyword targetting the object circle1;
        }
    };
}

const circle1 = createCircle(1,"23*N");
console.log(circle1);