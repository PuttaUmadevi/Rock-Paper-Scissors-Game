
// accessing all the required elements
let choices=document.querySelectorAll(".choice");
let userscore=0;
let compsocre=0;
let userS=document.querySelector("#user"); // userscore display text para
let compS=document.querySelector("#comp"); // computer score display text para
let msgPara=document.querySelector("#msg"); // displaying winner msg
console.log(msgPara.innerText);


// addeventlistener for each choice
choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})


//generating random choice for computer
const generateComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    let computer=Math.floor(Math.random()*3);
    return options[computer];
}

// printing playerchoice and computer choice
const playgame = (userchoice)=>{
    console.log("user choice ",userchoice);
    let computerchoice = generateComputerChoice();
    console.log(computerchoice);

    if (userchoice === computerchoice){
        drawgame(userchoice);
    }
    else{
        playerwin=true;
        if (userchoice === "rock"){
            playerwin = computerchoice === "scissors" ? true : false;
        }
        else if(userchoice === "paper"){
            playerwin = computerchoice === "rock" ? true : false;
        }
        else{
            playerwin = computerchoice === "paper" ? true : false;
        }
        show_winner(playerwin,userchoice,computerchoice);
        //display winner msg
    }
}

//displaying winner msg
const show_winner=(userwin,userchoice,computerchoice)=>{
    // if the player has won
    if (userwin){
        console.log("Congratualtions...!! You won!");
        msgPara.innerText=`Congratualtions...!! You won! 
                                            ${userchoice} beats ${computerchoice}`;
        userscore++;
        userS.innerText=userscore;
    }
    //if player loss
    else{
        console.log("You lost! Try again.");
        msgPara.innerText=`You lost! Try again. 
                                    ${computerchoice} beats ${userchoice}`;
        compsocre++;
        compS.innerText=compsocre;
    }
}

// all cases of game
const drawgame=(userchoice)=>{
    console.log("It's a draw");
    msgPara.innerText=`It is a draw match
                        You and The computer has choosen ${userchoice}`;

}




