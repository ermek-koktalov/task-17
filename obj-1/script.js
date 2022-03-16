/**
 Деструктуризация объектов в JavaScript
Кроме массивов можно также делать и деструктуризацию объектов. Пусть, к примеру, у нас есть следующий объект:

let obj = {
	year:  2025,
	month: 12,
	day:   31,
};
Давайте выполним его деструктуризацию:

let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year, month, day} = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31
При деструктуризации объектов имена переменных должны совпадать в ключами объекта, порядок переменных и элементов в объекте не имеет значения

Задача 1⋕js.Pm.Dst.Ob.1

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let color  = options.color;
let width  = options.width;
let height = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.

 */
let options = {
  color: "red",
  width: 400,
  height: 500,
};
let { color, width, height } = options;
console.log(color, width, height);
