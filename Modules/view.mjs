//import { cardInput, createCardElement, updateLocalStorage, addCard } from './Modules/createCards.mjs';
import { printLayout } from "./printLayout.mjs";

export function CreateView(user){
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
            "<a id='login'>Logga ut <i class='far fa-envelope'></i></a>" +           
    "</nav>"+
    "<span id='top'>" +
    "<h1 class='font-effect-shadow-multiple'>KanBan Board</h1>" + 
    "<h2>Välkommen " + user  + "</h2>" +
    "</span>" +
    "</div>" +
    "<hr></hr>" 

    document.getElementById('login').addEventListener('click', function(){
        localStorage.removeItem("user")
        location.reload();
    });
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
    document.getElementById('add1').addEventListener('click', function(){
        console.log("add1")
        cardInput('1');
    });
    document.getElementById('add2').addEventListener('click', function(){cardInput('2');});
    document.getElementById('add3').addEventListener('click', function(){cardInput('3');});
    document.getElementById('add4').addEventListener('click', function(){cardInput('4');});
    printLayout();
    
}

export function cardInput(type){
    var checkTextFieldExist = document.getElementById("inputData");
    if(checkTextFieldExist == null) {
        let input = document.createElement('Input')
        input.setAttribute('Type', 'Text');
        input.setAttribute('id', 'inputData');
        input.placeholder = "Add a new card";
        document.getElementById('Container').appendChild(input); 
        if (type === '1'){
            input.addEventListener('keyup', addCard('todo'));
            document.getElementById("inputData").select();
        }
        else if (type === '2'){
            input.addEventListener('keyup', addCard('doing'));
            document.getElementById("inputData").select();
        }
        else if (type === '3'){
            input.addEventListener('keyup', addCard('test'));
            document.getElementById("inputData").select();
        }
        else if (type === '4'){
            input.addEventListener('keyup', addCard('done'));
            document.getElementById("inputData").select();
        }
    }
}

export function createCardElement(cardType, text){
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('data-type', cardType);
    card.id = '_' + Math.random().toString(36).substr(2,9);
    card.setAttribute("draggable", true);
    card.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain',null)");
    var test = "edit" + card.id;
    var d = "del" + card.id;
    card.innerHTML = text + "<a id='" + test.toString() + "'><i class='fas fa-edit'></i></a>" + "<a id='" + d.toString() + "'><i class='fas fa-trash'></i></a>";
    document.getElementById(cardType).appendChild(card);
    document.getElementById(test).addEventListener('click', function(){editcard(this.id);});
    document.getElementById(d).addEventListener('click', function(){
        let result = window.confirm('Är det säkert att du vill ta bort kortet?')
        if (result){
            card.remove()
            updateLocalStorage()
        }

    });
}

export function updateLocalStorage(){
    let allCards = [];
    document.querySelectorAll('.card').forEach(card => {
        const object = {
            type: card.dataset.type,
            text: card.innerText
        }
        allCards.push(object)
    })
    //console.log(allCards).innerHTML
    localStorage.setItem('myCards', JSON.stringify(allCards))
}

export function addCard(cardType){
    return function(event){
        if (event.keyCode == 13) {
            let input = document.getElementById('inputData')
            createCardElement(cardType, input.value)
            input.remove();
            updateLocalStorage();
        }
    }
}

export function editcard(id)
{
    var cardid = id.replace('edit', '');
    var card = document.getElementById(cardid);
    let input = document.createElement('Input')
    input.setAttribute('Type', 'Text');
    input.setAttribute('id', 'inputData');
    input.placeholder = "edit card";
    document.getElementById('Container').appendChild(input); 
    input.addEventListener("keyup", function(event) {
        if (event.keyCode == 13) {
         event.preventDefault();
         let input = document.getElementById('inputData')
            card.innerHTML = "";
            var test = "edit" + cardid;
            var d = "del" + card.id;
            card.innerHTML = input.value + "<a id='" + test.toString() + "'><i class='fas fa-edit'></i></a>" + "<a id='" + d.toString() + "'><i class='fas fa-trash'></i></a>";
            document.getElementById(test).addEventListener('click', function(){
            
                editcard(this.id);
                updateLocalStorage();
            
            });
            
            
            document.getElementById(d).addEventListener('click', function(){
                let result = window.confirm('Är det säkert att du vill ta bort kortet?')
                if (result){
                    card.remove()
                    updateLocalStorage()
                }
        
            });

            input.remove();
            updateLocalStorage();
        }
      });
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
