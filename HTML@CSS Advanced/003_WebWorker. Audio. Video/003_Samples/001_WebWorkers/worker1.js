﻿// Получив сообщение после "onmessage" события поток делает ответ.
onmessage = function (e) {
    // Устанавливаем задержку времени на расчет
    setTimeout(function () {
    // Отправка данных основному потоку. На странице будет вызвано событие message
    postMessage(e.data);
     },2000)
}
