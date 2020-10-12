export function printLayout() {
  console.log("Hello from mjs!");


let kortArray = ["list1","list3","list2","list4","list3","list2","list4","list2","list1","list2","list3","list1","list4","list2"];

let todo = "<ul>";
let doing = "<ul>";
let test = "<ul>";
let done = "<ul>";
kortArray.forEach(function(kort) {
  if(kort == "list1"){
    //sortera till add1 div
    console.log("Kort 1 här...");
    todo += `<li>Kort 1 här...</li>`;
  }if (kort == "list2") {
    //sortera till add2 div
    console.log("Kort 2 här...");
    doing += `<li>Kort 2 här...</li>`;
  }if (kort == "list3") {
    //sortera till add3 div
    console.log("Kort 3 här...");
    test += `<li>Kort 3 här...</li>`;
  }if (kort == "list4") {
    //sortera till add4 div
    console.log("Kort 4 här...");
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