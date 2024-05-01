let goalCan;
let minMoves;
let moves = 0;
let isFirstMove = true;
let start = false;

function startGame() {
    goalCan = Math.floor(Math.random() * 5) + 1;
    console.log(goalCan);
    minMoves = calculateMinMoves(goalCan);
    document.getElementById('minMoves').innerText = minMoves;
    moves = 0;
    document.getElementById('moves').innerText = moves;
    document.getElementById('result').innerText = "";
    resetCans();
    document.getElementById('can' + (16 - goalCan)).classList.add('goal');
    isFirstMove = true;
    start = true;
}

function calculateMinMoves(goal) {
    return goal * 2 - 1;
}

function removeCan(id) {
    if (start) {
        let can = document.getElementById('can' + id);
        if (!can.classList.contains('empty')) {
            if ((isFirstMove && id === 1) || canAboveIsEmpty(id)) {
                can.classList.add('empty');
                moves++;
                document.getElementById('moves').innerText = moves;
                isFirstMove = false;
                if (id === 16 - goalCan) {
                    document.getElementById('result').innerText = "Parabéns, você ganhou!";
                    start = false;
                }
            } else if (isFirstMove && id !== 1) {
                document.getElementById('result').innerText = "Você só pode remover a primeira lata na primeira jogada.";
            } else {
                document.getElementById('result').innerText = "Você só pode remover uma lata se não houver nenhuma apoiada sobre ela.";
            }
        }
    }
}

function canAboveIsEmpty(id) {
    let row = Math.ceil(id / 5);
    let positionInRow = id % 5;
    if (positionInRow === 0) positionInRow = 5;
    for (let i = row - 1; i >= 1; i--) {
        let canAbove = document.getElementById('can' + ((i - 1) * 5 + positionInRow));
        if (!canAbove.classList.contains('empty')) {
            return false;
        }
    }
    return true;
}

function resetCans() {
    for (let i = 1; i <= 15; i++) {
        document.getElementById('can' + i).classList.remove('empty');
        document.getElementById('can' + i).classList.remove('goal');
    }
}
