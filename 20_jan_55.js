// Arrow function (anonymous function):
// 1.Arrow function is a modern way writing function in javascript.
// 2.Arrow fuction is short faster than traditional fuction in javascript.

// without parameters
let hello= ()=>(console.log("How are you"),console.log("How are you"))
hello()

// function hello1(){
//     console.log("HELLO")
//     console.log("HELLO")
// }
// hello1()


// let data=()=>console.log("I AM GOOD")
// data()

// let data=()=>{return "I AM RETURN GOOD"}
// console.log(data())

// Write a arrow function to check number is odd or even.
// let odd_even = ()=>{if (30%2==0){return "Even"} else {return "ODD"}}
// console.log(odd_even())

// With parameter
// let odd_even = (num,d)=>{
//     if (num%d==0){
//         return "Even"
//     } else{
//         return "ODD"
//     }
// }
// console.log(odd_even(5,2))


// Switch statement.
// let input="2"
// switch(input){
//     case "1":
//         console.log('MONDAY')
//         break;

//     case "2":
//         console.log('TUESDAY')
//         break;

//     default:
//         console.log("KUCH DIKKAT HAI")
// }

// Create arrow functin add,sub,mul,divide
// use switch statement to call fuction + for add,- for sub , * for mul , / for divide.

let n1=10;
let n2=5;
let add=(n1,n2)=>{return n1+n2}
let sub=(n1,n2)=>{return n1-n2}
let mul=(n1,n2)=>{return n1*n2}
let div=(n1,n2)=>{return n1/n2}

let input="-";
switch(input){
    case "+":
        console.log(add(n1,n2))
        break;

    case "-":
        console.log(sub(n1,n2))
        break;
        
    default:
        console.log("something went wrong.")
}

