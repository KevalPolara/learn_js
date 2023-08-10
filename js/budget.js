class Budget {
  constructor() {
    this.budget = document.querySelector("#bud");
    this.expens = document.querySelector("#expenses");
    this.amount = document.querySelector("#amount");
    this.budg = document.querySelector("#zero");
    this.balance = document.querySelector("#two");
    this.budexp = document.querySelector("#title");
    this.budval = document.querySelector("#val");
    this.val = document.querySelector("#one");

    this.arr = [];
    this.updateIndex = null;
  }

  handleRemove = id => {
    let index = this.arr.findIndex(v => v.id === id);
    this.arr.splice(index, 1);

    let element = document.getElementById("demo-" + id);

    element.remove();
    // console.log(index);

    this.budgetdisp();
  };

  handleEdit = id => {
    // console.log(id);

    // filter Method:-

    // let fdata=this.arr.filter((v)=>v.id==id);
    // console.log(fdata);

    // document.getElementById("expenses").value=fdata[0].expense;
    // document.getElementById("amount").value=fdata[0].amount;

    // findIndex Method:-

    // let i=this.arr.findIndex((v)=>v.id===id);
    // console.log(i);

    // document.getElementById("expenses").value=this.arr[i].expense;
    // document.getElementById("amount").value=this.arr[i].amount;

    // find Method:-

    let fdata = this.arr.find(v => v.id == id);
    // console.log(fdata);

    document.getElementById("expenses").value = fdata.expense;
    document.getElementById("amount").value = fdata.amount;

    this.updateIndex = id;

    // this.budgetdisp();

    // Map Method:-
    // this.arr.map((v)=>{
    //   if(v.id===id){
    //     // console.log(v.id,id);
    //     this.expens.value=v.expense;
    //     this.amount.value=v.amount;
    //   }
    // })

    // let ind = this.arr.findIndex(v => v.id === id);
    // console.log(ind);

    // this.updateIndex=ind;
    // console.log(this.arr);
  };

  handleBudget() {
    let b1 = parseInt(this.budget.value);
    // let ex1 = parseInt(this.amount.value);

    event.preventDefault();

    if (b1 <= 0) {
      document.getElementById("error").innerHTML =
        "Error:This is a Invalid Budget";
    } else {
      document.getElementById("error").innerHTML = "";

      this.budg.innerHTML = b1;
      this.budgetdisp();
      // console.log(b1);
    }
  }

  handleExpenses() {
    let e1 = this.expens.value;
    let a1 = parseInt(this.amount.value);
    let id = Math.floor(Math.random() * 1000);

    event.preventDefault();

    if (e1 <= 0) {
      document.getElementById("error1").innerHTML =
        "Error: This is a Invalid Expenses";
    } else if (a1 <= 0) {
      document.getElementById("error2").innerHTML =
        "Error: This is a Invalid Amount";
    } else {
      document.getElementById("error1").innerHTML = "";
      document.getElementById("error2").innerHTML = "";

      if (this.updateIndex !== null) {
        // console.log(this.updateIndex);

        let ref = document.getElementById("demo-" + this.updateIndex);

        let findind=this.arr.findIndex((v)=>v.id==this.updateIndex);
        console.log(findind);

        let obj = {
          id: this.updateIndex,
          expense: e1,
          amount: a1
        };

        this.arr[findind]=obj;
        console.log(this.arr);

        ref.children[0].textContent = this.expens.value;
        ref.children[1].textContent = this.amount.value;

        this.budgetdisp();
        // console.log("keval Polara");
        // this.arr[this.updateIndex].expense = e1;
        // this.arr[this.updateIndex].amount = a1;
      } else {
        let obj = {
          id: id,
          expense: e1,
          amount: a1
        };
        this.arr.push(obj);
        console.log(this.arr);
        this.budgetdisp();
        this.showdisp(id)
      }

      this.updateIndex = null;

     
    }
  }

  budgetdisp() {
    let budgetval = parseInt(this.budg.textContent);

    let expenseval = this.arr.reduce((acc, v, i) => acc + v.amount, 0);

    let balanceval = 0;
    balanceval = budgetval - expenseval;

    this.balance.innerHTML = balanceval;
    this.val.innerHTML = expenseval;
  }

  showdisp(id) {
    let display = document.getElementById("parentclass");
    let div = document.createElement("div");
    div.setAttribute("class", "d-flex justify-content-between");
    div.setAttribute("id", "demo-" + id);
    let p1 = document.createElement("p");
    p1.setAttribute("id", "p1");
    let textnode = document.createTextNode(this.expens.value);
    p1.appendChild(textnode);
    div.appendChild(p1);
    display.appendChild(div);

    let p2 = document.createElement("p");
    p2.setAttribute("id", "p2");
    let textnodeone = document.createTextNode(this.amount.value);
    p2.appendChild(textnodeone);
    div.appendChild(p2);
    display.appendChild(div);

    let p3 = document.createElement("p");
    let anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    let anchortext = document.createElement("i");
    anchortext.setAttribute("class", "fa-solid fa-trash");
    let anc = document.createElement("a");
    anc.setAttribute("href", "#");
    anc.setAttribute("class", "demofive");
    let anchrtext = document.createElement("i");
    anchrtext.setAttribute("class", "fa-solid fa-pen-to-square");
    anc.appendChild(anchrtext);
    p3.appendChild(anc);

    p3.appendChild(anchor);
    anchor.appendChild(anchortext);
    div.appendChild(p3);
    display.appendChild(div);

    anchor.addEventListener("click", () => this.handleRemove(id));
    anc.addEventListener("click", () => this.handleEdit(id));
  }
}

let bu1 = new Budget();
// bu1.handleBudget();

let budgetref = document.getElementById("button");

budgetref.addEventListener("submit", function() {
  bu1.handleBudget();
});

let expenseref = document.getElementById("buton");

expenseref.addEventListener("submit", function() {
  bu1.handleExpenses();
});
