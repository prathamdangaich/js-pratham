const arr=[1,3,45,"Pratham", "Dangaich"];
console.log(arr); 

arr.push(6)
console.log(arr); 
arr.pop()
console.log(arr)

arr.unshift(9) //Adds element at the beginning
console.log(arr)

arr.shift() //Removes element from the beginning
console.log(arr)

const newArr=arr.join();
console.log(newArr); //Converts array to string

console.log("---------------------------------------");
let arr1=[1,2,3,4,5];
console.log(arr1);

let myArr1=arr1.slice(1,3);
console.log(myArr1); //Slice method does not change the original array
console.log(arr1);

let myArr2=arr1.splice(1,3); //Splice method changes the original array
console.log(myArr2);
console.log(arr1); //Original array is changed
