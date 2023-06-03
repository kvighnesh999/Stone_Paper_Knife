let rule = alert("1)Enter your any one choice(stone , paper or knife)\n 2)Computer will generate its own choice \n3)After entering your choice and wait for the result\n")
let player = prompt("ENTER YOUR CHOICE:\nstone , paper or knife");
let index = Math.floor(Math.random() * 3);
let computer = ["stone", "paper", "knife"][index];
const match = (index, player) => {
    if (computer === player) {
        return "Tie Match,Nobody Wins!";
    }
    else if (computer === "stone" && player === "paper") {
        return "YOU";
    }
    else if (computer === "stone" && player === "knife") {
        return "Computer";
    }
    else if (computer === "paper" && player === "stone") {
        return "Computer";
    }
    else if (computer === "paper" && player === "knife") {
        return "YOU";
    }
    else if (computer === "knife" && player === "stone") {
        return "YOU";
    }
    else if (computer === "knife" && player === "paper") {
        return "Computer";
    }
}
let result = match(index, player);
document.write(`<b>Computer : ${computer} <br><br> You : ${player} <br><br> The winner is : ${result}</b>`);