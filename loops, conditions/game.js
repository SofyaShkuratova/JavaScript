// 2. Написать игру «камень, ножницы, бумага»
// Первый игрок вводит слово «rock»,  «scissors» или «paper»
// После этого второй игрок делает то же самое
// Вывести в консоль кто победил: игрок1 или игрок2 согласно правилам игры

const a = prompt(`Choose rock, scissors or paper`);
const b = prompt(`Choose rock, scissors or paper`);

if (isNaN(a) && isNaN(b) && a!== null && b!==null) {
    if (a === 'rock' && b === 'rock' || a === 'scissors' && b === 'scissors' || a === 'paper' && b === 'paper') {
        console.log(`draw!`)
    } else if (a === 'rock' && b === 'paper' || a === 'paper' && b === 'rock') {
        console.log(`Paper is win!`);
    } else if (a === 'scissors' && b === 'paper' || a === 'paper' && b === 'scissors') {
        console.log(`Scissors is win!`);
    } else if (a === 'scissors' && b === 'rock' || a === 'rock' && b === 'scissors') {
        console.log(`Rock is win!`);
    }
} else if(a === null || b === null) {
    console.log(`Write something!`)
} else {
    console.log(`incorrectly answer`)
}