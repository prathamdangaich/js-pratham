const score=100;
console.log(score);

const balance = new Number(100.87875564);
console.log(balance);

console.log(balance.toString());
console.log(score.toString().length);

console.log(balance.toFixed(2));
console.log(balance.toPrecision(4));

const hundreds=10000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-100));

console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
