/**
Другие переменные и значения по умолчанию
Можно также менять названия переменных на свои при этом задавая значения по умолчанию:

let obj = {
	month: 12,
	day:   31,
};

let {year:y = 2025, month, day} = obj;

console.log(y);     // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31
Задача 4⋕js.Pm.Dst.Ob.4

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

let с;
if (options.с !== undefined) {
	с = options.color;
} else {
	с = 'black';
}

let w = options.width;
let h = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.

 */
let options = {
  width: 400,
  height: 500,
};
let { color = "black", width: w, height: h } = options;
console.log(color, w, h);
