let goalCan;
let minMoves;
let moves = 0;
let isFirstMove = true;
let start = false;
let min = [5, 8, 9, 8, 5];
let dist = [  // id
    [ 1, -1], //  2
    [ 1, -1], //  3
    [ 2, -1], //  4
    [ 2,  3], //  5
    [ 3, -1], //  6
    [ 4, -1], //  7
    [ 4,  5], //  8
    [ 5,  6], //  9
    [ 6, -1], // 10
    [ 7, -1], // 11
    [ 7,  8], // 12
    [ 8,  9], // 13
    [ 9, 10], // 14
    [10, -1]  // 15
];

// Começa o jogo
function startGame() {
    goalCan = Math.floor(Math.random() * 5) + 1;
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
    return min[goal-1];
}

// Controla o movimento da lata
function removeCan(id) {
    if (start) {
        let can = document.getElementById('can' + id);
        if (!can.classList.contains('empty')) {
            if (isFirstMove && id !== 1) {
                document.getElementById('result').innerText = "Você só pode remover a primeira lata na primeira jogada.";
            } else if (checkIsEmpty(id)) {
                can.classList.add('empty');
                moves++;
                document.getElementById('moves').innerText = moves;
                isFirstMove = false;
                if (id === 16 - goalCan) {
                    document.getElementById('result').innerText = "Parabéns, você ganhou!";
                    start = false;
                }
            } else {
                document.getElementById('result').innerText = "Você só pode remover uma lata se não houver nenhuma apoiada sobre ela.";
            }
        }
    }
}

// Verifica se tem lata em cima (recursivo)
function checkIsEmpty_rec(id) {
    if (id <= 1) return true;
    let canAbove = document.getElementById('can' + id);
    if (!canAbove.classList.contains('empty')) {
        return false;
    }

    let above1 = checkIsEmpty_rec(dist[id-2][0]);
    let above2 = checkIsEmpty_rec(dist[id-2][1]);

    return above1 && above2;
}

// Verifica se tem lata em cima
function checkIsEmpty(id) {
    if (id == 1) return true;

    let above1 = checkIsEmpty_rec(dist[id-2][0]);
    let above2 = checkIsEmpty_rec(dist[id-2][1]);

    return above1 && above2;
}

// Restaura valores para o inicial
function resetCans() {
    for (let i = 1; i <= 15; i++) {
        document.getElementById('can' + i).classList.remove('empty');
        document.getElementById('can' + i).classList.remove('goal');
    }
}
