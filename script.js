
//Zad1

var x = 'Hello';
var y = 'World';

console.log(`${x} ${y}`);

//Zad2

const multiply1 = (a,b=1) => a * b;
console.log(multiply1(6,7))

//Zad3

function average(...args) {
  var a=0;
  args.forEach(x => a += x );
  return a/args.length;
}

console.log(average(4,5,7,7,8,2));

//Zad4

function average(...args) {
  var a=0;
  args.forEach(x => a += x );
  return a/args.length;
}

const grades = [1,5,5,5,4,3,9,2,1]
console.log(average(23,5,7,7,...grades));

//Zad5
const tablica = [1, 4, 'Iwona', false, 'Nowak'];
const [,,third,,fifth] = tablica;

console.log(third + ' ' + fifth);
