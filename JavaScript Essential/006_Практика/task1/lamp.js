let lamp = {
    isWorking: false,

    checkIsWorking: function () {
        while (!this.isWorking) {
            let isPluggedIn = confirm('Включена ли лампа?');

            if (isPluggedIn) {
                confirm('Может лампочка перегорела?') ? (alert('Замените лампочку'),this.isWorking = confirm('Уже работает?') ? 
                alert('Включите лампу') : alert('Почините лампу')) : alert('Почините лампу');

                // if (bulbBurnedOut) {
                //     alert('Замените лампочку');
                //     this.isWorking = confirm('Уже работает?');
                //     if (!this.isWorking) {
                //         alert('Почините лампу');
                //         break;
                //     }
                // } else {
                //     alert('Почините лампу');
                //     break;
                // }

            } else {
                alert('Включите лампу');
                this.isWorking = confirm('Уже работает?');
            }
        }
        if (this.isWorking) {
            alert('Отлично! Работает!');
        }








    }
}