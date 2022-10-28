
const formLogin = document.getElementsByClassName("login-form")[0];
console.log(formLogin);
const formSigin = document.getElementsByClassName("signin-form")[0];
const serverUrl = "http://127.0.0.1:3000"

// formLogin.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let logMail = formLogin.logmail.value;
//     // console.log(logMail);
//     let logPass = formLogin.logpass.value;
//     // console.log(logPass);
//     let data = {
//         logMail,
//         logPass
//     }
//     fetch(serverUrl + "/auther/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
//     .then((res)=> res.json)
//     .then((data)=> console.log(data))
//     .catch((err) => console.log(err))
// })
