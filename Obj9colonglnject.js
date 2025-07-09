const circle = {
    radius : 1,
    draw : function(){
        console.log("draw");
    }
}

// const another = {};
// for (let key in circle)
//     another[key] = circle[key];


// console.log(another);

// we have another method too of cloning the object

// using Object.assign({},sourceObject)

                    // |     |
//                     new ||Source Object
                // or exising object


// const another = Object.assign({},circle);

// const oneOther = Object.assign({color : 'yellow'
// },circle);


// console.log(oneOther);

const spread = {... circle};

console.log(spread);