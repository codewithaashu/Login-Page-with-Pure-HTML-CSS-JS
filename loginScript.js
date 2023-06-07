let email = document.getElementById("email");
let password = document.getElementById("password");
loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
    const storedData =  JSON.parse(localStorage.getItem("users"));
    console.log(storedData);
    let flag = false;
    storedData.map((curr)=>{
        if(curr.email===email.value && curr.password===password.value){
            flag = true;
            alert("login successfully");
            window.location.href ="welcome.html";
        }
    })
    if(!flag){
    alert("Invalid email or password");
    }
});