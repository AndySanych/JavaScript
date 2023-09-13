/*
 * Область видимости (scope) - механизм который определяет доступность переменных в исполняемом коде.
 */

/*
 * Цепочка областей видимости (scope chain) - области видимости образуют иерархию, так что дочерние области имеют доступ к переменным из родительских областей, но не наоборот.
 */

/*
 * Глобальная область видимости
 */

/*
 * Переменные, объявленные на самом верхнем уровне, то есть вне любых конструкций вроде if, while, for и функций, находятся в глобальной области видимости и доступны везде после их объявления.
 */

const globalValue = 10;

// console.log('globalValue:', globalValue); // globalValue: 10

function foo() {
  console.log('foo:', globalValue); // foo: 10
}
// foo();

for (let i = 0; i < 5; i += 1) {
  //   console.log('for:', globalValue); // for: 10

  if (i === 0) {
    // console.log('if:', globalValue); // if: 10
  }
}

/*
 * Блочная область видимости
 */
/*
 *  Переменные, объявленные внутри инструкций if, for, функций и других блоков кода обрамлённых фигурными скобками {}, находятся в блочной области видимости и доступны только внутри этого блока кода или вложенных в него.
 */

function fn() {
  const blockScopedVariable = 20;
  console.log('fn:', blockScopedVariable);

  for (let i = 0; i < 5; i += 1) {
    console.log('for:', blockScopedVariable);

    if (i === 2) {
      console.log('if:', blockScopedVariable);
    }
  }
}
// fn();

// ❌ Ошибка! Переменная a не доступна в глобальной области видимости
// console.log(blockScopedVariable); // blockScopedVariable is not defined at 02-scope.js:56:13

for (let i = 0; i < 5; i += 1) {
  const blockA = 5;
  //   console.log('blockA:', blockA); // blockA: 5

  if (i === 2) {
    const blockB = 15;

    // console.log('blockA in a if:', blockA); // blockA in a if: 5
    // console.log('blockB in a if:', blockB); // blockB in a if: 15
  }

  if (i === 3) {
    // console.log('blockA in a if:', blockA); // blockA in a if: 5
    // ❌ Ошибка! Переменная b не доступна в этой области видимости
    // console.log('blockB in a if:', blockB); // blockB is not defined at 02-scope.js:73:36
  }
}

/*
 * Поиск по цепочке областей видимости
 */

/*
 * Интерпретатор пытается сначала найти переменную в той области видимости, в которой к ней обратились. Если такой переменной в локальной области видимости нет, то он выходит наружу, на один уровень за попытку, пока не найдёт значение или не дойдет до самой верхней области видимости (глобальной) и поймет, что переменную с таким идентификатором невозможно найти, так как ее просто нет, тогда будет ошибка о том, что переменная не объявлена.
 */

const globalA = 10;

function fn1() {
  const blockB = 20;

  for (let i = 0; i < 5; i += 1) {
    const blockC = 30;

    if (i === 3) {
      const blockD = 40;
      console.log('globalA:', globalA); // globalA: 10
      console.log('blockB:', blockB); // blockB: 20
      console.log('blockC:', blockC); // blockC: 30
      console.log('blockD:', blockD); // blockD: 40
    }
  }
}
fn1();
