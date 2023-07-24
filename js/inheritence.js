// class Student{
//     id;
//     name;
//     constructor(i,n){
//         this.id=i;
//         this.name=n;
//     }

//     basic_info(){
//         console.log("id is " + this.id);
//         console.log("Name is " + this.name);
//     }
// }

// class Course extends Student{
//     course_name;
//     course_duration;
//     fees;

//     constructor(i,n,cn,cd,f){
//         super(i,n);
//         this.course_name=cn;
//         this.course_duration=cd;
//         this.fees=f;
//     }

//     course_info(){
//         this.basic_info();
//         console.log("Course_name " + this.course_name);
//         console.log("Course_duration "+ this.course_duration);
//         console.log("Fees " + this.fees);
//     }
// }

// let c1=new Course(1,'keval','Reactjs','10 Months',50000);
// c1.course_info();

// Example No:2)

class Employee{
    id;
    name;

    constructor(i,n){
        this.id=i;
        this.name=n;
    }

    basic_details(){
        console.log(`My Id is ${this.id}`);
        console.log(`My Name is ${this.name}`);
    }
}

class Professional extends Employee{
    salary;
    provident_fund;
    bonus;
    leave;

    constructor(i,n,s,pf,b,l){
        super(i,n);
        this.salary=s;
        this.provident_fund=pf;
        this.bonus=b;
        this.leave=l;
    }

    Professional_details(){
        this.basic_details();
        console.log(`My Salary is ${this.salary}`);
        console.log(`My PF Value  is ${this.salary * 0.10}`);
        console.log(`Bonus is ${this.salary* 0.07}`);
        console.log(`Leave is ${this.leave}`);
    }
}

let p1=new Professional(101,'Keval',500000,0,0,3);
p1.Professional_details();










