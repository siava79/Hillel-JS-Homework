/**
 Об'єкт в JavaScript - це складний тип даних, який дозволяє зберігати колекцію значень та функцій,
 що пов'язані між собою. Об'єкти дозволяють організовувати дані у вигляді пар ключ-значення,
 де кожен ключ - це рядок (іноді називають "властивість"),
 а значення може бути різного типу даних, включаючи інші об'єкти, масиви, числа, рядки, функції тощо.
 */

/* var user = {
    name: "John",
    sName: "Snow",
    age: 30,
}; */

//Всі властивості та методи об'єкту можна додавати через `.` (крапку).
/* console.log(user.name);
console.log(user["sName"]); */

//До речі, є ще один спосіб додавання властивостей об'єктам. Він дозволяє додавати властивості, що іменя яких містять декілька слів розділених пробілом
/* console.log(user);
 user = {'second name':'Harry'}
console.log("New data:");
console.log(user); */

//aбо
/* user["third name"] = 'Albus';
user.fourth_name = 'Severus';
console.log(user); */

//"через точку" можна не тільки звертатися до властивостей, але і "створювати" їх
/* user.age = 25;

console.log(typeof user);
console.log(user.name + " " + user.sName);
console.log("User age= " + user.age); */

//Важливою особливістю JS є можливість отримати доступ до властивості, навіть якщо такої властивості в об'єкта не існує. Наприклад:
// console.log(user.myImaginaryProperty); //Тобто доступ до відсутньої властивості є, а ось самого значення властивості — немає. Тому й отримуємо undefined.

// Ми можемо замінити властивість на інше значення
/* var user = {
    name: "John",
    sName: "Snow"
};
user.sName = 'Dou';
console.log(user.sName); */

// Якщо ми можемо додавати, змінювати нові властивості, то як нам їх видаляти
/* var user = {
    name: "John",
    sName: "Snow"
};

delete user.sName;
console.log(user.sName);
console.log(user.name); */


//Властивістю об'єкта може бути інший об'єкт!
/* var obj = {
    name: 'Test',
    lastName: 'Test',
    credentials: {
        login: "test.test",
        password: 'Test123'
    }
}
console.log(obj.name);
console.log(obj.credentials);
console.log(obj.credentials.login); */

// Дуже цікава штука обчислювані імена властивостей ----&&&&&&&&&&
/* let userType = 'admin';
let obj = {
    name: 'Test',
    lastName: 'Test',
    credentials: {
        login: "test.test",
        password: 'Test123'
    },
    [userType]:true
}
console.log(obj[userType]); */


// Властивістю об'єкта може навіть функція, точніше сказати метод
/* var group = {
    name: 'QA pro',
    students: 17,
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo: function () {
        console.log('Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor);
               //  return 'Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor; // Інший спосіб запису, для нас в цілому нічого не зміниться!

    }
}

group.teachersInfo();
//console.log(group.teachersInfo()); */

/* --------------------------------------------------------------------*/

/* Гетери та сетери */

var group = {
    name: 'QA pro',
    students: 17,
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo() {
        return 'Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor;
    },
    getName() {
        return group.name;
    },
    setName(name) {
        group.name = name;
    }
}
console.log(group.getName());
group.setName('New group name');
console.log(group.getName()); 

/* Але є також два цікавих методи! get, set - Це властивості аксесорів (accessor property). 
Вони по суті функції, які виконуються при отриманні та встановленні значення, але виглядають як звичайні властивості в зовнішньому коді. */
/* let user = {
    name: "John",
    surname: "Snow"
  }; */

/*Тепер ми хочемо додати властивість fullName, яка повинна бути "Тарас Мельник". 
Звичайно, ми не хочемо копіювати інформацію, що існує, тому ми можемо реалізувати її як аксесор: */

