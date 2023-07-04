// function defined;

// function greeting(){
//     console.log("God Evening");
// }

// function call;
// greeting();

// Arrow Function;


// const greeting = () => {
//     console.log("goog Evening");
// }

// greeting();

// const calacualteage = (year) =>{
//     let age = 2023-year;
//     return age;
// }

// let ans=calacualteage(2003);
// console.log(ans);


// Nested Function:-

// calculate Cost:-

const costing = (place) =>{
    if(place==='goa'){
        return 35000;
    }else if(place==='bali'){
        return 85000;
    }

}

// only give package information:-

const package = (p1,p2)=> {
    let cost1=costing(p1);
    let cost2= costing(p2);

    let msg= p1  + "  Cost You " + cost1  + ' and ' + p2 + " cost you " + cost2;

    return msg;
}


let res= package('goa','bali');
console.log(res);



