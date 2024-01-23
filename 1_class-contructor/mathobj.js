// Object.getOwnPropertyDescriptor(Math)

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
 
 console.log(descripter);
/*
console.log(Math.PI);
Math .PI = 5
console.log(Math.PI);
*/

const realme ={
    name: 'Narzo-50',
    price: 120000,
    isAvailable: true
}

/*
console.log(Object.getOwnPropertyDescriptor(realme,"name"));

Object.defineProperty(realme, 'name',{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(realme,"name"))
*/

for(let [key,value] of Object.entries(realme)){
    console.log(`${key} : ${value}`);
}