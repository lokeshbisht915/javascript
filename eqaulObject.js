//we have to cheak wheather the properties and values
//of both the address are same or not
// 
let address1 = new Address('a','b','c');
let address2 = new Address('a','b','c');


function Address(street,city,pincode){
    this.street = street,
    this.city = city,
    this.pincode = pincode;
}

let address = {...address1,...address2}

function areEqual(address1,address2){
    for(let key in address){
        if(Object.keys(address1) == Object.keys[key]){
            console.log(address1.key, address2.key);
        }
        else{
            console.log("no");
            console.log(Object.keys(address1), Object.keys(address2));
        }
    }
}

areEqual(address1,address2);