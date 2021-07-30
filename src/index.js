// const obj = {
//   classicFoo() {
//     setTimeout(function () {
//       console.log(`${this} in object scope`); // window
//     }, 1000);
//   },
//   arrowFoo() {
//     setTimeout(() => {
//       console.log(`${this} in object scope`); // obj
//     }, 1000);
//   },
// };

// setTimeout(function () {
//   console.log(`${this} in global scope`); // window
// }, 1000);

// setTimeout(() => {
//   console.log(`${this} in global scope`); //window
// }, 1000);

// obj.classicFoo(); // window
// obj.arrowFoo(); // obj
/*
setTimeout и setInterval - это методы глобального объекта window, именно поэтому мы не вызываем их как window.setTimeout().

Необходимо быть внимательными с this внутри функций-интервалов. При классической callback-функции, this получит ссылку на window, а при стрелочной функции this будет из внешней области видимости.
*/
// ===================================================================================

/*
Создание даты очень просто. Просто создайте новый экземпляр встроенного класса Date
*/
// const date = new Date();
// console.log(date); // Mon Mar 19 2018 16:51:32 GMT+0200 (FLE Standard Time)

// Datestring
// const date = new Date('March 11, 1977');
// console.log(date); // Mon Mar 19 2018 16:51:32 GMT+0200 (FLE Standard Time)

//7 аргументов --  new Date(year, month, date, hours, minutes, seconds, ms)

// const date = new Date(2000, 5, 8, 12, 0, 0, 0);
// Индексы месяцев начинаются с 0, поэтому 5-й месяц это июль.
// console.log(date); // Thu Jun 08 2000 12:00:00 GMT+0300 (FLE Daylight Time)
// ===========================================================================

// Unix время
// const date = new Date(1000000);
// console.log(date); // Thu Jan 01 1970 02:16:40 GMT+0200 (FLE Standard Time)

/*Чтобы увидеть число миллисекунд от этой даты до текущего момента, используется статический метод Date.now()
 */
// const date = Date.now();
// console.log(date); // 1521471595501

// ================== Геттеры =============================
// Вот все методы получения информации из объекта Date:
// const date = new Date();
// console.log('Date: ' + date);

// возвращает день месяца от 1 до 31
// console.log('getDate(): ' + date.getDate());

// возвращает день недели от 0 до 6
// console.log('getDay(): ' + date.getDay());

// возвращает месяц от 0 до 11
// console.log('getMonth(): ' + date.getMonth());

// возвращает год из 4 цифр
// console.log('getFullYear(): ' + date.getFullYear());

// возвращает час
// console.log('getHours(): ' + date.getHours());

// возвращает минуты
// console.log('getMinutes(): ' + date.getMinutes());

// возвращает секунды
// console.log('getSeconds(): ' + date.getSeconds());

// возвращает миллисекунды
// console.log('getMilliseconds(): ' + date.getMilliseconds());

// возвращает кол-во миллисекунд прошедших со старта эпохи Unix
// console.log('getTime(): ' + date.getTime());

// ============= Сеттеры ==========================
// Все, что можно прочитать можно записать, методы для записи начинаются с set*.

// Для установки даты существует 2 способа. Установим 1500000000000мс
// с начала эры Unix с помощью конструктора
// const date = new Date(2017, 6, 14, 5, 40, 0, 0);

// Проверим
// console.log(`2017, 6, 14, 5, 40 соответствует ${date.getTime()}`);
// "2017, 6, 14, 5, 40 соответствует 1500000000000"

/* С помощью методов set */
// Создадим новый объект с текущей датой
// const secondDate = new Date();

// Изменим год и в нем же месяц и день месяца
// secondDate.setFullYear(2017, 6, 14);
// Изменим час и в нем же минуты, секунды и милисекунды
// secondDate.setHours(5, 40, 0, 0);

// Проверим
// console.log(`2017, 6, 14, 5, 40 соответствует ${secondDate.getTime()}`);
// "2017, 6, 14, 5, 40 соотвествует 1500000000000"

// ====== Форматирование и вывод дат ============================
// let date = new Date();

// формат вывода
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
// };

// Украина
// const localeUk = date.toLocaleString('Uk-uk', options);
// console.log(localeUk);

// USA
// const localeUs = date.toLocaleString('en-US', options);
// console.log(localeUs);
