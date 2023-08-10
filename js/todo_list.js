let arr = [];
let updateindex = null;

const handleadd = () => {
  let todo = document.getElementById("todo").value;

  let localdata = JSON.parse(localStorage.getItem("todo"));

  if (updateindex !== null) {
    localdata[updateindex] = todo;
    localStorage.setItem("todo", JSON.stringify(localdata));
  } else {
    if (localdata !== null) {
      localdata.push(todo);
      localStorage.setItem("todo", JSON.stringify(localdata));
    } else {
      localStorage.setItem("todo", JSON.stringify([todo]));
    }
    // arr.push(todo);
  }
  updateindex = null;

  // console.log(localdata);

  showdisplay();

  //  let localdata=JSON.parse(localStorage.getItem("todo"));
  //  console.log(todo);

  return false;
};

const handleremove = i => {
  let localdata = JSON.parse(localStorage.getItem("todo"));
  localdata.splice(i, 1);

  localStorage.setItem("todo", JSON.stringify(localdata));

  showdisplay();

  // localStorage.removeItem("todo");
  //   localStorage.setItem("todo", JSON.stringify(localdata));

  // console.log(arr);

  return false;
};

const handleedit = i => {
  let localdata = JSON.parse(localStorage.getItem("todo"));
  document.getElementById("todo").value = localdata[i];

  // localStorage.setItem("todo", JSON.stringify(localdata));
  updateindex = i;
  return false;
};
const showdisplay = () => {
  let localdata = JSON.parse(localStorage.getItem("todo"));

  if (localdata) {
    let print = "";

    localdata.map((v, i) => {
      print = print + `<li>${v}`;
      print = print + `<button onclick=handleremove(${i})>remove</button>`;
      print = print + `<button onclick=handleedit(${i})>edit</button></li>`;
    });

    document.getElementById("demo").innerHTML = print;
  }

  return false;
};

window.onload = showdisplay();

// localStorage.setItem("todo", JSON.stringify(localdata));
//   localdata = JSON.parse(localStorage.getItem("todo"));
