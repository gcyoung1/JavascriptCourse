game = (function Game(){
    board=gameBoard(3);
    function resize(size){
        board = gameBoard(size);
        turn = 0;
    }
    function newGame(){
        board.reset();
        turn=0;
    }
    return {newGame, resize};
})();

function Player(){

    return {};
}

function gameBoard(size){
    let board = [];
    for(i=0;i<size;i++){
        board[i] = Array(size).fill(0);
    }

    function move(player, location){
        i, j = location;
        board[i,j]=player;
        return board;
    }
    function reset(
        board = board.fill(0);
    )
    return {move, reset};
}


