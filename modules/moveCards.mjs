export function moveCards () {
    console.log("This function may move cards..");
    
    //variabel för elementreferens
    var dragged;    

    // element med "drag" attributet aktiveras
    document.addEventListener("drag", function( event ) {

    }, false);

    // vad som ska hända när man börjar dra ett element
    document.addEventListener("dragstart", function( event ) {
        // sparar en referens till elementet
        dragged = event.target;
        // dimmar ner elementet
        event.target.style.opacity = .75;
    }, false);

    // vad som händer när man släpper elementet
    document.addEventListener("dragend", function( event ) {
        // återställer dimmningen
        event.target.style.opacity = "";
    }, false);

    // event för att kunna släppa element i "addzone"
    document.addEventListener("dragover", function( event ) {
        // om man släpper element utanför "addzone" händer ingenting
        event.preventDefault();
    }, false);

    //Bestämmer vad som händer när du håller element över en "addzone"
    document.addEventListener("dragenter", function( event ) {
        if ( event.target.className == "add" ) {
            event.target.style.background = "yellow";
        }

    }, false);

    // återställer "addzone" när element lämnar 
    document.addEventListener("dragleave", function( event ) {
        if ( event.target.className == "add" ) {
            event.target.style.background = "";
        }

    }, false);

    // vad som ska hända vid "drop" av element
    document.addEventListener("drop", function( event ) {
        
        event.preventDefault();
        // flyttar element till vald "addzone"
        if ( event.target.className == "add" ) {
            event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
        }
    
    }, false);

}
    