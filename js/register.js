let form = document.querySelector("form")
form.addEventListener("submit",(e) =>
    {
        e.preventDefault()

        let username = document.getElementById("username").value.trim()
        let email = document.getElementById("email").value.trim()
        let password = document.getElementById("password").value.trim()

        let lowrCaseLetter = /[a-z]/g
        let upperCaseLetter = /[a-z]/g
        let numbers = /[0-8]/g

        if(username.lenght < 6 )
        {
            alert("Tài khoản phải ít nhất 6 ký tự.")
        }
        else if (password.lenght < 8)
        {
            alert("Mật khẩu phải ít nhất 8 ký tự.")
        }
        else if (!password.match(lowrCaseLetter))
        {
            alert("Mật khẩu phải có kí tự viết thường.")
        }
        else if (!password.match(upperCaseLetter))
        {
            alert("Mật khẩu phải có kí tự viết hoa.")
        }
        else if (!password.match(upperCaseLetter))
        {
            alert("Mật khẩu phải có kí tự số")
        }
        else
        {
            if(localStorage.getItem("users"))
            {
                let users = JSON.parse(localStorage.getItem("user"))
                users.push(
                    {
                        email,
                        password,
                        username,
                    }
                )
                localStorage.setItem("users",JSON.stringify(users))
            }
            else
            {
                localStorage.setItem("users", 
                    JSON.stringify(
                        [email,
                            password,
                            username,
                        ]
                    )
                )
            }
            alert("Người dùng  tạo thành công, hãy đăng nhập!!!")
            location.href = "./login.html"
        }
    }
)