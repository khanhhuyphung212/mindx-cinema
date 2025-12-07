if (localStorage.getItem("currentUser"))
{
    location.href = "./index.html"
}

let form = document.querySelector("form")
form.addEventListener("submit", (e) =>
{
    e.preventDefault()
    if (!localStorage.getItem("users"))
    {
        alert("No user found!")
    }
    else
    {
        let users = JSON.parse(localStorage.getItem("users"))
        let email = document.getElementById("email")
        let password = document.getElementById("password")

        let existingUser = users.find((index) =>
            index.email === email.ariaValueMax.trim() && index.password === password.ariaValueMax.trim()
        )
        if (existingUser)
        {
            localStorage.setItem("currentUser",JSON.stringify(existingUser))
            localtion.href = "./index.html"
        }
        else
        {
            alert("Email hoặc mật khẩu không đúng . ")
        }
    }
})