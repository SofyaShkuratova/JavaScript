// 1. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.
 

let i;
let userNumber = 0;
let averageN = 0;
// let counterN = 0;
let sumN = 0;

    for (i = 0; ; i++) {

        let userNumber = prompt(`Введите число n`);

        if ( userNumber !== null) {
            sumN += +userNumber;
            continue;
        }

        if ( userNumber === null) {
            averageN = sumN/i;
            alert(`Среднее арифметическое введенных чисел ${averageN} за ${i} попыток`);
            break;
        }
    }
    
    
    
// 2. Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.



let n = +prompt(`Введите число n`);

if (n > 0) {
    for (let i = n; i >= 0 ; i--) {
        console.log(`${n}`);
        n--;
    }
} else if (n < 0) {
    for (let i = n; i <= 0 ;i++) {
        console.log(`${n}`);
        n++;
    }
} else {
    alert(`incorrect number`);
}

//3. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

let numberOne = +prompt(`Введите первое число`);
let numberTwo = +prompt(`Введите второе число`);

if (numberTwo > numberOne) {
    let numberThree = +prompt(`Введите третье число`);
    if (numberThree > numberTwo) {
        let numberFour = +prompt(`Введите четвертое число`);
        if (numberFour > numberThree) {
            let numberFive = +prompt(`Введите пятое число`);
            if (numberFive > numberFour) {
                alert(`Вы прошли игру!`);
            } else {
                alert(`Введите число 5 больше числа 4`);
            }
        } else {
            alert(`Введите число 4 больше числа 3`);
        }
    } else {
        alert(`Введите число 3 больше числа 2`);
    }
} else {
    alert(`Введите число 2 больше числа 1`);
}

let num = +prompt(`Введите число`);

for (let i = 1; i < 5; i++) {
    let numTwo = +prompt(`Введите число`);
    if (numTwo > num) {
        continue;
    } else {
        alert(`Введите число 2 больше числа 1`);
        break;
    }
}


// 4. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

    
let userNum = +prompt(`Введите число`);
let string = ``;

for(let i = 0; i < userNum; i++){
    string += `за`;
}
alert(string + `ика`);

