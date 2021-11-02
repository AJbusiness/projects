let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");
let box9 = document.querySelector("#box9");

let xo = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

let show = 0;

function clickAction(){
    if(this.innerHTML == ""){
        this.innerHTML = `<p>${xo[show]}</p>`; 
        show += 1;
        setTimeout(check, 50)
    }}

box1.addEventListener("click", clickAction);
box2.addEventListener("click", clickAction);
box3.addEventListener("click", clickAction);
box4.addEventListener("click", clickAction);
box5.addEventListener("click", clickAction);
box6.addEventListener("click", clickAction);
box7.addEventListener("click", clickAction);
box8.addEventListener("click", clickAction);
box9.addEventListener("click", clickAction);


let won = 0;

// function for win logic
function check() {
     
    if(box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML && box1.innerHTML != ""){
        alert(`${xo[show - 1]}'s won'`);
        won +=1;
        location.reload();
        
    };
    if(box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML && box4.innerHTML != ""){
        alert(`${xo[show - 1]}'s won'`);
        won +=1;
        location.reload();
    };
    if(box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML && box7.innerHTML != ""){
        alert(`${xo[show - 1]}'s won'`);
        won +=1;
        location.reload();
    };
    if(box1.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML && box1.innerHTML != ""){
        alert(`${xo[show - 1]}'s won'`);
        won +=1;
        location.reload();
    };
    if(box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML && box2.innerHTML != ""){
        alert(`${xo[show - 1]}'s won'`);
        won +=1;
        location.reload();
    };
    if(box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML && box3.innerHTML != ""){
        alert(`${xo[show - 1]}'s won'`);
        won +=1;
        location.reload();
    };
    if(box1.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML && box1.innerHTML !=""){
        alert(`${xo[show - 1]}'s won'`);
        won +=1;
        location.reload();
    }
    if(box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML && box3.innerHTML != ""){
        alert(`${xo[show - 1]}'s won'`);
        won +=1;
        location.reload();
    }
    if(box1.innerHTML != "" && box2.innerHTML != "" && box3.innerHTML != "" && box4.innerHTML != "" && box5.innerHTML != "" && box6.innerHTML != "" && box7.innerHTML != "" && box8.innerHTML != "" && box9.innerHTML != "" && won == 0){
        alert("Draw");
        location.reload();
    }
}


