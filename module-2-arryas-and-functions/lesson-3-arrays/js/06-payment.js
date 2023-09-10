/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// 2 сделать переменную total до цикла
let total = 0;
// 1 перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
// 3 каждый элемент приплюслвать к total
//   total += cart[i];
// }

// for (const value of cart) {
//   total += value;
// }
// console.log('total: ', total);

// Добавить такс

for (let i = 0; i < cart.length; i += 1) {
  cart[i] = Math.round(cart[i] * 1.1);
  total+=cart[i]
}
console.log(cart)
console.log('total: ', total)