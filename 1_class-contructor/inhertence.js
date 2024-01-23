class User {
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const patel = new Teacher('AwadhRaj','Awadh@google.com','1235')
patel.addCourse();
const PatelJi = new User('PatelJi')
PatelJi.logMe();

console.log(patel instanceof User)