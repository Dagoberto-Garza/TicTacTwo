'use strict';

var playerOne = true;
var board = [[":)", ":", ":)"], [")", ":)", ":)"], [":)", ":)", ":)"]];
var numClicks = 0;
var winner = "";
document.addEventListener('DOMContentLoaded', () => {
    var table = document.querySelector('table');
    var jumbotron = document.getElementById("jumbotron");
    var printButton = document.getElementById("print");
    jumbotron.style.display = 'none';
    setTable(table);
    console.dir(table);

    printButton.addEventListener('click', event => {
        print();
    })

    // print();
    table.addEventListener('click', event => {
        var box = event.target;
        box.innerHTML = playerOne ? "X" : "O";
        box.style.backgroundColor = playerOne ? 'red' : 'aqua';
        playerOne = !playerOne;
        numClicks = numClicks + 1;
        event.stopImmediatePropagation();
        $( `#${box.id}` ).click(function( event ) {
            event.stopPropagation();
          });
        setBox(box);
        if (numClicks >= 5) {
            hasWon();

        }
    })
});

function print() {
    console.log(winner);
    console.log(numClicks);
}

function setTable(table) {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            table.rows[x].children[y].innerHTML = board[x][y];

        }
    }
}

function setBox(box) {
    var boxIndex = parseInt(box.id);

    switch (true) {
        case boxIndex >= 0 && boxIndex <= 2: {
            if (boxIndex == 0) {
                board[0][0] = box.innerHTML;

            }
            else if (boxIndex < 2) {
                board[0][1] = box.innerHTML;
            }
            else {
                board[0][2] = box.innerHTML;
            }

            console.log(`case 1 ${boxIndex}`);

            break;
        }

        case boxIndex >= 3 && boxIndex <= 5:
            if (boxIndex == 3) {
                board[1][0] = box.innerHTML;
            }
            else if (boxIndex < 5) {
                board[1][1] = box.innerHTML;
            }
            else {
                board[1][2] = box.innerHTML;
            }
            break;

        case boxIndex >= 6 && boxIndex <= 8:
            if (boxIndex == 6) {
                board[2][0] = box.innerHTML;
            }
            else if (boxIndex < 8) {
                board[2][1] = box.innerHTML;
            }
            else {
                board[2][2] = box.innerHTML;
            }
            break;

        default:
            console.log('You suck at tic tack toe');


    }

}

function hasWon() {
    var middleBox = board[1][1];
    var topLeft = board[0][0];
    var bottomRight = board[2][2];

    //Middle Verticle Win
    if(middleBox === board[0][1] && middleBox === board[2][1]){
        winner = middleBox;
    }
    //Middle Horizontal
    if(middleBox === board[1][0] && middleBox === board[1][2]){
        winner = middleBox;
    }
    //Middle Left Diagonal
    if(middleBox === board[0][0] && middleBox === board[2][2]){
        winner = middleBox;
    }
    //Middle Right Diagonal
    if(middleBox === board[2][0] && middleBox === board[0][2]){
        winner = middleBox;
    }
    //topLeft Verticle
    if(topLeft === board[1][0] && topLeft === board[2][0]){
        winner = topLeft;
    }
    //topLeft Horizontal
    if(topLeft === board[0][1] && topLeft === board[0][2]){
        winner = topLeft;
    }
    //bottomRight Verticle
    if(bottomRight === board[1][2] && bottomRight === board[0][2]){
        winner = bottomRight;
    }
    //bottomRight Horizontal
    if(bottomRight === board[2][0] && bottomRight === board[2][1]){
        winner = bottomRight;
    }
}