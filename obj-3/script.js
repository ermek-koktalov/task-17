/**
Значения по умолчанию
При деструктуризации объектов можно также указывать значения по умолчанию. При этом, в отличии от деструктуризации массивов, необязательной может быть любая переменная - не обязательно с конца массива. Давайте, например, укажем значение по умолчанию для переменной year:

let obj = {
	month: 12,
	day:   31,
};

let {year = 2025, month, day} = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31
Задача 3⋕js.Pm.Dst.Ob.3

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}

let width  = options.width;
let height = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.

 */
let options = {
  width: 400,
  height: 500,
};
let { color = "black", width, height } = options;
console.log(color);
