//задание 1
var zv = '*';

while ( zv.length <= 7 ){
    console.log(zv)
    zv+='*'
}


//задание 2
for (let i = 1; i < 101; i ++) {
    if ( i % 15 == 0){
        console.log('fizzbuzz');
    }else if( i % 3 == 0){
        console.log('fizz');
    }else if (i % 5 == 0){
        console.log('buzz');
    }else{
        console.log(i);
    }

}


//задание 3
let CustomerBankingCard = {
    CardNumber: '4199 9090 4040 1212',
    ValidThrough: '22-12-2022',
    CardHolderName : 'AITKULIEVA ZHANAIYM',
    CardType : 'Debit',
    CvcNumber : 852,

}


//задание 4
let BankingBranch = {
    SwiftCode: 22,
    BankingName: 'KICB',
    Schedule: 'ПН-ПТ, 8:00 - 17:00',
    EveningWork: false,
    Address:{
        City: 'Bishkek',
        Street: 'Erkindik st',
        home: '21'
    }
}


//задание 5
let customerType = true

let typeAsText = (customerType ? 'Физическое' : "Юридическое")

console.log('Ваш вид лица в гр. праве это: ' + typeAsText);