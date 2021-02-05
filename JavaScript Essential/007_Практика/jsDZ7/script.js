let fivetenQuestion = {


    game: function () {
        let counter = 0;
        let start = confirm('Давай ссыграем?');
        if (start == true) {
            alert('ПРАВДА или ЛОЖЬ')
            let oneQuestion = confirm('Левое полушарие мозга отвечает за логику, а правое — за творчество ?');
            if (oneQuestion == true) {
                alert('Ответ не верный');
                let twoQuestion = confirm('Земля — круглая?');
                if (twoQuestion == true) {
                    alert('Ответ не верный');
                    let threeQuestion = confirm('Эверест — самая высокая гора в мире');
                    threeQuestion == true?alert('Нет, хотя это очень частое заблуждение.'):(alert('Если брать все возвышенности на Земле, включая их скрытую под водой часть, то самая высокая гора в мире — это гавайская Мануа-Кеа'), counter++);
                }
                else {
                    alert('Невероятно, но факт. Земля не круглая.');
                    counter++;
                    let fourQuestion = confirm('Банан — это ягода, а клубника — нет');
                    fourQuestion == true?(alert('Да, это правда.'), counter++):alert('Удивитесь, но это все-таки правда.');
                }                
            } else {
                alert('Да, это просто миф.');
                counter ++; 

            }
        } else {
            alert('Good Buy');
        }
    }
}