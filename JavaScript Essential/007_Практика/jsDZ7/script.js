let fivetenQuestion = {


    game: function () {
        let counter = 0;
        start = confirm('Давай ссыграем?');
        if (start != false) {
            alert('ПРАВДА или ЛОЖЬ')
            oneQuestion = confirm('1) Левое полушарие мозга отвечает за логику, а правое — за творчество ?');
            if (oneQuestion == true) {
                alert('Ответ не верный');
            } else {
                alert('Да, это просто миф.');
                counter ++; 
            }
        } else {
            alert('Good Buy');
        }
    }
}