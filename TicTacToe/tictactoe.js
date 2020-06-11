function Player(){

    return {};
}

function gameBoard(size, game){
    let board = [];
    for(i=0;i<size;i++){
        board[i] = Array(size).fill(0);
    }
    const body = document.querySelector('body');
    container = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${size}, ${640/size}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${640/size}px)`;
    container.style.overflow = 'hidden'
    for(let counti = 1;counti<size+1;counti++){
        for(let countj = 1;countj<size+1;countj++){
            const div = document.createElement('div');
            div.id = counti.toString()+countj.toString();
            div.dataset.location = [counti,countj];
            div.addEventListener('click', ()=>game.takeTurn);
            div.style.gridArea=`${counti}/${countj}/${counti+1}/${countj+1}`;
            div.style.backgroundColor="blue";
            div.style.borderStyle = "solid";
            container.appendChild(div);
        }
    }
    body.appendChild(container);

    function updateBoard(player, cell){
        i, j = cell.dataset.location;
        cell.textContent=player;
        board[i,j]=player;
        return board;
    }
    function reset(){
        board = board.fill(0);
    }
    return {updateBoard, reset};
}

game = (function Game(){
    board=gameBoard(3, this);
    // function resize(size){
    //     board = gameBoard(size);
    //     turn = 0;
    // }
    function newGame(){
        board.reset();
        turn='x';
    }
    function takeTurn(cell){
        if(board[cell.dataset.location[0], cell.dataset.location[1]] == 0){
            board.updateBoard(turn, cell);
        }
        turn=='x' ? "o" : "x";
    }
    return {newGame, takeTurn};
})();

