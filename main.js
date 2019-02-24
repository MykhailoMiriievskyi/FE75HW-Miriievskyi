
var memory;
var price = 0;
var messageMemory = '';

while (true) {
   memory = prompt('Введите память телефона (64, 128, 256)');
   if (memory === null) {
     messageMemory = 'Вы не ввели память. Пока!';
     break;
   } else if (+memory === 64) {
   price = 300;
    break;
   } else if (+memory === 128) {
     price = 500;
    break;
  } else if (+memory === 256) {
     price = 700;
     break;
   } else {
     alert('Попробуйте снова!')
   }
 }

 var color;
 var messageColor = "";
 var photo = "";

 while (true) {
   color = prompt ('Введите цвет телефона (black, gold, silver)');
  if (color === null) {
    messageColor = 'Вы не ввели цвет. Пока!';
    break;
  } else if (color === 'black') {
    photo = './img/black1.png';
    break;
  } else if (color === 'gold') {
    photo = './img/gold.png';
    break;
  } else if (color === 'silver') {
    photo = './img/silver.png';
    break;
  } else  {
    alert ('Попробуйте снова!');
  } 
 }

if (photo && price) {
document.write("<img src=" + photo + " width='200'/>");
document.write('<h1>Price: ' + price + '$</h1>');
}

if (messageMemory && !price) {
document.write('<h1 style="color: red">' + messageMemory + '</h1>');
}

if (messageColor && !photo) {
document.write('<h1 style="color: red">' + messageColor + '</h1>');
}

