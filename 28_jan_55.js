// -------------------- String
// 1.Properites of string.
// 2.Creation of string.
// 3.Accessing of string.
// 4.Traversing of string.
// 5.In-builted method of string.

// ================1.Properites
// 1.String is a data structure used to store group of charecter or number and symbols.
// 2.String are indexed and ordered.
// 3.String are immutable(can not updateble)

// =================2.Creation
// 1.using ('',"",``)
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// console.log(user_address)

// 2.using new keyword 
// let user_address= new String(8798)
// console.log(user_address)

// ======================3.Accessing.
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// console.log(user_address[user_address.length])

// ======================4.Traversing.
// using for loop.
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let size=user_address.length
// for (let i=0 ; i<size ; i++){
//     console.log(user_address[i])
// }

// // using for in loop.
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let size=user_address.length
// for (let i in user_address){
//     console.log(user_address[i])
// }

// using for of loop.
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let size=user_address.length
// for ( i of user_address){
//     console.log(i)
// }

// using while loop.
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let size=user_address.length
// let i=0;
// while (i<size){
//     console.log(user_address[i])
//     i+=1
// }

// Write a programm to store all vowels from user_address to another variable
// all_vowels.
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let all_vowels="";
// for (i of user_address){
//     if(i=="a" || i=="e" || i=="o" || i=="i" || i=="u"){
//         all_vowels+=i
//     }
// }
// console.log(all_vowels);

//===================5.In-builted method of string.
// replace()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let res=user_address.replace('Delhi',"Faridabad")
// console.log(res)

// slice()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let res=user_address.slice(4,8)
// console.log(res)

// include()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let res=user_address.includes("Del")
// console.log(res)

// split()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let res=user_address.split()
// let res=user_address.split(" ")
// let res=user_address.split('')
// console.log(res)

// trim()
// let user_address='   Delhi "noida" "110021" New-kondli d-123/677   '
// console.log(user_address)
// let res=user_address.trim()
// console.log(res)

// charAt()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677   '
// let res=user_address.charAt(2)
// console.log(res)

// indexOf()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677   '
// let res=user_address.indexOf('D')
// console.log(res)

// toLowerCase()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let res=user_address.toLowerCase()
// console.log(res)

// toUpperCase()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'.toUpperCase()
// console.log(user_address)

// concat()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'.toUpperCase()
// let res=user_address.concat(" how are you").toUpperCase()
// console.log(res)

// endsWith() startsWith()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let res=user_address.endsWith('7')
// let res=user_address.startsWith('D')
// console.log(res)

//substring()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let res=user_address.substring(0,9)
// console.log(res)

// repeat()
// let user_address='Delhi "noida" "110021" New-kondli d-123/677'
// let res=user_address.repeat(3)
// console.log(res)

// string complete.

let marks=[87,88,99,34,66,23,72,55,56]
let pass=[]
for (i of marks){
    if (i>60){
        pass.push(`${i}:pass`)
    }
}

console.log(pass)




