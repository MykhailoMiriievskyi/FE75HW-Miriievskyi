

//Самостоятельная работа

var arr = [3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43];


//Максимальное значение массива

var max = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]; 
  }
 }
console.log (max);



//Минимальное значение массива

var min = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i]; 
  }
 }
console.log (min);



//Сумма всех значений

var total = 0;
for (var i = 0; i < arr.length; i++) {
  total = total + arr[i];
 }
console.log (total);

//Среднее значение

var avg;
var total = 0;
for (var i = 0; i < arr.length; i++) {
  total = total + arr[i];
 }
 avg = total/arr.length;
 console.log (avg);






