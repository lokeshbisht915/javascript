// earlier we intitailise the object using object literal 
// for this we are doing using factory or constructor function.
let now = new Date();

function showAddress(now,city,pinCode){
    return {
        date : now,
        city,
        pinCode
    }
} 

function showOtherAddress(now,city,pincode){
    this.date = now,
    this.city = city,
    this.pincode = pincode;
}

let address = showAddress(now,'delhi',110086);
let otheraddress = new showOtherAddress(now,'delhi',110086);

// console.log(address);   
for(let key in otheraddress )
    console.log(key,otheraddress[key])