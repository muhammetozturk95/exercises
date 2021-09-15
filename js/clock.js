// let myName = document.querySelector("#myName")
// myName.innerHTML = prompt("Adınızı giriniz.")
// myName.innerHTML = `${myName.innerHTML[0].toUpperCase()}${myName.innerHTML.slice(1).toLowerCase()}`  // bunu da kullanabiliriz.

 function askName() {
     let myName = prompt("Adınızı Giriniz.");
     myName = `${myName[0].toUpperCase()}${myName.slice(1).toLowerCase()}`;
     document.querySelector("#myName").innerHTML = myName;  
    }


function showTime() {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()  

    day = day < 10 ? `0${day}`: day
    month = month < 10 ? `0${month}` : month
    hour = hour < 10 ? `0${hour}` : hour
    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec
    
    let time = `${day}.${month}.${year} ${hour}:${min}:${sec}`;
    document.querySelector("#myClock").innerHTML = time;
    // document.querySelector("#myClock").textContent = time;
    

    setTimeout(showTime, 1000);
}

askName();
showTime();


