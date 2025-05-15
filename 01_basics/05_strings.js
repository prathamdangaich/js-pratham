let name="Pratham";
let age=22;
console.log(`My name is ${name} and age is ${age}`);
console.log(`Element at 3rd index is ${name[3]}`);

console.log(name.length);

console.log(name.toUpperCase());
console.log(name.indexOf('a'));

const newName=name.substring(0,4);
console.log(newName);
console.log(name.slice(0,4));
console.log(newName.substring(0,2));

console.log(name.slice(-4));
console.log(name.slice(-4,-2));
console.log(name.slice(-4,6));

let nameTrim="    Pratham   ";
console.log(nameTrim);
console.log(nameTrim.trim());
