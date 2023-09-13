/*
 * Функция - это подпрограмма, независимая часть кода, предназначенная для многократного выполнения конкретной задачи с разными начальными значениями. Функции позволяют структурировать большие программы, уменьшают повторение и изолируют код.
 */

/*
 * Объявление функции
 */

// 1. Объявление функции multiply
// function multiply() {
// Тело функции
//   console.log('Это лог при вызове функции multiply');
// }

// 2. Вызовы функции multiply
// multiply(); // 'Это лог при вызове функции multiply'
// multiply(); // 'Это лог при вызове функции multiply'
// multiply(); // 'Это лог при вызове функции multiply'

/*
 * Объявление функции (function declaration) начинается с ключевого слова function, за которым идёт её имя - глагол отвечающий на вопрос «Что сделать?» и пара круглых скобок.

 * Тело функции заключено в фигурные скобки {} и содержит инструкции которые необходимо выполнить при её вызове. Затем, когда необходимо, функция вызывается с помощью имени и пары круглых скобок. 
 */

/*
 * Параметры и аргументы
 */

/*
 * В круглых скобках после имени функции идут параметры - перечисление данных которые функция ожидает при вызове.
 */

// Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// 2. Передача аргументов
// multiply(2, 3, 4); // Результат умножения равен 24
// multiply(5, 5, 5); // Результат умножения равен 125
// multiply(10, 8, 2); // Результат умножения равен 160

/*
 * Параметры это локальные переменные доступные только в теле функции. Они разделяются запятыми. Параметров может быть несколько, или вообще не быть, тогда записываются просто пустые круглые скобки.
 */
/*
 * При вызове функции, в круглых скобках можно передать аргументы - значения для объявленных параметров функции.
 */
/*
 * Порядок передачи аргументов должен соответствует порядку объявленых параметров: значение первого аргумента будет присвоено первому параметру, второго аргумента второму параметру и т. д. Если параметров будет больше чем аргументов, то параметрам без значений будет присвоено undefined.
 */

/*
 * Возврат значения
 */

/*
 * Оператор return используется для передачи значения из тела функции во внешний код. Когда интерпретатор встречает return, он сразу же выходит из функции (прекращает её выполнение), и возвращает указанное значение в то место кода, где функция была вызвана.
 */

// function multiply(x, y, z) {
//   console.log('Код до return выполняется как обычно');

// Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log('Этот лог никогда не выполнится, он стоит после return');
// }

// Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5); // Код до return выполняется как обычно
// console.log(result); // 30

// result = multiply(4, 8, 12); // Код до return выполняется как обычно
// console.log(result); // 384

// result = multiply(17, 6, 25); // Код до return выполняется как обычно
// console.log(result); // 2550

/*
 * Порядок выполнения кода
 */
/*
 * Когда интерпретатор встречает вызов функции (или метода), он приостанавливает выполнение текущего кода и начинает выполнять код из тела функции. После того как весь код функции будет выполнен, интерпретатор выходит из тела функции, возвращаясь в то место, откуда пришел и продолжает выполнять код, следующий после вызова функции.
 */

// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// console.log('Лог до вызова функции multiply');
// multiply(2, 3, 5); // Результат умножения равен 30
// console.log('Лог после вызова функции multiply');

// Последовательность логов в консоли
// "Лог до вызова функции multiply"
// "Результат умножения равен 30"
// "Лог после вызова функции multiply"

/*
 * Параметры по умолчанию
 */

/*
 * Иногда необходимо объявить функцию, у параметров которой будут значения отличные от undefined, даже если для них не передали аргументы. Это делается очень простым и очевидным образом, достаточно указать значение по умолчанию прямо при объявлении параметров в подписи функции. При такой записи, если для параметра не передано значение аргумента, используется значение по умолчанию.
 */

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
//   for (let i = 0; i <= countTo; i += step) {
//     console.log(i);
//   }
// }
// count(0, 9, 3); // countFrom = 0, countTo = 9, step = 3
// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

/*
 * Псевдомассив arguments
 */
/*
 * Доступ к списку всех аргументов можно получить при помощи специальной переменной arguments, которая доступна только внутри функции и хранит все аргументы как псевдомассив.
 * Псевдомассив - коллекция, со свойством length и возможностью обратиться к элементу по индексу, но отсутствием большинства методов для работы с массивом.
 */

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }
//   return total;
// }

