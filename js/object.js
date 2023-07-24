// const person = {
//     name: "amit",
//     Age : "20"
// }
// console.log(person.name,person.Age);


// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person.map((v)=>console.log(v.name,v.age));


// const person = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }
    
// ]  

// person.map((v)=>{
//     (console.log(v.name,v.age));
//     v.course.map((v1)=>console.log(v1))

// })

// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];

// person.map((v)=>{
//     console.log(v.name,v.age,v.course.c1,v.course.c2);
// })



// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat : 10
//         }
//     }
// }

// console.log(data.personal_info.name,data.personal_info.age,data.personal_info.city);
// data.courses.map((v)=>(console.log(v)));
// console.log(data.branches.b1.admission,data.branches.b2.admission);


// const person = {
//     name: "amit",
//     Age : "20"
// }

// for(let k in person){
//     console.log(person[k]);
// }

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person.map((v)=>{
//     for(let k in v ){
//         console.log(v[k]);
//     }
// });


// const person = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }
    
// ] 


// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }

// for(let k in myObj){
//     if(k==='cars'){
//         for(let k1 in myObj[k]){
//             console.log(myObj[k][k1]);
//         }
//     }else{
//         console.log(myObj[k]);
//     }
// }

const person =[
    {
        name:"amit",
        age:19,
        course:{
            c1: "c",
            c2: "html"
        }
    },
    {
        name:"mayur",
        age:20,
        course:{
            c1: "c",
            c2: "html"
        }
    }
];

person.map((v)=>{
    if(v==='course'){
        for(let k in person.course){
            console.log(person.course[k]);
        }
    }else{
        console.log(v[k]);
    }
});


