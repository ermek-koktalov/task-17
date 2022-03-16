/*
     
  Пропуск значений
Можно начать записывать в переменные не сначала массива, а пропустить некоторые значения. Давайте, к примеру, пропустим год, а месяц и день запишем в переменные. Для этого при указании переменных перед первой переменной поставим запятую, вот так: [, month, day]:

let arr = [2025, 12, 31];
let [, month, day] = arr;

console.log(month); // выведет 12
console.log(day);   // выведет 31
Можно пропустить не одно значение, а несколько:

let arr = [2025, 12, 31];
let [,, day] = arr;

console.log(day);   // выведет 31
Задача 3⋕js.Pm.Dst.Ar.3

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let department = arr[2];
let position   = arr[3];
Переделайте этот код через деструктуризацию согласно изученной теории.
      */

let arr = ["Иван", "Иванов", "отдел разработки", "программист", 2000];
let [, , department, position] = arr;
console.log(department);
