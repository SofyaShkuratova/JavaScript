///1.  Написать программу, которая выводит название дня недели по его номеру
// Если пользователь вводит некорректный день, вывести в консоль сообщение «Incorrect day»
// В этом задании нужно обязательно использовать switch

let day = prompt(`Choose number for day!`);

switch (day) {
    case `day`:

    case `1`:
        console.log(`Monday`);
        break;
    case `2`:
        console.log(`Tuesday`);
        break;
    case `3`:
        console.log(`Wednesday`);
        break;
    case `4`:
        console.log(`Thursday`);
        break;
    case `5`:
        console.log(`Friday`);
        break;
    case `6`:
        console.log(`Saturday`);
        break;
    case `7`:
        console.log(`Sunday`);
        break;
       default:
           console.log(`Incorrect day!`)
    }