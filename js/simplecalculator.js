function simplecalculator(){
    let x=parseFloat(document.getElementById("value").value);
    let y=parseFloat(document.getElementById("valueone").value);

    let operator=document.getElementById("valuetwo").value;

    let res;

    // if(operator=='+'){
    //     let sum=x+y;
    //     document.getElementById("valuethree").innerHTML=sum;
    // }else if(operator=='-'){
    //     let sub=x-y;
    //     document.getElementById("valuethree").innerHTML=sub;
    // }else if(operator=='*'){
    //     let mul=x*y;
    //     document.getElementById("valuethree").innerHTML=mul;
    // }else if(operator=='/'){
    //     let div=x/y;
    //     document.getElementById("valuethree").innerHTML=div;
    // }

    switch(operator){
        case '+':
            res=x+y;
            break;
        case '-':
            res=x-y;
            break;

        case '*':
            res=x*y;
            break;
        case '/':
            if(y===0){
                res='Invalid';
            }else{
                res=x/y;
            }
            break;
        default:
            res='Invalid';
    }

    document.getElementById("valuethree").innerHTML=res;
    return false;
}
