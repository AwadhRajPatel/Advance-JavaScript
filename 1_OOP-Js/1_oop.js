/*Object literal 

const user = {
    username:"AwadhRaj",
    loginCount: 8,
    signedIn: true,

    getUserDelails: function(){
        // console.log("Got user details from database");
        // console.log (`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDelails());
*/


/*Constructor */


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne = new User('AwadhRaj',13,true)
const userTwo = new User("ChaiAurcode",11,false)
console.log(userOne.constructor);
// console.log(userTwo);

