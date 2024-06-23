const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML); 
}


createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagname==="IMG"){
        e.target.parentelement.remove();
updateStorage();
}
else if(e.target.tagName==="p"){
    notes=document.querySelectorAll(".input-box");
    notes.forEach(nt=>{nt.onkeyup=function*(){
        updateStorage();
    }})
    document.addEventListener("keydown",Event=>{
        if(Event.key==="enter"){
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    })
}
})


