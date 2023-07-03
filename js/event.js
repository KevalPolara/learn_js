// mouse-event
function handeledown(){
    document.getElementById("value").value;
    console.log('keval polara');
}

function handlemouseout(){
    console.log('hello');
}

function handlemouseover(){
    console.log('say hekko');
}

function handlemouseup(){
    console.log('say goodbye');
}

function handlemousemove(){
    console.log('say keval');
}

//keyboardevent

function handlekeyboardown(){
    console.log('say my name is keval');
}

// formevent:-
function handlefocus(){
    document.getElementById("valuesix").style.backgroundColor='yellow'
}

function hanldeblur(){
    document.getElementById("valuesix").style.backgroundColor='white'
}

function handlechange(){
    let y=document.getElementById("change").value;
    console.log(y);
}
// window-event;
function handleonloadevent(){
    console.log('Hello World');
}

function handleonloadevent(){
    console.log(window.outerHeight,window.outerHeight);
}

window.onresize=handleonloadevent();




