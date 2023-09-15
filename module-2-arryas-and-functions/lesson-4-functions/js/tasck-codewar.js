/*
 * Завершите функцию, которая принимает строковый параметр и меняет местами каждое слово в строке. Все пробелы в строке должны быть сохранены.

 * Примеры
 * "This is an example!" ==> "sihT si na !elpmaxe"
 * "double  spaces"      ==> "elbuod  secaps" 
 */

function reverseWords(str) {
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}
// console.log(reverseWords('This is an example!'));
// console.log(reverseWords('double  spaces'));

/*
 * Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (истина означает наличие).

 *Например,

 *[true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true ,false, false, true,  true] 

 * Правильный ответ будет 17.

 * Подсказка: не забудьте проверить наличие неверных значений, таких как null/undefined 
 */

function countSheeps(arrayOfSheep) {
  if (!Array.isArray(arrayOfSheep)) {
    // Check for bad input values like null/undefined
    return 0;
  }

  //   let count = 0;
  //   for (let i = 0; i < arrayOfSheep.length; i += 1) {
  //     if (arrayOfSheep[i] === true) {
  //       count += arrayOfSheep[i];
  //     }
  //   }

  //   return count;

  return arrayOfSheep.filter(Boolean).length;
}

// Example usage:
const sheepArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

const sheepCount = countSheeps(sheepArray);
// console.log(sheepCount); // Output: 17

/*
 * Дезоксирибонуклеиновая кислота (ДНК) — это химическое вещество, находящееся в ядре клеток и несущее «инструкции» по развитию и функционированию живых организмов.

 * В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». Ваша функция получает одну сторону ДНК (строку, кроме Haskell); вам нужно вернуть другую дополнительную сторону. Цепь ДНК никогда не бывает пустой или ДНК вообще не существует (опять же, за исключением Haskell).

 *Пример: ( вход --> вывод )
 * "ATTGC" --> "TAACG"
 * "GTAT" --> "CATA" 
 */

// function DNAStrand(dna) {
//   // Create an object to store the complements
//   const complements = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   };

//   // Use the map function to replace each symbol with its complement
//   const complementaryStrand = dna
//     .split('')
//     .map(symbol => complements[symbol])
//     .join('');

//   return complementaryStrand;
// }

// // Example usage:
// const input1 = 'ATTGC';
// const input2 = 'GTAT';

// const output1 = DNAStrand(input1);
// const output2 = DNAStrand(input2);

// console.log(output1); // Output: "TAACG"
// console.log(output2); // Output: "CATA"

/*
 * Этот вариант использует метод replace с регулярным выражением /. для замены каждого символа в строке согласно его комплементу.
 */
function DNAStrand(dna) {
  // Create a function to map each DNA symbol to its complement
  function getComplement(symbol) {
    switch (symbol) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      default:
        return symbol; // If the symbol is not 'A', 'T', 'C', or 'G', return it as is
    }
  }

  // Use the replace method with a regular expression to replace each symbol
  // in the DNA string with its complement using the getComplement function
  const complementaryStrand = dna.replace(/./g, getComplement);

  return complementaryStrand;
}

// Example usage:
const input1 = 'ATTGC';
const input2 = 'GTAT';

const output1 = DNAStrand(input1);
const output2 = DNAStrand(input2);

// console.log(output1); // Output: "TAACG"
// console.log(output2); // Output: "CATA"

/*
 * Суммируйте все числа данного массива ( cq. list ), кроме самого высокого и самого низкого элемента (по значению, а не по индексу!).

 * Самый высокий или самый низкий элемент соответственно представляет собой один элемент на каждом краю, даже если их несколько с одинаковым значением.

 * Помните о проверке ввода.

 * Пример
 * { 6, 2, 1, 8, 10 } => 16
 * { 1, 1, 11, 2, 3 } => 6
 * Проверка ввода
 * Если вместо массива задано пустое значение ( null, и т None. д.) или данный массив представляет собой пустой список или список, содержащий только элемент, return .Nothing10 
 */

// function sumArray(array) {
//   // Check for empty or invalid input
//   if (!Array.isArray(array) || array.length <= 2) {
//     return 0;
//   }
//   console.log(array);

//   // Find the highest and lowest values in the array
//   const highest = Math.max(...array);
//   console.log('highest: ', highest);
//   const lowest = Math.min(...array);
//   console.log('lowest: ', lowest)

//   // Initialize variables to store the sum and count of excluded elements
//   let sum = 0;
//   let excludedCount = 0;

//   // Calculate the sum and count of excluded elements
//   for (let num of array) {
//     if (num !== highest && num !== lowest) {
//       sum += num;
//     } else {
//       excludedCount++;
//       console.log('excludedCount', excludedCount)
//     }
//   }

//   // Adjust the sum based on the number of excluded elements
//   if (excludedCount > 2) {
//     // If there are two or more excluded elements, add them back to the sum
//     sum += highest + lowest;
//   }

//   return sum;
// }

// // Example usage:
// const array1 = [6, 2, 1, 8, 10];
// const array2 = [1, 1, 11, 2, 3];
// const array3 = null; // Invalid input

// const result1 = sumArray(array1);
// const result2 = sumArray(array2);
// const result3 = sumArray(array3);

// console.log(result1); // Output: 17 (corrected result)
// console.log(result2); // Output: 6
// console.log(result3); // Output: 0 (invalid input)

// console.log(sumArray([])); // 0
// console.log(sumArray([3])); // 0
// console.log(sumArray([3, 5])); // 0
// console.log(sumArray([6, 2, 1, 8, 10])); // 16
// console.log(sumArray([0, 1, 6, 10, 10])); // 17
// console.log(sumArray([-6, -20, -1, -10, -12])); // 28
// console.log(sumArray([-6, 20, -1, 10, -12])); // 3

function sumArray(arr) {
  // Проверка на валидность входных данных
  if (!arr || arr.length <= 1) {
    return 0;
  }

  // Находим максимальное и минимальное значения
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
    sum += num;
  }

  // Вычитаем максимальное и минимальное значения из суммы
  return sum - max - min;
}

// sumArray([0, 1, 6, 10, 10]);
// Test cases
console.log(sumArray([6, 2, 1, 8, 10])); // Output: 16
console.log(sumArray([1, 1, 11, 2, 3])); // Output: 6
console.log(sumArray([])); // Output: 0
console.log(sumArray([5])); // Output: 0
console.log(sumArray(null)); // Output: 0
console.log(sumArray([3, 5])); // Output: 0
console.log(sumArray([0, 1, 6, 10, 10]));

/*
 * Создайте функцию, которая выдает персонализированное приветствие. Эта функция принимает два параметра: nameи owner.

 * Используйте условные выражения, чтобы вернуть правильное сообщение:

 * случай	возвращаться
 * имя равно владельцу	'Привет босс'
 * в противном случае	«Привет, гость» 
 */

// function greet(name, owner) {

//   return name === owner ? 'Hello boss' : 'Hello guest';
// }

function greet(name, owner) {
  return `Hello ${name == owner ? 'boss' : 'guest'}`;
}

// Примеры использования функции
console.log(greet('John', 'John')); // Вывод: 'Hello boss'
console.log(greet('Alice', 'John')); // Вывод: 'Hello guest'

/*
 * Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (также строкой).
 */
// function solution(str, ending) {
//   return str.includes(ending, str.length - ending.length);
// }

function solution(str, ending) {
  return str.endsWith(ending);
}

// Тестовые примеры
// console.log(solution('abcdef', 'ef')); // Вывод: true
// console.log(solution('abcdef', 'de')); // Вывод: false
// console.log(solution('abc', 'abc')); // Вывод: true
// console.log(solution('abc', 'abcd')); // Вывод: false
// console.log(solution('samurai', 'ra')); // Вывод: false


/*
 * Проверьте, содержит ли строка одинаковое количество символов «x» и «o». Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любой символ.

 * Примеры ввода/вывода:

 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 */
function XO(str) {
  // Initialize counters for 'x' and 'o'
  let xCount = 0;
  let oCount = 0;

  // Convert the string to lowercase for case insensitivity
  const lowerCaseStr = str.toLowerCase();

  // Iterate through the characters in the string
  for (let char of lowerCaseStr) {
    if (char === 'x') {
      xCount += 1;
      console.log('xCount: ', xCount);
    } else if (char === 'o') {
      oCount += 1;
      console.log('oCount: ', oCount);
    }
  }

  // Compare the counts of 'x' and 'o' and return true if they are equal
  return xCount === oCount;
}

// Test cases
console.log(XO('ooxx')); // Output: true
console.log(XO('xooxx')); // Output: false
console.log(XO('ooxXm')); // Output: true
console.log(XO('zpzpzpp')); // Output: true
console.log(XO('zzoo')); // Output: false
