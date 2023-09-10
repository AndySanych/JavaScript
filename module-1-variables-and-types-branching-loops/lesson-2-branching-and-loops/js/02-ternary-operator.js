/*
 * Тернарный оператор
 */

// <условие> ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно>

// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type);

/*
 * Выполним рефакторинг заменив if...else тернарным оператором.
 */

const age = 20;
const type = age >= 18 ? 'adult' : 'child';

console.log(type);

/*
 * Запишем операцию поиска большего числа.
 */

const num1 = 5;
const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber); // 10

/*
 * Выполним рефакторинг заменив if...else тернарным оператором.
 */

const biggerNumber = num1 > num2 ? num1 : num2;

console.log(biggerNumber); // 10


/*
 * Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Его использование для описания сложных ветвлений - плохая практика (антипаттерн). 
 */