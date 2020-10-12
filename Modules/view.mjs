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
    "<div id='todo' class='add'>To do<a id='add1 onclick='AddToDo()'>+</a></div>" +
    "<div id='doing' class='add'>Doing<a id='add2' onclick='Adddoing()'>+</a></div>" +
    "<div id='test' class='add'>Test<a id='add3' onclick='Addtest()'>+</a></div>" +
    "<div id='done' class='add'>Done<a id='add4' onclick='Adddone()'>+</a></div>"+
    "</div>"
}



