/* Task - 1 (Not required)
    Написати свою реалізацію функції isNaN. 
    
    Нагадування: це глобальна функція в JavaScript, яка використовується для перевірки, чи є значення NaN (Not-a-Number). 
*/

/* Task - 2
    Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
    від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. 
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
    Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

    Функція виводить інформацію
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних
*/


function checkProbabilityTheory(count) {
    let generatedNumbers = [];
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      generatedNumbers.push(randomNumber);

     if (randomNumber % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }

    console.log('Згенеровані числа:', generatedNumbers);
    console.log('Кількість згенерованих чисел: ' + count);
    console.log('Парних чисел: ' + evenCount);
    console.log('Не парних чисел: ' + oddCount);
  
    let percentageEven = (evenCount / count) * 100;
    let percentageOdd = (oddCount / count) * 100;
  
    console.log('Відсоток парних до не парних: ' + percentageEven.toFixed(2) +'% : ' + percentageOdd.toFixed(2) + '%');
  }
  checkProbabilityTheory(50);

/* Task - 3
    Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

    рядок, до якого буде додаватися символ.
    символ, який буде додаватися.
    Скільки додавати символів
    булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
*/

function pad(str, char, count, padStart) {

const diff = count - str.length;

if (diff <= 0) {
      return str;
  }

const padString = char.repeat(diff);

return padStart ? padString + str : str + padString;
}

const padStart = pad('qwerty', ':-)', 11, false);
console.log(padStart);