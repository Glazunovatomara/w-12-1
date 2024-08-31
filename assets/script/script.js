//Шаги для выполнения задания:

//Создай переменную alphabet, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
//Используя объект Math, создай четыре случайных индекса в диапазоне от 0 до длины вашей alphabet.
//Используя полученные случайные индексы, извлеки соответствующие символы из alphabet и объедини их в строку, чтобы сформировать случайное слово.
//Выведи полученное случайное слово на экран, чтобы проверить результат.
const str = document.querySelector('.main__word_text');
const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
//console.log(letter1)
const randomWord = () => {
    const random = Math.floor(Math.random() * alphabet.length);
    const random2 = Math.floor(Math.random() * alphabet.length);
    const random3 = Math.floor(Math.random() * alphabet.length);
    const random4 = Math.floor(Math.random() * alphabet.length);

    let letter1 = alphabet[random];
    let letter2 = alphabet[random2];
    let letter3 = alphabet[random3];
    let letter4 = alphabet[random4];

    str.textContent = letter1 + letter2 + letter3 + letter4
};
const button = document.getElementById('btn')
button.addEventListener('click', randomWord)