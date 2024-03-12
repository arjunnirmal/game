let user=0;
let computer=0;

const choices = document.querySelectorAll(".choice");
const move = document.querySelector("#move");
const userscore = document.querySelector("#user");
const computerscore = document.querySelector("#computer");

const gencomp = () => {
    const options = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() *3);
    return options[index];
};

const draw = () => {
    console.log("game was draw");
    move.innerText = " game was draw. play again";
    move.style.backgroundColor = "pink";
};

const winner = (userwin, userchoice, compchoice) => {
    if(userwin){
        user++;
        userscore.innerText = user;
        console.log("you win !");
        move.innerText = `you win ! your ${userchoice} beats ${compchoice} `;
        move.style.backgroundColor = "green";
    }else{
        computer++;
        computerscore.innerText = computer;
        console.log("you lose !");
        move.innerText = `you win ! your ${compchoice} beats ${userchoice} `;
        move.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("userchoice =",userchoice);
    const compchoice = gencomp();
    console.log("compchoice =",compchoice);

    if(userchoice === compchoice){
        draw();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }
    else{
        userwin = compchoice === "rock" ? false : true;
        }
    winner(userwin, userchoice, compchoice);
    }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});