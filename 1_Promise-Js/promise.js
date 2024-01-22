/* First promise create */

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // Db calls , cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete')
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})

/* 2nd Second Promise create */
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 reolved");
})

/* 3rd Third Promise Create */

const promisethree = new Promise(function(reolved,reject){
    setTimeout(function(){
        reolved({username: "Raja", email: "raja@example.com"})
    },1000)

})

promisethree.then(function(user){
    console.log(user);
})


/* 4th Fourth Promise create */
const Promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =  false  //true
        if(!error){
            resolve({username: "AwadhRaj", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

Promisefour
.then((user)=>{
console.log(user);
return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error)
}).finally(()=> console.log("The Promise is eithers resolved or rejecte"))

/*5TH Five Promise Create */

const promisefive = new Promise(function(reolved,reject){
    setTimeout(() => {
        let error = true  //false
        if (!error) {
            reolved({username: "Javascript",password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumedPromisefive(){

    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
          /* both code use ya direct and try catch use kar sakte hai */

   // const response = await promisefive
   // console.log(response);
}
consumedPromisefive()

/*   first Methods create json try and catch

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
*/

/* 2nd method create json file direct fetch useing
  ***--Fetch Api concept---****
*/
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))
