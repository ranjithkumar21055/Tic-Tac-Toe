let boxes = document.querySelectorAll(".box");
let turn0 = true;
let winMsg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")
let btn = document.querySelector("#new-btn")
let resetBtn = document.querySelector(".resetBtn")
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }

}
const enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const resetGame = () => {
    turn0 = true;
    enableBtn();
    msgContainer.classList.add("hide");
    count = 0;
}



let count = 0
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true
        checkWinner();
    })

    showWinner = (winner) => {
        winMsg.innerText = `Congratulations, the winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBtn();

    }

    draw = () => {
        if (count == 9) {
            winMsg.innerText = `Draw`;
            msgContainer.classList.remove("hide");
            disableBtn();
        }
    }

})


checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val)
            }
            else {
                draw();
            }
        }
    }
}
btn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
