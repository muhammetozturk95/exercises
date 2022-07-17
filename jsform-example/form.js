let userNameDOM = document.querySelector("#userform")
userNameDOM.addEventListener("submit", formHandler)
let alertDOM = document.querySelector("#alert")

const alertFunction = (title,message,className = "warning") => 
    `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`


function formHandler(event) {
    event.preventDefault()

    let USER_NAME = document.querySelector("#username") 
    let SURNAME = document.querySelector("#surname") 
    let AGE = document.querySelector("#age")
    
    if(USER_NAME.value && SURNAME.value && AGE.value) {
        addItem(USER_NAME.value, SURNAME.value, AGE.value)
        alertDOM.innerHTML = alertFunction("Perfect!", "Saved!", "success")
        USER_NAME.value = ""
        SURNAME.value = ""
        AGE.value = ""

    } else {
        console.log("islem basarisiz")
        alertDOM.innerHTML = alertFunction("Oops!", "Invalid input!", "danger")
    }

}

let userListDOM = document.querySelector("#userList")

let addItem = (username, surname, age) => {
    let liDOM = document.createElement("li")

    

    liDOM.innerHTML = `Name/Surname: ${username[0].toUpperCase()}${username.slice(1)} ${surname.toUpperCase()} <span class="badge bg-primary rounded-pill">Age: ${age}</span> `
    userListDOM.append(liDOM)

    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start")
    
}