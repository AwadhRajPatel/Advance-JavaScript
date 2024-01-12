const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// let date = new Date();
// console.log(date.toLocaleDateString())
// console.log(time.toLocaleTimeString());

setInterval(function(){
    let date = new Date();
    
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);