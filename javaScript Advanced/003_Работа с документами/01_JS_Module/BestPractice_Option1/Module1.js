﻿// -------------------------------------------------
// Module1.js модуль вспомогательных функций.
// Данный модуль единственное глобальное имя Module1
// -------------------------------------------------

// Пустой объект, который будет выполнять функцию протсранства имен.
// Это единственное глобальное имя, которое будет вмещать все остальные имена.
// Правило: имя модуля должно быть связано с именем файла
let Module1 = {};

Module1.name = "MODULE 1"; 

Module1.startModule1 = function () {
    document.write(Module1.name + "<br />");
}