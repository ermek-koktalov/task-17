/**
Деструктуризация параметров функций в JavaScript
Деструктуризация имеет еще одну очень важную область применения - передача параметров функций. Суть в следующем: если функция принимает в качестве параметра массив, мы можем задать прямо в объявлении функции то, как деструктуризировать этот массив.

Давайте посмотрим на примере. Пусть у нас есть функция, параметром принимающая массив с годом, месяцем и днем:

func([2025, 12, 31]);
Давайте прямо в параметре функции укажем, на какие переменные следует разбивать этот массив:

function func([year, month, day]) {
	console.log(year);  // выведет 2025
	console.log(month); // выведет 12
	console.log(day);   // выведет 31
}
Приведенную выше конструкцию следует рассматривать как один параметр функции. Можно при желании добавить еще параметры:

func('str1', [2025, 12, 31], 'str2');

function func(param1, [year, month, day], param2) {
	console.log(param1); // выведет 'str1'
	
	console.log(year);   // выведет 2025
	console.log(month);  // выведет 12
	console.log(day);    // выведет 31
	
	console.log(param2); // выведет 'str2'
}
А в следующем примере первым и вторым параметром функции передаются массивы и мы деструктуризируем оба из них:

func([2025, 12, 31], [2026, 11, 30]);

function func([year1, month1, day1], [year2, month2, day2]) {
	console.log(year1);  // выведет 2025
	console.log(month1); // выведет 12
	console.log(day1);   // выведет 31
	
	console.log(year2);  // выведет 2026
	console.log(month2); // выведет 11
	console.log(day2);   // выведет 30
}
 */

/*
Задача 3⋕js.Pm.Dst.Fn.3

Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	
	let position;
	if (arr[3] !== undefined) {
		position = arr[3];
	} else {
		position = 'джуниор';
	}
}

func( ['Иван', 'Иванов', 'отдел разработки'] );
*/

func(["Иван", "Иванов", "отдел разработки"]);
function func([name, surname, department, position = "джуниор"]) {
  console.log(name);
  console.log(surname);
  console.log(department);
  console.log(position);
}
