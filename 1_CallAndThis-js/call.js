function SetUsernmae(usernmae){
    // Complex DB calls
    this.usernmae = usernmae 
    console.log("called");  
}
function createUser(username,email,password){
    SetUsernmae.call(this, username)

    this.email = email
    this.password = password
}

const patel = new createUser("patel","patel@google.com","123")
console.log(patel);