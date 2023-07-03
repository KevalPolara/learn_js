function handleBmi(){
    let w=parseFloat(document.getElementById("weight").value);
    let h=parseFloat(document.getElementById("height").value);

    let m_h=h/100;

    let bmi=w/(m_h*m_h);

    console.log(bmi);
    document.getElementById("bmi_value").innerHTML=bmi;

    if(bmi>0 && bmi<18.5){
        document.getElementById("result").innerHTML=("underweighted");
    }else if(bmi>=18.5 && bmi<=25){
        document.getElementById("result").innerHTML=("Normal");
    }else if(bmi>25){
        document.getElementById("result").innerHTML=("Overweighted");
    }

    return false;

}