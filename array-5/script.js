/*
     
Значение по умолчанию
Для переменных можно указывать значения по умолчанию. В этом случае, если переменной не хватит элемента массива - возьмется значение по умолчанию. В следующем примере переменной day по умолчанию указано значение 1:

let arr = [2025, 12];
let [year, month, day = 1] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 1
А вот если для переменной day будет значение в массиве - значение по умолчанию будет проигнорировано:

let arr = [2025, 12, 31];
let [year, month, day = 1] = arr;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31
Задача 5⋕js.Pm.Dst.Ar.5

В следующем коде части массива записываются в соответствующие переменные:

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];

let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'джуниор';
}
Переделайте этот код через деструктуризацию согласно изученной теории.
      */

let arr = ["Иван", "Иванов", "отдел разработки", "программист"];
let [name, surname, department, position = "джуниор"] = arr;
console.log(position);