doMath = (a, b, symbol) => {
  switch(symbol){
    case '+':
      return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    case'-':
      return (parseInt(a, 2) - parseInt(b, 2)).toString(2);
    case'*':
      return (parseInt(a, 2) * parseInt(b, 2)).toString(2);
    case'/':
      return (parseInt(a, 2) / parseInt(b, 2)).toString(2);
    default:
      console.error('invalid symbol');
      return 0;
  }
}

console.log(doMath(10101, 110101,'+'));
console.log(doMath(101011, 110101,'-'));
console.log(doMath(10101, 110101,'*'));
console.log(doMath(110, 10,'/'));