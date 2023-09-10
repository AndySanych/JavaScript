/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */
let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);

// console.log('elementWidth: ', elementWidth);

let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);

// console.log('elementHeight: ', elementHeight);

/*
 * - Метод число.toFixed(digits) - отсекает числа после запятой
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
let salary = 1300.16472;
salary = Number(salary.toFixed(2)); //  (2) - к-во символов после запятой
// salary = Number(salary); // лишняя строка, чем меньше строк кода тем лучше

// console.log(salary);
/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */

let quantity = '30';
let value = 'Эту строку невозможно привести к числу!';

// console.log(Number(quantity));
// console.log(Number(value));

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */
// console.log(Math)
// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// const result = base ** power;

// console.log(result);
/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную

// Вариант 1
// let base = prompt('Давай число!');
// base = Number(base);

// Вариант 2
// const base = Number(prompt('Давай число!'));

// console.log('число: ', base);
// console.log(typeof base);

//  2. попросить ввести степень и сохранить в переменную

// Вариант 1
// let power = prompt('Давай степень');
// power = Number(power);

// Вариант 2
// const power = Number(prompt('Давай степень!'));

// console.log('степень: ', power);
// console.log(typeof power);
//  3. Возвести введенные данные в степень и вывести

// Вариант 1
// const result = Math.pow(base, power);

// Вариант 2
// const result = base ** power;

// console.log('результат: ', result);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */

// console.log(Math.random()); // от 0 до 1

// const max = 50;
// const min = 30;
// Math.random() * (max - min) + min - вот такое выражение для определённого промежутка, в данном случае от 30 до 50

//Вариант 1
// let result = Math.random() * (max - min) + min; // целые числа с плавающей запятой
// result = Math.round(result); // только целые числа, округляет как в математике

//Вариант 2
// const result = Math.round(Math.random() * (max - min) + min); // здесь будут рандомные целые числа(в данном случае от 30 до 50)

// console.log(result);

// Получаем псевдослучайный цвет
// const colors = [
//   'tomato',
//   'teal',
//   'orange',
//   'deeppink',
//   'skyblue',
//   'green',
//   'darkblue',
// ];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];

// console.log(color);

// document.body.style.background = color;
