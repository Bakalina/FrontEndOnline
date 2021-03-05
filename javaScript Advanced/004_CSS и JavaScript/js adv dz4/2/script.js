window.addEventListener("load", init, false);

function init() {
    login.onchange = nameOnChange;
    pass.onchange = passOnChahge;
    form.onchange = formOnChahge;
}

function validate(elem, pattern) {
    let res = elem.value.search(pattern);
    if (res == -1) elem.className = "invalid";
    else elem.className = "valid";
}

function nameOnChange() {
    let pattern = /\w/;
    validate(this, pattern);
}

function passOnChahge() {
    let pattern = /\w/;
    validate(this, pattern);
}


function formOnChahge() {


    let invalid = false;

    for (let i = 0; i < form.elements.length; ++i) {
        let e = form.elements[i];
        if (e.type == "text" || e.type == "password" && e.onchange) {
            e.onchange();
            if (e.className == "invalid") invalid = true;
        }
    }

}