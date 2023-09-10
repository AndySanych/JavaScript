/*
 * Итерация по массиву
 */

/*
 * Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.
 */

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// console.log(clients.length - 1);
// console.log(clients[2]);

/*
 * Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс это значние счётчика цикла от 0 и до последнего индекса массива, то есть меньше, но не равно его длине.
 */

/*
 * Цикл for...of
 */

// for (const variable of iterable) {
// тело цикла
// }

/*
 * - variable — переменная которая будет хранить значение элемента на каждой итерации.
 * - iterable — коллекция, которая имеет перечислимые элементы, например массив.
 */

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

/*
 * Операторы break и continue
 */

/*
 * Будем искать имя клиента в массиве имен, если нашли - прервем цикл, так как нет смысла искать дальше, имена у нас уникальные.
 */

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   console.log(client);

//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message);

/*
 * Можно изначально задать message значение неудачи поиска, а в цикле перезаписать его на успех, если нашли имя. Но break все равно пригодится, так как если у нас массив из 10000 клиентов, а нужный нам стоит на позиции 2, то нет абсолютно никакого смысла перебирать оставшиеся 9998 элементов.
 */

const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message = 'Клиента с таким именем нету в базе данных!';

for (const client of clients) {
//   console.log(client);
  if (client === clientNameToFind) {
    message = 'Клиент с таким именем есть в базе данных!';
    break;
  }
  // Если не совпадает, то на этой итерации ничего не делаем
}

// console.log(message);

/*
 *  Используем цикл для вывода только чисел больше определенного значения.
 */

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается и управление передаётся на следующую итерацию.
for (let i = 0; i < numbers.length; i += 1) {
    // console.log(numbers)
  if (numbers[i] < threshold) {
    // console.log(numbers[i])
    continue;
  }
  console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
}
