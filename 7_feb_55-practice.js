// // write a function to print the table of a number pass by user .
// // input : 2
// // output : 
// // 2 x 1 =2
// // 2 x 2 =4
// // 2 x 3 =6
// // 2 x 10 =20

// function table(num){
//     let my_arr=[]
//     let string=""
//     let count_x=0;
    
//     for (let i=1 ; i<=10 ; i++){
//         my_arr.push(`${num} x ${i} = ${num*i}`)
        
//     }
//     for (let i=0 ; i<my_arr.length ; i++){
//         string+=my_arr[i]  
//     }
    
//     for (let i=0 ; i<string.length;i++){
//         if (string[i] == "x") {
//             count_x+=1   
//         }
//     }

//     console.log(`No x: ${count_x}`)
//     console.log(`No =: ${count_eq}`)
// }
// let num=5
// table(num)


// find multiples and count.

let n=12;
let count=0
let all_multiple=[]
for (let i=1 ; i<=n ;i++){
    if (n%i==0){
        all_multiple.push(i)
        
        count+=1

    }
}
console.log(`Total Multiple :${count}`)
console.log(`Multiple of ${n} :`,all_multiple)

// Find all vowels from an array ['aman','abhay','rohan','ankit']
// let my_arr=['aman','Abhay','rohanI','ankit']
// let my_str=""
// for (let i of my_arr){
//     my_str+=i
// }

// for (let i of my_str.toLowerCase()){
//     if (i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
//         console.log(i)
//     }
// }

let my_arr=['aman','Abhay','rohanI','ankit'].toString().split('')
for (let i of my_arr.toString().toLowerCase()){
    if (i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
        console.log(i)
    }
}