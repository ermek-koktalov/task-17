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
Задача 6⋕js.Pm.Dst.Fn.6

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let width  = options.width;
	let height = options.height;
	
	let color;
	if (options.color !== undefined) {
		color = options.color;
	} else {
		color = 'black';
	}
}

func( {color: 'red', width: 400, height: 500} );
*/

function func({ color = "black", width, height }) {
  console.log(color);
  console.log(width);
  console.log(height);
}
func({ color: "red", width: 400, height: 500 });
