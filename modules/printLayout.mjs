export function printLayout() {
  console.log("Hello from mjs!");


let kortArray = ["list1","list3","list2","list4","list3","list2","list4","list2","list1","list2","list3","list1","list4","list2"];

let add1 = "<ul>";
let add2 = "<ul>";
let add3 = "<ul>";
let add4 = "<ul>";
kortArray.forEach(function(kort) {
  if(kort == "list1"){
    //sortera till add1 div
    console.log("Kort 1 här...");
    add1 += `<li>Kort 1 här...</li>`;
  }if (kort == "list2") {
    //sortera till add2 div
    console.log("Kort 2 här...");
    add2 += `<li>Kort 2 här...</li>`;
  }if (kort == "list3") {
    //sortera till add3 div
    console.log("Kort 3 här...");
    add3 += `<li>Kort 3 här...</li>`;
  }if (kort == "list4") {
    //sortera till add4 div
    console.log("Kort 4 här...");
    add4 += `<li>Kort 4 här...</li>`;
  }else {
    console.log("Error...");
  }
});
document.getElementById("add1").innerHTML =  add1 +"</ul>";
document.getElementById("add2").innerHTML =  add2 +"</ul>";
document.getElementById("add3").innerHTML =  add3 +"</ul>";
document.getElementById("add4").innerHTML =  add4 +"</ul>";

}