// outer Function:-
const personalinfo =(name)=>{
    let age=30;

    // Inner Function:-
    return function proinfo(){
        let salary= 45000;

        console.log(name);
        console.log(salary);
        console.log(age);
    }
}

let res=personalinfo('amit');
console.log(res);
res();