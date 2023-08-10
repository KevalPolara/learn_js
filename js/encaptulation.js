// class employee{
//     id;
//     nme;
//     #salary;
//     #incentive;

//     // Class ne Initialise Kare;

//     constructor(i,n,s){
//         this.id=i;
//         this.nme=n,
//         this.#salary=s;
//     }

//     set incentive(i){
//         this.#incentive=i;
//     }

//     method(){
//         console.log("id",this.id);
//         console.log("name",this.nme);
//         console.log("salary",this.#salary);

//         this.#calBonus();

//        console.log("Your Incentive is:-", this.#incentive);
//     }
    
//     // setter and Getter Method:-
    
//     #calBonus(){
//         let ans=this.#salary * 0.10;
//         console.log("Bonus is :-",ans);
//     }
// }

// let e1=new employee(101,'keval',50000);
// // First Time Value Lyy Sako Cho Pachi nyy
// // console.log(e1.#salary + 10000); Throw error;

// e1.incentive=2000;
// e1.method();

// // e1.#calBonus(); Throw An Error;

class Student{
    id;
    name;
    #adhar_id;

    constructor(i,n,a){
        this.id=i;
        this.name=n;
        this.#adhar_id=a;
    }

    adhar(){
        console.log("My Adhar id is:-",this.#adhar_id);
    }

}

class Course extends Student{
    #fees;
    #scholarship;

    set scholarship(i){
        this.#scholarship=i;
    }

    get scholarship(){
        console.log(this.#scholarship);
    }

    constructor(i,n,s,a){
        super(i,n,s);
        this.#fees=a;
    }

    getinfo(){
        this.adhar();
        console.log("id",this.id);
        console.log("name",this.name);
        console.log("Fees",this.#fees);
        console.log("Scholarship",this.#scholarship);
    }

}



let c1=new Course(900000,252,'keval',20000)
c1.scholarship=5000;
c1.getinfo();
// console.log(e1.#adhar_id);




