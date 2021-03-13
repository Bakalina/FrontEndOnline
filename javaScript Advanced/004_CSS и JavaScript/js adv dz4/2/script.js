window.addEventListener("load", function () {

    document.getElementById("button").addEventListener("click", function () {
        let login = document.getElementById("login");
        let pass = document.getElementById("pass");
        let info = document.getElementById("info");

        if (login.value == "admin") {
            login.style.backgroundColor = "green";
        } else {
            login.style.backgroundColor = "red";
        }

        if (pass.value == 12345) {
            pass.style.backgroundColor = "green";
        } else {
            pass.style.backgroundColor = "red";
        }

        if (login.value == "admin" && pass.value == 12345) {
            info.innerHTML = "Вы авторизированы";
            info.style.color = "green";
        } else {
            info.innerHTML = "Вы не заполнили поля логин и пароль";
            info.style.color = "red";
        }
    })
})