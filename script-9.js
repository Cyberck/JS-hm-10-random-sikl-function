

//Math = eto rabota s matematikoy
// Math.tandom( - otdaet sluchaynoe chislo ot 0 do 1)

// let number = Math.random();
// Math.floor() - okruglyaet v niz
// Math.ceil() - okruglyaet vverh
// Math.round() - okruglyaet po prinsipu matematiki



function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
 
let minNumber = +prompt('Enter the min number', '');
let maxNumber = +prompt('Enter the max number', '');

for(let i = 0; i <= 10; i++) {
  let num1 = random(minNumber, maxNumber);
  let num2 = random(minNumber, maxNumber);
  let primer = +prompt(num1 + ' + ' + num2 + ' ='); 
  let answer = (num1 + num2) == primer ? 'Good' : 'UPSSSS'
  alert(num1 + ' +' + num2 + ' =' + (num1 + num2) + ' Your answer ' + primer + '. ' + answer) 
}





