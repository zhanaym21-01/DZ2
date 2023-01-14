//задание 1
let name = prompt('input your name')
let surname = prompt('input your surname')

let fullName = name + ' ' + surname;

console.log('Здравствуйте, '+fullName);

//задание 2
let numb1 = Number(prompt('1st number'))
let numb2 = Number(prompt('2nd number'))

if (numb1 > numb2){
    console.log(numb2);
} else if(numb1 < numb2){
    console.log(numb1);
} else if (numb1 === numb2){
    console.log('ravny');
}else{
    console.warn('введите числа');
}

//задание 3
let a = prompt('Выберите цвет: Красный, жёлтый, зелёный')

switch (a){
    case 'Красный' :
        console.log('На красный идти нельзя');
        break;
    case 'Жёлтый' :
        console.log('На жёлтом надо быть внимательным');
        break;
    case 'Зелёный':
        console.log('На зеленый можно ехать или идти');
        break;
    default:
        console.log('вы выбрали не тот цвет!!!');
    }

//задание 4

switch (Numerals){
    case '1':
        console.log('В греческой нумерации это I');
        break;
    case '2':
        console.log('В греческой нумерации это II');
        break;
    case '3':
        console.log('В греческой нумерации это III');
        break;
    case '4':
        console.log('В греческой нумерации это IV');
        break;
    case '5':
        console.log('В греческой нумерации это V');
        break;
    case '6':
        console.log('В греческой нумерации это VI');
        break;
    case '7':
        console.log('В греческой нумерации это VII');
        break;
    case '8':
        console.log('В греческой нумерации это VIII');
        break;
    case '9':
        console.log('В греческой нумерации это IX');
        break;
    default :
        console.warn('Введите число от 1 до 9');
        break;
}

