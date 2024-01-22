let myName = "AwadhRaj  "
// console.log(myName.trueLength())

let myHeros =['thor','spiderman']
let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.thor}`);
    }
}
Object.prototype.AwadhRaj = function(){
    console.log(`AwadhRaj is present in all objects`);
}

Array.prototype.heyAwadhRaj = function(){
    console.log(`Awadhraj says hello`);

}

// heroPower.AwadhRaj();
myHeros.AwadhRaj()
myHeros.heyAwadhRaj()
// heroPower.heyAwadhRaj()

/* Inheritance */

const user ={
    name: 'Awadh',
    email: 'Awadh@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__= user

Object.setPrototypeOf(TeachingSupport,Teacher)

let anothersUsername = "Patelwithcode  "
String.prototype.trueLength = function(){
    cons
}