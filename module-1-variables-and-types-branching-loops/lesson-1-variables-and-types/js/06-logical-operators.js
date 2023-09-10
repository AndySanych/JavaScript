/*
 *  Приведение к булю на примере Boolean(value)
 *Запомните 6 ложных (falsy) значений, приводящихся к false в логическом преобразовании: 0, NaN, null, undefined, пустая строка и false. Абсолютно все остальное приводится к true.
 */

// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(false));

// console.log(Boolean(1));
// console.log(Boolean(-15));
// console.log(Boolean('false'));
// console.log(Boolean(' '));

/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(2 && 6 && 7 && 'hello');
// console.log(2 && false && 7 && 'hello');

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(false || 12 || 5 || 10 || 15);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

// console.log(!false);
// console.log(!5);

/*
 * Практика
 */

/*
 * #1 Segment
 */

/*
 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */

const x1 = 10;
const x2 = 30;
const number = 50;

console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
console.log(`Число ${number} попадает в отрезок от ${x2}?`, number > x2);

const res1 = number > x1 && number < x2;

// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true

console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, res1);

const res2 = number < x1 || number > x2;

// 150 < 10 || 150 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false || false
// false

console.log(`Число ${number} попадает в отрезок до ${x1} от ${x2}?`, res2);

/*
 * #2 Chat
 */

/*
 * Напиши скрипт который проверяет возможность открыть чат с пользователем.
 * Для этого пользователь должен быть:
 * - другом
 * - онлайн
 * - без режима не беспокоить
 */

const isFriend = true;
const isOnline = true;
const isDnd = true;

const canOpenChat = isFriend && isOnline && isDnd;

console.log('Можно открыть чат?', canOpenChat);

/*
 * #3 Subscription
 */

/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

const sub = 'Pro';

// если пользователь pro или пользователь vip тогда есть доступ

const canAccessContent = sub.toLowerCase() === 'pro' || sub.toLowerCase() === 'vip';

console.log('Есть доступ к контенту?', canAccessContent);
