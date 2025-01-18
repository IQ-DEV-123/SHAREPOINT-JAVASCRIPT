// Category of  User-define-function .
// 1.TAKE NOTHING RETURN NOTHING
// 2.TAKE NOTHING RETURN SOMETHING
// 3.TAKE SOMETHING RETURN NOTHING
// 4.TAKE SOMETHING RETURN SOMETHING

// 1.TAKE NOTHING RETURN NOTHING
// function addition(){
//     let num1=70;
//     let num2=40;
//     let result=num1+num2;
//     console.log(`Result : ${result}`)
// }
// addition()

// 2.TAKE NOTHING RETURN SOMETHING
// function addition(){
//     let num1=70;
//     let num2=40;
//     let result=num1+num2;
//     return `Result : ${result}`
// }
// let data=addition()
// console.log(data)

// 3.TAKE SOMETHING RETURN NOTHING.
function addition(a,b){
        let num1=a;
        let num2=b;
        let result=num1+num2;
        console.log( `Result : ${result}`)
}
addition(40,45)
    
// 4.TAKE SOMETHING RETURN SOMETHING.
function addition(a,b){
    let num1=a;
    let num2=b;
    let result=num1+num2;
    return ( `Result : ${result}`)
}
let data=addition(40,45)
console.log(data)