let user = {
    name: "John",
    surname: "Snow",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  console.log(user.fullName); 

/*Ззовні аксесор виглядає як звичайна властивість. 
В цьому і є ідея аксесорів властивостей. Ми не викликаємо user.fullname як функцію, 
ми читаємо її як звичайну властивість: гетер виконає свою роботу за кулісами. */

/* let user = {
    get fullName() {
      return `...`;
    }
  };
  
  user.fullName = "Test";  // Помилка (властивість має лише гетер)
  console.log(user.fullName ) */

//Виправимо це, додавши сетер для user.fullName:
/* let user = {
    name: "John",
    surname: "Snow",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  user.fullName = "Daenerys Targaryen"; // виконується встановлення повного ім’я із заданим значенням.
  
  console.log(user.name); 
  console.log(user.surname);  */


// Додамо set
/* const group = {
    groupName: 'QA pro',
    students: 17,
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    get studentCount() {
        return group.students;
    },
    set studentCount(count){
        group.students = count;
    }
}
console.log(group.studentCount);
group.studentCount = 44;
console.log(group.studentCount); */

/* Тобто ще раз про гетери та сетери!
let obj = {
  get propName() {
    // код, який виконується при отриманні значення obj.propName
  },
  set propName(value) {
    // код, який виконується при встановленні значення obj.propName = value
  }
};
*/

/* var user = {
    login: "John",
    sName: "Dow",
    age: 25,
    greet: function (greet1) {
        console.log(greet1  + user.login + ' ' + user.sName);
    }
}
user.greet('hello'); */
/*…Але такий код ненадійний. Якщо ми вирішимо скопіювати user в іншу змінну, 
напр. admin = user перезаписати user чимось іншим, тоді цей код отримає доступ до неправильного об’єкта. */

/*this - У такий спосіб, можна отримати доступ до властивостей об'єкта зсередини.
Наприклад, якщо ми хочемо привітатися виводячи ім'я нашого user викликаючи метод greet */
/* var user = {
    name: "John",
    sName: "Dow",
    age: 25,
    greet: function (greet) {
        console.log(greet + ', object! from ' + this.name + ' ' + this.xfxdfds + ' ' + this.age); //this.name буде звертатися безпосередньо до поля name, даного конкретного об'єкта user.
    },
    buy: function(){
        console.log("Гарного вечора та смачної вечері!!")
    }
}
user.greet('hello');
user.buy();  */

//Як дізнатися, чи є в об'єкті необхідна нам властивість?
var user = {
    login: "JohnSnow",
    age: 25,
    admin: undefined
}

/* console.log("User second name: " + user.sName);
if (user.sName === undefined) {
    console.log('Такого свойства в объекте нет');
}
 */
/* Перевірити наявність властивості в об'єкта можливо двома способами.
Перший за допомогою синтаксису "key_name" in object_name
*/

/* console.log('Перевіримо властивість "admin"');
if ("sName" in user)
    console.log("Є така властивість");
else
    console.log("немає такої властивості"); */


/* console.log('Перевіримо властивість "sName"');
if ("sName" in user)
    console.log("Є така властивість");
else
    console.log("немає такої властивості");
 */

/* Або за допомогою .hasOwnProperty(“key_name”) 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    https://masteringjs.io/tutorials/fundamentals/hasownproperty#:~:text=Both%20also%20support%20ES6%20symbols.&text=So%20what's%20the%20difference%20between,return%20false%20for%20inherited%20properties.
*/
/* console.log('Перевіримо властивість "admin"');
if (user.hasOwnProperty('admin')){
    console.log("Є така властивість");
} else
console.log("немає такої властивості"); */



//Перебір властивостей об'єкту
var objjjjj = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    7: "another",
    x: 12,
    y: 34,
    z: 45
}

//А як щодо перебору елементів?
/* for (let i = 0; i in objjjjj; i++) {
    console.log(i + ': ' + objjjjj[i]);
} */

//Для перебору всіх властивостей об’єкта використовується цикл for..in. Цей цикл відрізняється від вивченого раніше циклу for(;;)
/* for (let key in objjjjj){
    console.log(key + ': ' + objjjjj[key]);
} */

// І трошки про методи для роботи з об'єктом
// Метод keys - повертає всі ключі об'єкта

const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    print: function (){
        console.log(this.groupName);
    },
    get studentCount() {
        return this.students;
    },
    set count(count){
        this.students = count;
    }
}

let keys = Object.keys(group);
console.log(keys);

// Метод values - повертає всі значення об'єкта
const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    print: function (){
        console.log(this.groupName);
    },
    get studentCount() {
        return this.students;
    },
    set count(count){
        this.students = count;
    }
}

let values = Object.values(group);
console.log(values);

// Метод entries - повертає пари ключ значення
const group = {
    groupName: 'QA pro',
    students: 17,
    time: '7.15',
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    print: function (){
        console.log(this.groupName);
    },
    get studentCount() {
        return this.students;
    },
    set count(count){
        this.students = count;
    }
}

let values = Object.entries(group);
console.log(values);
