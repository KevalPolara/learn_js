function simplecalculator(){
    let p=parseInt(document.getElementById("principal").value);
    let r=parseInt(document.getElementById("rate").value);
    let k=parseInt(document.getElementById("m_y").value);
    let t=document.getElementById("year_month").value;

    console.log(t);

    let res;
    switch(t){
        case 'monthly':
            res= (p*r*k/12)/100;    
            break;

        case 'yearly':
            res= (p*r*k)/100;
            break;
        
        default:
            res='Invalid';
    }

    document.getElementById("result").innerHTML=res;

    return false;

}