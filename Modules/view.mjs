var todoid = 0;
var doingid = 0;
var testid = 0;
var doneid = 0;
var cardid = 0;

export function CreateView(){
    let Header = document.createElement('Div');
    Header.setAttribute('id', 'Header');
    document.body.append(Header);
    let Container = document.createElement('Div');
    Container.setAttribute('id', 'Container');
    document.body.append(Container);
    let Footer = document.createElement('Div');
    Footer.setAttribute('id', 'Footer');
    document.body.append(Footer);
    
    document.getElementById("Header").innerHTML = "" + 
    "<div id='header'>" +
    "<nav class='navmenu gradient'>" +
            "<a id='login' onclick='StartView()'>Logga in <i class='far fa-envelope'></i></a>" +           
    "</nav>"+
    "<span id='top'>" +
    "<h1 class='font-effect-shadow-multiple'>KanBan Board</h1>" + 
    "</span>" +
    "</div>" +
    "<hr></hr>" 

    

document.getElementById("Footer").innerHTML = "" +
    "<div id='margin'>" +
    "<div id='footer'>" +
    "<hr></hr>" +
    "<p>Länkar:" +
    "<a href='https://github.com/Haal20/kanbanMeta'>Grupp 1 KanBanMeta GitHub</a>" + 
    "</p>" +
    "</div>" +
    "</div>"
}


export function CreateKanBan(){
    document.getElementById("Container").innerHTML = "" + 
    "<div id='cards'>" +
    "<div id='todo' class='add'>To do<a id='add1'>+</a></div>" +
    "<div id='doing' class='add'>Doing<a id='add2'>+</a></div>" +
    "<div id='test' class='add'>Test<a id='add3'>+</a></div>" +
    "<div id='done' class='add'>Done<a id='add4'>+</a></div>"+
    "</div>"
    document.getElementById("add1").addEventListener("click", function(){InputData("1");});
    document.getElementById("add2").addEventListener("click", function(){InputData("2");});
    document.getElementById("add3").addEventListener("click", function(){InputData("3");});
    document.getElementById("add4").addEventListener("click", function(){InputData("4");});
    document.getElementById("todo").addEventListener("dragover", allowDrop);
    document.getElementById("todo").addEventListener("drop", drop);
    document.getElementById("doing").addEventListener("dragover", allowDrop);
    document.getElementById("doing").addEventListener("drop", drop);
    document.getElementById("test").addEventListener("dragover", allowDrop);
    document.getElementById("test").addEventListener("drop", drop);
    document.getElementById("done").addEventListener("dragover", allowDrop);
    document.getElementById("done").addEventListener("drop", drop);
}

export function InputData(type)
{
    var input = document.createElement("Input");
    input.setAttribute("Type", "Text")
    input.setAttribute("id", "data");
    input.placeholder = 'Add a new card'
    input.value = '';
    document.getElementById('Container').appendChild(input);
    var input = document.getElementById("data");
    if(type === "1"){
        input.addEventListener("keyup", AddToDo);
    }
    else if(type === "2"){
        input.addEventListener("keyup", AddDoing);
    }
    else if(type === "3"){
        input.addEventListener("keyup", AddTest);
    }
    else if(type === "4"){
        input.addEventListener("keyup", AddDone);
    }
    
}

export function EnterEvent(e) {
    if (13 == e.keyCode) {
        AddToDo(document.getElementById("data").value);
        remove('data');
    }
  }

export function AddToDo(e)
{
    if (13 == e.keyCode) {
        var add = document.createElement("div");
        add.setAttribute("id", cardid);
        add.setAttribute("draggable", "true");
        add.addEventListener("dragstart", drag);
        add.addEventListener("click", function(){deleting(this.id);});
        add.innerHTML = document.getElementById("data").value;
        document.getElementById("todo").appendChild(add);
        cardid = cardid + 1
        remove("data");
        console.log[cardid];
    }
}
export function AddDoing(e)
{
    if (13 == e.keyCode) {
        var add = document.createElement("div");
        add.setAttribute("id", cardid);
        add.setAttribute("draggable", "true");
        add.addEventListener("dragstart", drag);
        add.addEventListener("click", function(){deleting(this.id);});
        add.innerHTML = document.getElementById("data").value;
        document.getElementById("doing").appendChild(add);
        cardid = cardid + 1;
        remove("data");
        
    }
}
export function AddTest(e)
{
    if (13 == e.keyCode) {
        var add = document.createElement("div");
        add.setAttribute("id", cardid);
        add.setAttribute("draggable", "true");
        add.addEventListener("dragstart", drag);
        add.addEventListener("click", function(){deleting(this.id);});
        add.innerHTML = document.getElementById("data").value;
        document.getElementById("test").appendChild(add);
        cardid = cardid + 1;
        remove("data");
        console.log[cardid];
    }
}
export function AddDone(e)
{
    if (13 == e.keyCode) {
        var add = document.createElement("div");
        add.setAttribute("id", cardid);
        add.setAttribute("draggable", "true");
        add.addEventListener("dragstart", drag);
        add.addEventListener("click", function(){deleting(this.id);});
        add.innerHTML = document.getElementById("data").value;
        document.getElementById("done").appendChild(add);
        cardid = cardid + 1;
        remove("data");
        console.log[cardid];
    }
}

function remove(Id) {
    var element = document.getElementById(Id);
    element.parentNode.removeChild(element);
}

function deleting(del){
    var txt;
    var r = confirm("Do you want to delete selected item?");
    if (r == true) {
      remove(del);
    } else {
        ;
    }
}


function allowDrop(ev) {
    ev.preventDefault();
    console.log("allow");
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("drag");
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(data);
  }