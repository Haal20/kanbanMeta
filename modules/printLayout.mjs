export function printLayout() {
let cardArray = ["list1","list3","list2","list4","list3","list2","list4","list2","list1","list2","list3","list1","list4","list2"];

let todo = "<ul>";
let doing = "<ul>";
let test = "<ul>";
let done = "<ul>";
cardArray.forEach(function(card) {
  if(card == "list1"){
    //sortera till todo div
    todo += `<li>Kort 1 här...</li>`;
  }if (card == "list2") {
    //sortera till doing div
    doing += `<li>Kort 2 här...</li>`;
  }if (card == "list3") {
    //sortera till test div
    test += `<li>Kort 3 här...</li>`;
  }if (card == "list4") {
    //sortera till done div
    done += `<li>Kort 4 här...</li>`;
  }else {
    console.log("Error...");
  }
});
document.getElementById("todo").innerHTML +=  todo +"</ul>";
document.getElementById("doing").innerHTML +=  doing +"</ul>";
document.getElementById("test").innerHTML +=  test +"</ul>";
document.getElementById("done").innerHTML +=  done +"</ul>";

}