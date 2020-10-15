import { CreateView, CreateKanBan} from './view.mjs';
//Use this function for adding Header and footer

export function logIn(){
    let Content = document.createElement("div");
    Content.setAttribute("id", "Content");
    document.body.append(Content);
    let logDiv = document.createElement("div")
    logDiv.setAttribute("id", "logIn")
    let userInp = document.createElement("input")
    userInp.setAttribute("placeholder", "Användarnamn")
    let passInp = document.createElement("input")
    passInp.setAttribute("placeholder", "Lösenord")
    passInp.setAttribute("type", "password");
    let userBtn = document.createElement("button")
    //Variables for inputboxes and button

    Content.append(logDiv)
    logDiv.innerHTML = "<h2>Välkommen till Kanban</h2>"
    logDiv.append(userInp)
    logDiv.append(passInp)
    logDiv.append(userBtn)
    //Login page
    
    userBtn.innerHTML = "Logga in";
   
    

    fetch("User.JSON")
    .then(response => response.json())
    .then(users =>{

    
        if(localStorage.getItem("user") !== null)
        {
            CreateView(localStorage.getItem("user"));
            CreateKanBan();
            Content.remove();
        }
       else
       {
        userBtn.addEventListener("click", function(){
            const user = userInp.value;
            const pass = passInp.value;
            //Variables for Inputs
        for(let i=0; i<users.length; i++)
        {
           if (user == users[i].name && pass == users[i].pass)
            {
                CreateView(user);
                CreateKanBan();
                Content.remove();
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