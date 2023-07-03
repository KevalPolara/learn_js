function compare(){
    let x=parseInt(document.getElementById("value").value);
    let y=parseInt(document.getElementById("valueone").value);

    if(x>y){
        document.getElementById("valuethree").innerHTML=("x value is greater than y");
    }else if(x<y){
        document.getElementById("valuethree").innerHTML=("x value is less than y");
    }else{
        document.getElementById("valuethree").innerHTML=("x is equal to y");
    }

    return false;
}

