// Operator
document.write(`<h2 style="color:red;">1.Arithmatic operator</h2> <hr> `)
// 1.Arithmatic operator
// addition (+)

let n1=45
let n2=40
let res=n1+n2
document.write(`<h2>ADDITION OF ${n1} + ${n2} = ${res}</h2> `)


// subtract (-)

let n3=45
let n4=40
let res1=n3-n4
document.write(`<h2>SUBSTRACTION OF ${n3} - ${n4} = ${res1}</h2>`)

// Multiplication (*)

let n5=45
let n6=40
let res3=n5*n6
document.write(`<h2>MULTIPLICATION OF ${n3} x ${n6} = ${res3}</h2>`)

// Division (/)

let n7=400
let n8=40
let res4=n7/n8
document.write(`<h2>DIVISION OF ${n3} / ${n4} = ${res4}</h2>`)

// Modulus (%)

let n9=400
let n10=40
let res5=n9%n10
document.write(`<h2>MODULUS OF ${n9} % ${n10} = ${res5}</h2>`)

// Square root (*n)

let n=4
document.write(`<h2>SQUAR OF ${n} = ${n**3}</h2>`)


document.write(`<hr><h2 style="color:red;">2.Comparision Operator</h2> <hr> `)
let x=50;
let y=40;
let data=x>=y
document.write(`<h2> Greater than : ${x} > ${y} = ${data}</h2>`)

let x1=50;
let y1=40;
let data1=x1<=y1
document.write(`<h2> Less than : ${x1} < ${y1} = ${data1}</h2>`)

let x2=50;
let y2=50;
let data2=x2==y2
document.write(`<h2> Equal to : ${x2} == ${y2} = ${data2}</h2>`)

let x3=50;
let y3=50;
let data3=x3!=y3
document.write(`<h2> Equal to : ${x3} != ${y3} = ${data3}</h2>`)

document.write(`<hr><h2 style="color:red;">3.Increament/Decreament Operator</h2> <hr> `)
// post-increament(a++)  pre-increament(++a)
// post-decreament(a--) pre-decreament(--a)

// post-increament(a++)  pre-increament(++a)
let m=10;
let q=m++;
// let q=m--;
document.write(`<h2> post-increament(a++) : ${m}</h2>`)

// post-increament(a++)  pre-increament(++a)
let m1=10;
let q1=++m1;
// let q1=--m1;
document.write(`<h2> post-increament(a++) : ${q1}</h2>`)

document.write(`<hr><h2 style="color:red;">4.Logical Operator</h2> <hr> `)
// and (&&) : it return true if both or multiple condition are true othewise false.
let v1=45;
let v2=46;
let v3=v1>20 && v2>40 && v2>30;
document.write(`<h2>${v1} and ${v2} = ${v3}</h2>`)

// or (||) : it return true if both or multiple condition are true othewise false.
let v4=45;
let v5=46;
let v6=v4>200 || v5>400 || v4>30;
document.write(`<h2>${v5} or ${v4} = ${v6}</h2>`)

// not(!) : Reverse the result

let z4=45;
let z5=46;
let z6=!(z4>200 || z5>400 || z4>30);
document.write(`<h2>${z5} not equal ${z4} = ${z6}</h2>`)






