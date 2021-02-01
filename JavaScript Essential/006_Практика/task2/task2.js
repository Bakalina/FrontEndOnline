function calculate(n1, n2, sign) {
    // if (Array.isArray(n1) && Array.isArray(n2)) {
    //     let len = (n1.length > n2.length) ? n2.length : n1.length;
    //     let result = [];
    //     for (let i = 0; i < len; i++) {
    //         result.push(calculate(n1[i], n2[i], sign));
    //     }
    //     return result;
    // }
    // else {
    //     while (typeof n1 !== 'number'|| isNaN(n1)) {
    //         alert('Введите корректное первое число');
    //         n1 = parseInt(prompt('Первое число'));
    //     }

    //     while (typeof n2 !== 'number' || isNaN(n2)) {
    //         alert('Введите корректное второе число');
    //         n2 = parseInt(prompt('Второе число'));
    //     }

    //     switch (sign) {
    //         case '+':
    //             return n1 + n2;
    //         case '-':
    //             return n1 - n2;
    //         case '*':
    //             return n1 * n2;
    //         case '/':
    //             while (n2 === 0 || isNaN(n2)) {
    //                 alert('На ноль делить нельзя. Введите другое число!!!');
    //                 n2 = parseInt(prompt('Введите любое число кроме ноля'));
    //             }
    //             return n1 / n2;
    //         default:
    //             return 'Неверный знак операции';
    //     }
    // }


        
        while (typeof n1['a'] !== 'number'|| isNaN(n1['a'])) {
                    alert('Введите корректное первое число');
                    n1['a'] = parseInt(prompt('Первое число'));
        }
        while (typeof n2['b'] !== 'number' || isNaN(n2['b'])) {
                    alert('Введите корректное второе число');
                    n2['b'] = parseInt(prompt('Второе число'));
                }

        let resObject = {};
        switch (sign) {
            case '+':
                resObject.x = n1['a'] + n2['b'];
                break;
            case '-':
                resObject.x = n1['a'] - n2['b'];
                break;
            case '*':
                resObject.x = n1['a'] * n2['b'];
                break;
            case '/':
                resObject.x = n1['a'] / n2['b'];
                while (n2['b'] === 0 || isNaN(n2['b'])) {
                    alert('На ноль делить нельзя. Введите другое число!!!');
                    n2['b'] = parseInt(prompt('Введите любое число кроме ноля'));
                }
                resObject.x = n1['a'] / n2['b'];
                break;
            default:
                resObject.x = 'Неверный знак операции';
        }

        return resObject;

}