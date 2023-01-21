//задание 1
let numbers = prompt('(Задание 1) Введите числа:'); // '20 10 15 11'
const array = numbers.split(' ');

const arrayConverter = function (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
    }
    return array;
}
const evenOddSum = function (array) {
    let even = 0;
    let odd = 0;
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even += array[i];
        } else if (array[i] % 2 !== 0) {
            odd += array[i];
        }
    }
    result.push(even, odd);
    return result;
}
console.log("Задание 1:", evenOddSum(arrayConverter(array)));

//задание 2

const word = prompt('(Задание 2) Введите слово:');
const letter = prompt('(Задание 2) Введите букву:');
const charCount = function (word, letter) {
    let letterCounter = 0;
    word = word.replaceAll(' ', '');
    word = word.split('');
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter || word[i] === letter.toUpperCase()){
            letterCounter++;
        }
    }
    return letterCounter;
}
console.log("Задание 2:", charCount(word, letter));

//задание 3

const array2 = [2, 3, 4, 6, 6, 7];
const seekAndDestroy = function (array, ...numbers){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (array[i] === numbers[j]){
                delete array[i];
            }
        }
    }
    return array.filter(value => value !== null);
}
console.log('Задание 3:', seekAndDestroy(array2, 4, 6));