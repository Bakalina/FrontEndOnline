window.onload = function () {

    let div1 = document.getElementById("one");
    let div2 = document.getElementById("two");
    let div3 = document.getElementById("three");

    let getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    setInterval(() => {
        div1.style.top = getRandom(0, 1000 - 200) + "px";
        div1.style.left = getRandom(0, 1900 - 200) + "px";
    }, 2000)

    setInterval(() => {
        div2.style.top = getRandom(0, 1000 - 200) + "px";
        div2.style.left = getRandom(0, 1900 - 200) + "px";
    }, 2000)

    setInterval(() => {
        div3.style.top = getRandom(0, 1000 - 200) + "px";
        div3.style.left = getRandom(0, 1900 - 200) + "px";
    }, 2000)


}