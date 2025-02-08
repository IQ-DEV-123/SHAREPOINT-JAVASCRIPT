// ----------------- Objects.
// 1.Properties of Objects
// 2.Creation of Objects
// 3.Accessing of Objects
// 4.Modification of Objects
// 5.Traversing of Objects
// 6.In-builted of Objects

// ============== 1.Properties of Objects
// 1.Object are user-defined data structure which store data
// of different in the form key:value pair.
// 2.Object key must be unique.
// 3.Objects are mutable (changeable)
// 4.Indexed not allowed in object


// 2.Creation of Objects

// 1.using ({})
// let student_profile={
//     name:'Dev',
//     age:26,
//     roll:5890,
//     email:'ysdevn@gmail.com',
//     clg_name:"Manipal University",
//     phone:8989998653,
//     subjcet:['CS','MATH','COMMUNICATION','DL'],
//     address:'Noida delhi 110021'

// }
// console.log(student_profile)

// 2.Using new keyword
let student_profile1=new Object()
student_profile1.name="Aman";
student_profile1.age=34;
student_profile1.email="aman@gmail.com"
student_profile1.mob=8798098723

console.log(student_profile1.age)
console.log(student_profile1.mob)

// ==============Accessing of object

let student_profile={
    name:'Dev',
    age:26,
    roll:5890,
    email:'ysdevn@gmail.com',
    clg_name:"Manipal University",
    phone:9989998653,
    subjcet:['CS','MATH','COMMUNICATION','DL'],
    marks:[45,89,90,79],
    address:'Noida delhi 110021',
    say_hello:function(){
        return `Student Name : ${this.name} Student Age : ${this.age}`
    }

}
for (let i=0 ; i<student_profile.marks.length ; i++){
    console.log(student_profile.marks[i])
} 

// 4.Modification of Objects

