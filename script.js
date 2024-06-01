let btn = document.getElementById("btn")

const reqLogin = ()=>{
    alert("login button clicked")
    location.href = "login.html"
}

btn.addEventListener("click" , reqLogin)