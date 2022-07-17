let togglePassword = document.querySelector('#togglePassword');
let password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
    
});

let userFormDOM = document.querySelector("#userForm")
let toastLiveExample = document.getElementById('liveToast')
let toastFailedExample = document.getElementById('liveToastFailed')

userFormDOM.addEventListener("submit", formHandler)




function formHandler(event) {
    event.preventDefault()
     
    let USER_NAME = document.querySelector("#username")

    if(USER_NAME.value && password.value) {
        addItem(USER_NAME.value)
        console.log("heyy")

        let toastSuccess = new bootstrap.Toast(toastLiveExample)
        toastSuccess.show()
        
        
        

        USER_NAME.value = ""
        password.value = ""

    } else {
        console.log("oopss")
        let toastFailed = new bootstrap.Toast(toastFailedExample)
        toastFailed.show()

        USER_NAME.value = ""
        password.value = ""
    }


}

let userListDOM = document.querySelector("#userList")

let addItem = (userName) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `Kullanıcı adı: ${userName}`
    
    liDOM.classList.add("list-group-item")
    userListDOM.append(liDOM)
}




