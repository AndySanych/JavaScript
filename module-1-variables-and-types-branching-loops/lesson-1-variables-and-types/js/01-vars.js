/*
 * - Переменные и типы примитивов
 * - const и let
 * - Логирование с методом console.log()
 * - Уникальность идентификатора
 */

const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = 'Добро пожаловать!';
const isOpen = true;
const shouldConfirm = false;

console.log('Age:', age)
console.log('Цена:', totalPrice)
console.log(userName, '- это имя пользователя')
console.log('Message:', message)
console.log(isOpen)
console.log(shouldConfirm)


/*
 * * - Оператор typeof
 */

const type = typeof isOpen
console.log(type)

/*
 * - Как window.alert() блокирует интерпретацию
 */

// console.log('До')
// alert('Hello World!')
// console.log('После')