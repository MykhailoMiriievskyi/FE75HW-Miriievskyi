

//напишите функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:



var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];


var pluck = function(array, key) {
   var resultsArr = [];

  for (var i = 0; i < array.length; i++) {
    resultsArr.push(array[i][key]);
  }
 return resultsArr;
}

console.log(pluck(characters, 'name')); 
console.log(pluck(characters, 'age')); 








