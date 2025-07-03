function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

// const Circle1 = new Function('radius',`
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }`);
//     const another = new Circle1(2);

    Circle.call({},5);
    const circle = new Circle(1);
