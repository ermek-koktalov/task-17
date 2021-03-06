/*
     
Меньше элементов
Если в массиве меньше элементов, чем переменных, то в "лишние" переменные запишется undefined:

let arr = [2025, 12];
let [year, month, day] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет undefined
Пропуск значений
Если в массиве больше элементов, чем переменных - лишние элементы никуда не запишутся и ничего страшного не произойдет. Для примера добавим в наш массив еще часы, минуты и секунды - от этого ничего не поменяется:

let arr = [2025, 12, 31, 23, 59, 59];
let [year, month, day] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31
Остаток
Если в массиве больше элементов, чем переменных, при необходимости лишние элементы можно записать в массив с помощью оператора rest:

let arr = [2025, 12, 31, 23, 59, 59];
let [year, month, day, ...time] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

console.log(time);   // выведет [23, 59, 59]
Задача 4⋕js.Pm.Dst.Ar.4

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let name    = arr[0];
let surname = arr[1];

let info = arr.slice(2); // все элементы со второго до конца массива
Переделайте этот код через деструктуризацию согласно изученной теории.
      */

let arr = ["Иван", "Иванов", "отдел разработки", "программист", 2000];
let [name, surname, ...info] = arr;
console.log(info);
