/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.table(friends);

// friends[1] = 'qweqrr';
// friends[3] = 12452
// console.table(friends);

// const lastElementIndex = friends.length - 1;
// console.log(lastElementIndex);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// let a = 10;
// let b = a;

// console.log(a); // 10
// console.log(b); // 10

// a = 20;

// console.log(a); // 20
// console.log(b); // 10

// const a = [1, 2, 3];
// const b = a;

// console.log('a:', a);
// console.log('b:', b);

// a[0] = 500;

// console.log('a:', a);
// console.log('b:', b);

// console.log(a === b); // true
// console.log([1, 2, 3] === [1, 2, 3]); // false

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastElementIndex = friends.length - 1;

// for (let i = 0; i <= lastElementIndex; i += 1) {
//   //   console.log(i);
//   //   console.log(friends[i]);
//   friends[i] += '-1';
// }
for (const friend of friends) {
  console.log(friend);
}

// console.table(friends)
