/**
Другие имена переменных
Можно сделать так, чтобы имена переменных не совпадали с именами ключей объекта:

let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year: y, month: m, day: d} = obj;

console.log(y); // выведет 2025
console.log(m); // выведет 12
console.log(d); // выведет 31
Задача 2⋕js.Pm.Dst.Ob.2

В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let c = options.color;
let w = options.width;
let h = options.height;
Переделайте этот код через деструктуризацию согласно изученной теории.

 */
let options = {
  color: "red",
  width: 400,
  height: 500,
};
let { color: c, width: w, height: h } = options;
console.log(c, w, h);
