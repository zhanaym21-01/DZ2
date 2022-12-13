
// // заданиеN1
  function min(a, b) {
    return ( a > b ? b : a );
  }
  console.log(min(0, 8));
  console.log(min(0, -7));


// заданиеN2
  function len(){
    const word = promt("напишите слово")
     console.log(word.lenght)

  }
  len()


// заданиеN3
var num1 = Number(prompt)"число 1")
var num2 = Number(prompt)"число 2")
var symbol = prompt("+,-,/,*")

 function calc(ed1,ed2,oper){
  if(num1==Number(num1) && num2==Number(num2)){
    if (oper=="+"){
      alert(num1+num2)
    }else if(oper=="-"){
      alert(num1-num2)
    }else if(oper=="*"){
      alert(num1*num2)
    }else if(oper=="/"){
      alert(num1/num2)
    }else {
      alert("ERROR");
    }
