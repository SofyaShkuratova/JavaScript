// 3. Переписать в тернарный оператор следующий код:
// const age = +prompt(‘enter your age’);
// if (age < 10) {
// 	console.log(‘hi!’);
// } else if (age <  20) {
// 	console.log(‘hello!’);
// } else if (age < 50) {
// 	console.log(‘good day’);
// } else {
// 	console.log(‘ALOHA!’);
// }
const age = +prompt(`enter your age`);

console.log (
    age < 10
    ? `Hi`
    : age < 20
    ? `Hello`
    : age < 50
    ? `Good day`
    : `ALOHA`
);