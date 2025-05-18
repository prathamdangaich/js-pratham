//console.log(this) // Here we will get {} object. But when we use the same syntax in web console we will get window as output

// function chai(){
//     let username="Pratham"
//     console.log(this.username)  // Not working giving undefined
// }
// chai()

// const chai =function(){        //This is function declaration
//     let username="Pratham";  
//     console.log(this.username)
// }

// chai()

const chai =() => {             //This is arrow function
    let username="Pratham"; 
    console.log(this.username)
}

chai()

// const addTwo=(num1, num2)=>{
//     return num1+num2    //In this return keyword is used  //Explicit return
// }

// console.log(addTwo(3,4))


//const addTwo=(num1, num2) => num1+num2 // Implicit return This is also an arrow function

const addTwo=(num1, num2) => (num1+num2) // can also be written like this

console.log(addTwo(3,4))
