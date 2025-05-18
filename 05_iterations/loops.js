const arr=[10,20,30,40,50];
const str="Pratham";

//for of loop
for(const num of arr){
    console.log(num);
}

for(const i of str){
    console.log(i);
}

//for in loop
for(const i in arr){
    console.log(arr[i]);
}


const coding=["java","python","javascript","cpp"]
// forEach loop
coding.forEach( function(item){
    console.log(item)
})


// coding.forEach(()=>{}) This is an arrow function

coding.forEach((item)=>{
    console.log(item)
})

coding.forEach((item,index,arr)=>{  //It has 3 parameters item, index, and array
    console.log(item,index,arr)
})



//Accessing obeject in array using forEach loop
const myCoding=[
    {name:"java",rating:4.5},
    {name:"python",rating:4.8},
    {name:"javascript",rating:4.7},
    {name:"cpp",rating:4.6}
]

myCoding.forEach((item)=>{
    console.log(item.name, item.rating)
})
