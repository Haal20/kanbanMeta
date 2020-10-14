//import { cardInput, createCardElement, updateLocalStorage, addCard } from './Modules/createCards.mjs';
import { printLayout } from "./printLayout.mjs";

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
            "<a id='login'>Logga ut <i class='far fa-envelope'></i></a>" +           
    "</nav>"+
    "<span id='top'>" +
    "<h1 class='font-effect-shadow-multiple'>KanBan Board</h1>" + 
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
    let input = document.createElement('Input')
    input.setAttribute('Type', 'Text');
    input.setAttribute('id', 'inputData');
    input.placeholder = "Add a new card";
    document.getElementById('Container').appendChild(input); 
    if (type === '1'){
        input.addEventListener('keyup', addCard('todo'));
    }
    else if (type === '2'){
        input.addEventListener('keyup', addCard('doing'));
    }
    else if (type === '3'){
        input.addEventListener('keyup', addCard('test'));
    }
    else if (type === '4'){
        input.addEventListener('keyup', addCard('done'));
    }
}

export function createCardElement(cardType, text){
    let card = document.createElement('div');
    card.setAttribute('class', 'card')
    card.setAttribute('data-type', cardType)
    card.id = '_' + Math.random().toString(36).substr(2,9);
    card.setAttribute("draggable", true);
    card.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain',null)");
    card.addEventListener('click', function(){
        let result = window.confirm('Är det säkert att du vill ta bort kortet?')
        if (result){
            card.remove()
            updateLocalStorage()
        }

    });
    card.innerHTML = text;
    document.getElementById(cardType).appendChild(card);
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
    console.log(allCards)
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
