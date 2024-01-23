// ES6
/*
class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const patel = new User('Awadhraj', 'Awadh@google.com','1234');
console.log(patel.encryptPassword());
console.log(patel.changeUsername());

*/

// ****Behind the scene*****

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}adb`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const Awadh = new User('Patel','patel@google.com','12345')
console.log(Awadh.encryptPassword());
console.log(Awadh.changeUsername());