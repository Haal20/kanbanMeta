import { CreateKanBan } from "./view.mjs";
import { CreateView } from "./view.mjs";

export function logIn()
{
    let Container = document.createElement("div");
    Container.setAttribute("id", "Container");
    document.body.append(Container);
    let logDiv = document.createElement("div")
    logDiv.setAttribute("id", "logIn")
    let userInp = document.createElement("input")
    userInp.setAttribute("placeholder", "Användarnamn")
    let passInp = document.createElement("input")
    passInp.setAttribute("placeholder", "Lösenord")
    let userBtn = document.createElement("button")
    //Variables for inputboxes and button

    Container.append(logDiv)
    logDiv.innerHTML = "<h2>Välkommen till Kanban</h2>"
    logDiv.append(userInp)
    logDiv.append(passInp)
    logDiv.append(userBtn)
    
    userBtn.innerHTML = "Logga in";
   
    

    fetch("User.JSON")
    .then(response => response.json())
    .then(users =>{

    
        if(localStorage.length == 1)
        {
            CreateKanBan();
            CreateView();
        }
       else
       {
        userBtn.addEventListener("click", function(){
            const user = userInp.value;
            const pass = passInp.value;
        for(let i=0; i<users.length; i++)
        {
           if (user == users[i].name && pass == users[i].pass)
            {
                CreateView();
                CreateKanBan();
                localStorage.setItem("user", user)
                break;
                
            }
            else
                {
                logDiv.innerHTML = "Fel kod, har du glömt ditt lösenord?"
                logDiv.appendChild(userBtn)
                userBtn.addEventListener("click", function (){
                location.reload();
                })
        }
        
        }

    })
}
    })

}