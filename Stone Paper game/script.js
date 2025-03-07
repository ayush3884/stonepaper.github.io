const btnEle = document.querySelectorAll("button")

const userScoreEle=document.getElementById("user-score")
const compScoreEle=document.getElementById("com-score")
// const resultEle=document.getElementById("Result")

const resultEle = document.getElementById("Result")

let userScore = 0;
let compScore = 0;

btnEle.forEach((btn) => {
    btn.addEventListener("click", () => {
        // console.log("you click on ", btn.id);
        // console.log("computer coice", comChoice());
        const result = playRound(btn.id,comChoice())
        // console.log(result)
        resultEle.textContent = result

    })
})


function comChoice() {
    const choices = ["Rock", "Paper", "Scissor"]
    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice]

}
function playRound(userSelection, compSelection) {
    if (userSelection === compSelection) {
        return "it is tie!"
    }
    else if (
        (userSelection === "Rock" && compSelection === "Scissor") || (userSelection === "Paper" && compSelection === "Rock") || (userSelection === "Scissor" && compSelection === "Paper")
    )
    {
        userScore++
        userScoreEle.textContent = userScore
        return `You won! ${userSelection} beats ${compSelection}`
    }
    else{
        compScore++
        compScoreEle.textContent = compScore
        return `You lose! ${userSelection} beats ${compSelection}`
    }
}