// console.log(multiply(1, 2, 3)); // 6
// console.log(multiply(1, 2, 3, 4)); // 24
// console.log(multiply(1, 2, 3, 4, 5)); // 120

/*
 * Преобразование псевдомассива
 */

/*
 * Обычно псевдомассив необходимо преобразовать в полноценный массив, так как у псевдомассива нет методов массива, например slice() или includes(). На практике применяют несколько основных способов.
 * Используя метод Array.from(), который создаст массив из псевдомассива.
 */

function fn() {
  // В переменной args будет полноценный массив
  const args = Array.from(arguments);
}

/*
 * Используя операцию ... (rest), она позволяет собрать произвольное количество элементов, в нашем случае аргументов, в массив и сохранить его в переменную. Собираем все аргументы используя операцию rest прямо в подписи функции.
 */
function fn(...args) {
  // В переменной args будет полноценный массив
}

/*
 * Паттерн «Ранний возврат»
 */
/*
 * Оператор if...else - это основной способ создания ветвлений. Тем не менее, сложные вложенные ветвления делают код запутанным для понимания.
 */

/*
 * Создадим функцию, которая обрабатывает снятие денег с личного счета в банке. Она получает сумму для снятия и текущий баланс счета, после чего, в зависимости от условия, выполняет тот или иной блок кода.
 */

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля');
//   } else if (amount > balance) {
//     console.log('Недостаточно средств на счету');
//   } else {
//     console.log('Операция снятия средств проведена успешно');
//   }
// }

// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);

/*
 * Даже в таком простом примере есть группа вложенных условных операторов, среди которых не сразу можно выделить понять логику выполнения кода.

 * В функции может быть больше одного оператора return. Главное помнить, что выполнение функции прерывается когда интерпретатор встречает возврат, и весь код после него будет проигнорирован в текущем вызове функции. 
 */

/*
 * Паттерн «Ранний возврат» - это способ использовать возможность досрочного возврата из функции с помощью оператора return. Используя этот приём мы получаем более чистый, плоский и понятный код, который легче рефакторить.

 * Выделим все проверки условий в отдельные операторы if, после чего добавим код, идущий в теле else. В идеальном случае, должен получиться плоский список условных операторов, идущих один за другим, а в конце блок, который выполнится только в том случае, если не выполнится ни один if. 
 */

function withdraw(amount, balance) {
  // Если  условие выполняется, вызывается console.log и выход из функции. Код идущий после тела if не выполнится.
  if (amount === 0) {
    console.log('Для проведения операции введите сумму больше нуля');
    return;
  }

  // Если условие первого if не выполнилось, его тело пропускается и интерпретатор доходит до второго if.
  // Если условие выполняется, вызывается console.log и выход из функции.
  // Код идущий после тела if  не выполнится.
  if (amount > balance) {
    console.log('Недостаточно средств на счету');
    return;
  }

  // Если ни один из предыдущих if не выполнился, интерпретатор доходит до этого кода и выполняет его.
  console.log('Операция снятия средств проведена');
}

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена"

/*
 * Функциональное выражение
 */
/*
 * Функциональное выражение (function expression) - обычное объявление переменной, значение которой будет функция. Альтернативный способ объявления функции.
 */

// Объявление функции (function declaration)
// function multiply(x, y, z) {
//   console.log(`Результат умножения ${x * y * z}`);
// }

// Функциональное выражение (function expression)
// const multiply = function (x, y, z) {
//   console.log(`Результат умножения ${x * y * z}`);
// };
/*
 * Различие в том, что функциональное выражение нельзя вызвать до места его создания, только после, потому что это буквально объявление const переменной.
 */

// ❌ Ошибка! Не работает вызов до объявления
// multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// };

// ✅ Работает вызов после объявления
// multiply(4, 5, 6);

/*
 * A объявление функции можно вызвать до места её создания в коде.
 */

// ✅ Работает вызов до объявления
multiply(1, 2, 3);

function multiply(x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
}

// ✅ Работает вызов после объявления
multiply(4, 5, 6);

/*
 * Не важно какой синтаксис использовать, главное чтобы код в проекте был однородным. То есть необходимо стараться не мешать объявления функции с функциональными выражениями.
 */
