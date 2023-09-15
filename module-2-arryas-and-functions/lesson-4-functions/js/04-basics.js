// const add = function (x, y) {
//   console.log('x:', x);
//   console.log('y:', y);
//   console.log('Выполняется функция add');

//   return x + y;
// };

// const r1 = add(5, 3);
// console.log('r1: ', r1);

// const r2 = add(10, 15);
// console.log('r2: ', r2);

// const r3 = add(30, 50);
// console.log('r3: ', r3);

const fn = function (value) {
  console.log(1);

  console.log(2);

  if (value < 50) {
    return 'Меньше чем 50';
  }
  return 'Больше чем 50';
};

// console.log('Результат функции: ', fn(10));
// console.log('Результат функции: ', fn(100));

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */

const fnA = function () {
  console.log('Выполняется функция А');

  fnB();
};

const fnB = function () {
  console.log('Выполняется функция В');

  fnC();
};

const fnC = function () {
  console.log('Выполняется функция С');

//   console.log(value);
};

// console.log('Лог перед вызовом функции A');
fnA();
// console.log('Лог после вызова функции A');

// console.log('Лог перед вызовом функции B');
// fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
// fnC();
// console.log('Лог после вызова функции C');
