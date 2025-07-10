//creating object contain 
//data
// city
// zipcode
//showAddress(address)
function showAddress(address){
    for(let key in address){
        console.log(key,address[key]);
    }
}

const address = {
    data: "July 10 2025",
    city:'delhi',
    zipcode:110086
};


showAddress(address);