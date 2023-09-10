/*
 * Создание
 */

/*
 * Массив объявляется открывающей и закрывающей квадратной скобками [] - литералом массива. Внутри скобок каждый элемент массива разделяется запятой.
 */

// const clients = ['Mango', 'Poly', 'Ajax'];

/*
 * Доступ к элементам
 */

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);
// console.log(typeof clients);

/*
 * Переопределение
 */

// const clients = ['Mango', 'Poly', 'Ajax'];

// clients[0] = 'Kiwi';
// clients[1] = 'Pango';
// console.log(clients);

/*
 * Длина массива
 */

// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients.length); // 3

/*
 * Индекс последнего элемента
 */

// длина_массива - 1

const clients = ['Mango', 'Poly', 'Ajax'];
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // Ajax
