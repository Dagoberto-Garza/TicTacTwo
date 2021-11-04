'use strict';

var playerOne = true;
var board = [[":)", ":", ":)"], [")", ":)", ":)"], [":)", ":)", ":)"]];
document.addEventListener('DOMContentLoaded', () => {
    var table = document.querySelector('table');
    var jumbotron = document.getElementById("jumbotron");
    jumbotron.style.display = 'none';
    setTable(table);
    console.dir(table);

    // print();
    table.addEventListener('click', event => {
        var box = event.target;
        box.innerHTML = playerOne ? "X" : "O";
        box.style.backgroundColor = playerOne ? 'red' : 'aqua';
        playerOne = !playerOne;
        
        if (hasWon()) {

        }
    })
});

function print() {
    console.log(board);
}

function setTable(table) {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            table.rows[x].children[y].innerHTML = board[x][y];

        }
    }
}

function hasWon() {

}