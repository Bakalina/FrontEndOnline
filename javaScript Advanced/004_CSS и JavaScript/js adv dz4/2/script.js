window.onload = function () {
    let button = document.getElementsByTagName('button')[0];


    button.onclick = function () {
        let login = document.getElementsByTagName('input')[0];
        let pasworld = document.getElementsByTagName('input')[1];
        login.style.backgroundColor = "red";
        pasworld.style.backgroundColor = "red";
    };

    let login = document.getElementsByTagName('input')[0];

    login.addEventListener = function () {
        if (login.validity.typeMismatch) {
            login.setCustomValidity('rere');
        } else {
            login.setCustomValidity('');
        }
    }

    

}




