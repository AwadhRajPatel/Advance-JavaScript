class User {
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
     static createId(){
        return `1234` 
    }
}
const Awadh = new User('Awadh')
// console.log(Awadh.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const realme = new Teacher('realme','realme@google.com')
realme.logMe();