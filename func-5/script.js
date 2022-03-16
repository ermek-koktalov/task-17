/**
Объекты в параметрах
Аналогичным образом можно деструктуризировать параметры-объекты:

function func({year, month, day}) {
	console.log(year);  // выведет 2025
	console.log(month); // выведет 12
	console.log(day);   // выведет 31
}

func({year: 2025, month: 12, day: 31,});
 */

/*
Задача 5⋕js.Pm.Dst.Fn.5

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let color  = options.color;
	let width  = options.width;
	let height = options.height;
}

func( {color: 'red', width: 400, height: 500} );
*/

function func({ color, width, height }) {
  console.log(color);
  console.log(width);
  console.log(height);
}
func({ color: "red", width: 400, height: 500 });
