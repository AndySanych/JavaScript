/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
  //   console.log(letter);

  //   if (letter === letter.toLowerCase()) {
  //     console.log('Эта буква в нижнем регистре!!! - ', letter);

  //     invertedString += letter.toUpperCase();
  //   } else {
  //     console.log('Эта буква в верхнем регистре!!! - ', letter);
  //     invertedString += letter.toLocaleLowerCase();
  //   }
//   const isEqual = letter === letter.toLowerCase();

//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString : ', invertedString);

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();
    
    invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
  }

  return invertedString
};

console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX
