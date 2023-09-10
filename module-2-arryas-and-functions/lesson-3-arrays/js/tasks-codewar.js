/*
 * Вам будет предоставлено слово. Ваша задача — вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, верните 2 средних символа.

 * #Примеры:

 * Kata.getMiddle("test") should return "es"

 * Kata.getMiddle("testing") should return "t"

 * Kata.getMiddle("middle") should return "dd"

 * Kata.getMiddle("A") should return "A"
 * #Вход

 * Слово (строка) длины 0 < str < 1000(в некоторых тестовых примерах в javascript из-за ошибки в тестовых примерах вы можете получить немного больше 1000). Для этого вам не нужно проходить тестирование. Это сделано только для того, чтобы сообщить вам, что вам не нужно беспокоиться о тайм-ауте вашего решения.

 * #Выход

 * Средний символ(ы) слова, представленного в виде строки. 
 */

function averageSymbol(word) {
  const lengthWords = word.length;

  if (lengthWords % 2 === 1) {
    const averageIndex = Math.floor(lengthWords / 2);
    return word[averageIndex];
  } else {
    const averageIndex1 = lengthWords / 2 - 1;
    const averageIndex2 = lengthWords / 2;
    return word[averageIndex1] + word[averageIndex2];
  }
}

// Пример использования:
const word1 = 'привет';
const word2 = 'мир';
console.log(averageSymbol(word1)); // Вернет "ив"
console.log(averageSymbol(word2)); // Вернет "и"

function middleCharacter(word) {
    const wordLength = word.length;
    const middleIndex = Math.floor(wordLength / 2);
    
    return wordLength % 2 === 1
      ? word[middleIndex]  
      : word.substring(middleIndex - 1, middleIndex + 1); 
  }