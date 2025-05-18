// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that runs as soon as it is defined
// It is a design pattern to avoid polluting the global scope

function chai(){
    console.log("connected");
}
chai();                             //Semicolon is important here

(function chai(){
    console.log("connected");
})();                               // This is an IIFE   // Semicolon is important here  //This is an named IIFE because function has a name

(()=>{
    console.log("connected");
})();                               // This is an IIFE

((name)=>{
    console.log(`Connected ${name}`);
})("Pratham"); 

