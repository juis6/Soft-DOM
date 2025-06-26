// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//         
// Запустіть виконане завдання за допомогою Live Server 
// Перевірте виконання за допомогою команди node tests/task2.test.js

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

button1.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', function() {
    document.body.style.backgroundColor = 'pink';
});

button3.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = 'brown';
});

button3.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = '';
});