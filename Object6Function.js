function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const Circle1 = new Function('radius',`
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }`);

    const circle = new Circle(1);