handledisp=()=>{
    // console.log("kkkk");

    let element=document.createElement("h1");
    element.setAttribute("class","demo");
    let text=document.createTextNode("HTML");

    element.appendChild(text);

    let display=document.getElementById("disp");
    display.appendChild(element);
    
    
}