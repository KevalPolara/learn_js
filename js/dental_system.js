let treatment;
const handledisplay = () => {
  treatment = document.getElementById("treatment").value;
  // console.log(treatment);

  let cost;
  let seat;

  if (treatment === "teeth_cleaning") {
    cost = 500;
    seat = 1;
  } else if (treatment === "fillings") {
    cost = 1500;
    seat = 2;
  } else if (treatment === "root canal treatment") {
    cost = 2500;
    seat = 4;
  } else if (treatment === "rct_cover") {
    cost = 12000;
    seat = 6;
  } else if (treatment === "braces_invisalign") {
    cost = 35000;
    seat = 12;
  } else if (treatment === "0") {
    cost = 0;
    seat = 0;
  }

  document.getElementById("show_disp").style.display = " block";
  document.getElementById("cost").innerHTML = "cost:-" + cost;
  document.getElementById("seat").innerHTML = "seat:-" + seat;

  return false;
};

const handleclick = () => {
  treatment = document.getElementById("treatment").value;
  let date=document.getElementById("date").value;
  let print='';

  if (treatment === "teeth_cleaning") {
    if(date){
      document.getElementById("fir-date").innerHTML=date;
    }
    document.getElementById("treat").style.display="block";
    print=
    print+
    `<table border='1'  >
    <tr>
    <td>Teeth Cleaning</td>
    <td>2</td>
    <td>500</td>
    <td id="fir-date"></td>
    <td >250</td>
</tr>
</table>`
document.getElementById("table").innerHTML=print;




    // document.getElementById("teeth").style.display="block";

  }else if (treatment === "fillings") {
    if(date){
      document.getElementById("firone-date").innerHTML=date;
    }
    document.getElementById("fill").style.display="block";
    
  } else if (treatment === "root canal treatment") {
    if(date){
      document.getElementById("firtwo-date").innerHTML=date;
    }
    document.getElementById("root").style.display="block";
    
     
  } else if (treatment === "rct_cover") {
    if(date){
      document.getElementById("firthree-date").innerHTML=date;
    }
    document.getElementById("rct").style.display="block";
    
  } else if (treatment === "braces_invisalign") {
    if(date){
      document.getElementById("firfour-date").innerHTML=date;
    }
    document.getElementById("brace").style.display="block";
  }

  

  return false;
};
