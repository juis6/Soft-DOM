// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

const dropdown = document.getElementById('dropdown');
const deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', function() {
    if (dropdown.options.length > 0) {
        const selectedIndex = dropdown.selectedIndex;
        dropdown.remove(selectedIndex);
        
        if (dropdown.options.length > 0) {
            dropdown.selectedIndex = 0;
        }
    }
});