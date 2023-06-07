let name =document.getElementById("name")
let nameError = document.getElementById("nameError");
let nameValid = false;
name.addEventListener("blur", () => {
  let reg = /^[a-z?A-Z\u00C0-\u02AB'´`]+\.?\s([a-z?A-Z\u00C0-\u02AB'´`]+\.?\s?)+$/;
  if (!reg.test(name.value)) {
    (nameError.innerHTML = "Invalid Name"),
      (nameError.style.display = "block");
      nameValid= false;
  } else {
    nameError.style.display = "none";
    nameValid = true;
  }
});

let mobile =document.getElementById("mobile")
let mobileError = document.getElementById("mobileError")
let mobileValid = false;
mobile.addEventListener("blur", () => {
  let reg = /^\d{10}$/;
  if (!reg.test(mobile.value)) {
    (mobileError.innerHTML = "Invalid Mobile Number"),
      (mobileError.style.display = "block");
      mobileValid = false;
    } else {
        mobileError.style.display = "none";
        mobileValid = true;
  }
});

let email =document.getElementById("email")
let emailError = document.getElementById("emailError")
let emailValid = false;
email.addEventListener("blur", () => {
    console.log("value",email.value);
    reg = /^\d{0,20}?\w{0,20}@gmail.com$/
    if(!reg.test(email.value)){
        emailError.innerHTML= "Invalid Email",
        emailError.style.display = "block"
        emailValid = false;
    }else{
        emailError.style.display = "none"
        emailValid = true;
    }
});

let password = document.getElementById("password");
let passwordError = document.getElementById("passwordError");
let passwordValid = false;
password.addEventListener("blur", () => {
    reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!reg.test(password.value)){
        passwordError.innerHTML= "Invalid Password",
        passwordError.style.display = "block"
        passwordValid = false
    }else{
        passwordError.style.display = "none"
        passwordValid = true
    }
});

btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    console.log(nameValid);
    if(!nameValid || !mobileValid || !emailValid || !passwordValid){
        return alert("Invalid details")
    }
    const userDetails = {name:name.value,mobile:mobile.value,email:email.value,password:password.value};
    const storedData = JSON.parse(localStorage.getItem("users"));
    console.log("local storage data",storedData);
    if(storedData===null){
        localStorage.setItem("users",JSON.stringify( [userDetails]));
    }else{
        const updateData = [...storedData,userDetails]
        localStorage.setItem("users",JSON.stringify(updateData))
    }
    window.location.href="login.html"
});
