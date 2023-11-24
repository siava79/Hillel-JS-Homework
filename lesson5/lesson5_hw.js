/* Task - 1 
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище). 

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
- Напишіть метод getFullName(), який виводитиме повне ім'я. 
*/

const person = {
   year: '1955',
   firstName:'Bill',
   lastName: 'Gates',

   getFullName() {
      return this.firstName + ' ' + this.lastName
   },

   get personYear (){
      return this.year;
   },
   get personFirstName () {
       return this.firstName;
   },
   get personLastName(){
      return this.lastName;
   }
   
}
const keysToInclude = ['year', 'firstName', 'lastName'];
const entries = Object.entries(person).filter(([key]) => keysToInclude.includes(key));
console.log(entries);
console.log('Full Name:', person.getFullName());




/* Task - 2 (Not required)
   Створіть функцію createRobot, яка створить об'єкт "robot" з об'єкта "person", 
   додавши додаткову властивість до об'єкта "person". 
   "Robot" повинен мати властивість "batteryEnergy" (наприклад, batteryEnergy = 50)

 * ПРИМІТКА: використовуйте метод присвоєння об'єктів (Object.assign)
*/


/* Task - 3 
   Створіть isARobot, який буде перевіряти, чи є об'єкт роботом
   перевіркою наявності у об'єкта властивості (batteryEnergy)
*/
function isARobot(obj) {
   if (obj.hasOwnProperty('batteryEnergy')) {
     if (obj.batteryEnergy === true) {
       return 'Да, ты действительно робот';
     } else {
       return 'Извините, вы не робот';
     }
   } 
 }
   const myObject = {
      batteryEnergy: true 
 };
 
 console.log(isARobot(myObject));

/* Task - 4 (Not required)

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

Завдання:
- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price
*/