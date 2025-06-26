// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

const widthValue = document.getElementById('widthValue');
const heightValue = document.getElementById('heightValue');

function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    widthValue.textContent = width;
    heightValue.textContent = height;
}

updateWindowSize();

window.addEventListener('resize', updateWindowSize);