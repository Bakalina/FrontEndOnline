let fivetenQuestion = {


    game: function () {
        let counterTruth = 0;
        let counterFalse = 0;
        let start = confirm('Давай ссыграем?');
        if (start == true) {
            alert('ПРАВДА или ЛОЖЬ')
            let oneQuestion = confirm('Левое полушарие мозга отвечает за логику, а правое — за творчество ?');
            if (oneQuestion == true) {
                alert('Ответ не верный');
                counterFalse++;
                let twoQuestion = confirm('Земля — круглая?');
                if (twoQuestion == true) {
                    alert('Ответ не верный');
                    counterFalse++;
                    let threeQuestion = confirm('Эверест - самая большая гора');
                    threeQuestion == true ? (alert('Ответ не верный'), counterFalse++) : (alert('Если брать все возвышенности на Земле, включая их скрытую под водой часть, то самая высокая гора в мире — это гавайская Мануа-Кеа'), counterTruth++);
                } else {
                    alert('Невероятно, но факт. Земля не круглая.');
                    counterTruth++;
                    let fourQuestion = confirm('Банан — это ягода, а клубника — нет');
                    fourQuestion == true ? (alert('Да, это правда.'), counterTruth++) : (alert('Ответ не верный'), counterFalse++);
                }
            } else {
                alert('Да, это просто миф.');
                counterTruth++;
                let fiveQuestion = confirm('Большая часть бытового мусора на планете — это пластик?');
                if (fiveQuestion == true) {
                    alert('Ответ не верный');
                    counterFalse++;
                    let eightQuestion = confirm('Бумажный пакет — экологичнее, чем пластиковый');
                    eightQuestion == true ? (alert('Ответ не верный'), counterFalse++) : (alert('Вы правы, бумажный пакет, на самом деле, не экологичен. При производстве бумажного пакета выделяется на 70% больше CO2, чем при производстве пластикового.'), counterTruth++);
                } else {
                    alert('Действительно, это ложь, пластик — не основной загрязнитель окружающей среды.');
                    counterTruth++;
                    if (counterTruth > counterFalse) {
                        let sixQuestion = confirm('У рыб отсутствует долгосрочная память');
                        sixQuestion == true ? (alert('Ответ не верный'), counterFalse++) : (alert('Действительно, трехсекундная память золотой рыбки — это всего лишь миф.'), counterTruth++);
                    } else {
                        let sevenQuestion = confirm('Алкоголь вреден для мозга');
                        sevenQuestion == true ? (alert('Ответ не верный'), counterFalse++) : (alert('Нет, это не так. Алкоголь крайне негативно воздействует на наш организм, особенно при частом употреблении, однако он не способен «убить» мозговые клетки.'), counterTruth++);
                    }
                }

            }
            counterTruth > counterFalse ? alert('Ураааа Вы выиграли!!!') : alert('Вы проиграли!!!');

        } else {
            alert('До свидания!');
        }
    }
}