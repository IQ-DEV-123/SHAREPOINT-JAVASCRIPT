// Array----------------------------------
// 1.Properites of array.
// 2.Creation of array.
// 3.Accessing of array.
// 4.Modification of array.
// 5.Traversing of array.
// 6.In-builted method of array.
// 7.Array de-structuring.
// 8.Array structuring.

//-----------------------1.Properites of array.
// 1.In js Array is a data-structure used to store multiple elements of different types
// in a single variable.
// 2.Array is indexed means element store in a same order.
// 3.Array is hetrogeneous(various type data) and homogeneous(same type data).
// 4.Array have dynamic memory management in Js.
// 5.Array have many in-builted method used for easy manipulation.
// 6.Array are mutable(updatable).

// ---------------------- 2.Creation of array.
// 1.By using [] bracket.
// let my_data=[1,3,4,5,"dev","iq-india",true,89.00,9]
// console.log(my_data)

// 2.By using new Array().
// let my_data= new Array(1,3,4,5,"dev","iq-india",true,89.00,9)
// console.log(my_data)


//------------------------3.Accessing of array.
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9,13,'aman']
// console.log(my_data[0])
// let size=my_data.length
// console.log(my_data[size-1])
// last_index=len - 1

//-------------------------------- 4.Modification of array.
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// my_data[0]="How are you"
// my_data[my_data.length-1]="kaise ho"
// console.log(my_data)

// -------------------------------5.Traversing of array.
// for (let i=10 ; i>0 ; i-=2){
//     console.log(i)
// }

// using for loop
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// let size=my_data.length
// for (let i=0 ; i<size;i++){
//     console.log(`${my_data[i]}  =  ${i}`)
// }

// using for of loop
// let my_data= [1,3,4,5,"dev","iq-india",true,89.50,9]
// let size=my_data.length

// for (m of my_data){
//     console.log(m)
// }


// using for in loop
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// let size=my_data.length

// for (i in my_data){
//     console.log(my_data[i])
// }


// using while loop .
// let set=0; 
// while (set<10){
//     console.log(set)
//     //set=set+1
//     //set++
//     //set+=2
// }

// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// let size=my_data.length
// let set=0
// while (set<size){
//     console.log(my_data[set])
//     set+=1
// }

//  using do while
// let set=0
// do{
//     console.log(set)
//     set+=1
// }while(set<=10)

//------------------------------- 6.In-builted method of array.
//1. push()
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// let data=800;
// my_data.push([3,4,5])
// my_data.push(data)
// console.log(my_data)

// 2. unshift()
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// let data=800;
// my_data.unshift(data)
// my_data.unshift("AMAN")
// console.log(my_data)

// 3. shift() : Remove element start from the array 
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// my_data.shift()
// my_data.shift()
// my_data.shift()
// console.log(my_data)

// 4. pop()  
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// res=my_data.pop()
// console.log(res)
// my_data.pop()
// console.log(my_data)

// 5.Concat()
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// let new_data=[80,90,"aman"]
// let a1_a2=new_data.concat(my_data)
// console.log(a1_a2)

// // Reverse()
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// let res=my_data.reverse()
// console.log(res)

// includes()
// let my_data= [1,3,4,5,"dev","iq-india",true,89.00,9]
// let res=my_data.includes(1)
// console.log(res)

// indexof(element,index)
// let my_data= ["a","b","c","a","d","f","a"]
// let res=my_data.indexOf("a",4)
// console.log(res)

// lastindexof()
// let my_data= ["a","b","c","a","d","f","a"]
// let res=my_data.lastIndexOf("a")
// console.log(res)

// slice(start,end-1)
// let my_data=[1,2,3,4,5,6,7,8,9]
// let res=my_data.slice(2,5)
// console.log(res)

// splice(start,deletecount,items) /insert
// let my_data=[1,2,3,4,5,6,7,8,9]
// let res=my_data.splice(1,3,88,45,67)
// console.log(res)
// console.log(my_data)


// splice() /replace
// let my_data=[1,2,3,4,5,6,7,8,9]
// my_data.splice(3,2,"rohan","ajay","seema","a","b")
// console.log(my_data)

// foreach()
// filter()
// map()
// callback
// let my_data=[1,2,3,4,5,6,7,8,9]
// let res=my_data.forEach()

// -------------------- Array-Destructuring.
// 1.Basic structuring.
// let my_data=[1,2,3,4,5,6,7,8,9]
// let [e1,e2,e3]=my_data
// console.log(e1)
// console.log(e2)
// console.log(e3)

// 2.Skkiping structuring.
// let my_data=[1,2,3,4,5,6,7,8,9]
// let [e1,,,e3,,,,e4]=my_data
// console.log(e1)
// console.log(e3)
// console.log(e4)

// 3.rest structuring.
// let my_data=[1,2,3,4,5,6,7,8,9]
// let [e1,...e4]=my_data
// console.log(e1)
// console.log(e4)

// -------------------- Array-structuring.
