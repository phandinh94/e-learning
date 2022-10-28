
const form = document.getElementsByClassName("login-form")[0];
const serverUrl = "http://127.0.0.1:3000/"

form.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let logMail = form.logmail.value;
    console.log(logMail);
    let logPass = form.logpass.value;
    // console.log(logPass);
    let data = {
        logMail,
        logPass
    }
    // fetch()
})