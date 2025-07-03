function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
//factory function..we used camel case here.
const circle = createCircle(1);

//Constructor funciton

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);