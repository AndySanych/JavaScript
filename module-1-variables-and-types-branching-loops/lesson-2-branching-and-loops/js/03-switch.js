/*
 * Область применения switch ограничена задачами с одним общим вопросом (что сравнивать) и множеством вариантов ответов (с чем сравнивать).
 */

// switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;

//   default:
//     инструкции;
// }

/*
 * Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке else для инструкции if...else. Для этого после всех блоков case добавляется блок default. Оператор break после блока default не нужен, так как это и так последнее что будет выполнено в switch и управление будет передано коду за ним.
 */

let cost;
const subscription = 'pro';

switch (subscription) {
  case 'free':
    cost = 0;
    break;
  case 'pro':
    cost = 100;
    break;
  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

// console.log(cost); // 100

/*
 * Если оператор break будет отсутствовать, то после того как выполнится какое-то условие case, все последующие за ним блоки кода будут выполняться один за другим, что может привести к нежелательным последствиям при неверном применении.
 */

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

const stars = 1;
let price;

/*
 * Вариант 1
 */

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }
// console.log(price);

/*
 * Вариант 2
 */

switch (stars) {
  case 1:
    price = 20;
    break;

  case 2:
    price = 30;
    break;

  case 3:
    price = 50;
    break;

  case 4:
    price = 70;
    break;

  case 5:
    price = 120;
    break;

  default:
  // console.log('Такого кол-ва звезд нет');
}

// console.log(price);

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 50;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

//  1. сделать переменные

const option = 1;
let message = '';

// 2. сделать switch 1 2 3
// 3. в каждом кейсе записать в message строку
switch (option) {
  case 1:
    message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе.';
    break;

  case 2:
    message = 'Курьер доставит заказ завтра с 9:00 до 18:00.';
    break;

  case 3:
    message = 'Посылка будет отправлена сегодня.';
    break;

  default:
    message = 'Вам перезвонит менеджер.';
}

console.log(message);