let treatment;
let cost;
let seat;
let arr = [];
const handledisplay = () => {
  treatment = document.getElementById("treatment").value;
  // console.log(treatment);

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

const handleremove = (index) => {
  // console.log(index);

  arr.forEach((v, i, arr) => {
    if (i === index) {
      arr.splice(i, 1);
    }
    // console.log(arr);
    // console.log(i);
  });
  
  handledis(date);
  console.log(arr);

  return false;
};

const handleclick = () => {
  document.getElementById("treat").style.display = "block";
  let date = document.getElementById("date").value;
  // console.log(dateAp);
  let payable = Math.floor(cost / seat);

  const dental = {
    treat: treatment,
    seating: seat,
    costing: cost,
    dat: date,
    pay: payable
  };

  arr.push(dental);
  // console.log(arr);

  handledis(date);

  return false;
};

const handledis = (date) => {
  let dateAp = new Date(date);
  console.log(dateAp);
  let print = "";
  arr.map((v, i) => {
    for (let i = 1; i <= v.seating; i++) {
      print += "<tr>";
      if (i === 1) {
        print += "<td>" + v.treat + "</td>";
        print += "<td>" + i + "</td>";
        print += "<td>" + v.costing + "</td>";
        print += "<td>" + dateAp.toLocaleDateString() + "</td>";
        print += "<td>" + v.pay + "</td>";
        // console.log(i, per_co, dateAp.toLocaleDateString());
      } else {
        dateAp.setDate(dateAp.getDate() + 7);
        // print += "<tr>";
        print += "<td>" + v.treat + "</td>";
        print += "<td>" + i + "</td>";
        print += "<td>" + v.costing + "</td>";
        print += "<td>" + dateAp.toLocaleDateString() + "</td>";
        print += "<td>" + v.pay + "</td>";
        // console.log(i, per_co, dateAp.toLocaleDateString());
      }
    }
    print += `<td><button onclick=handleremove(${i})>Delete</button></td>`;
    print += "</tr>";
  });

  document.getElementById("tbody").innerHTML = print;

  return false;
};

// let bookRef = document.getElementById("book");

// bookRef.addEventListener("click", appDate)
