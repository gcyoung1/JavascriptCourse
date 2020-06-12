function Player(){

    return {};
}

function gameBoard(size, takeTurn){
    let board = [];
    for(i=0;i<size;i++){
        board[i] = Array(size).fill(0);
    }
    const body = document.querySelector('body');
    container = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${size}, ${640/size}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${640/size}px)`;
    container.style.overflow = 'hidden'
    container.style.display="grid";
    for(let counti = 1;counti<size+1;counti++){
        for(let countj = 1;countj<size+1;countj++){
            const div = document.createElement('div');
            div.id = counti.toString()+countj.toString();
            div.dataset.height = counti-1;
            div.dataset.width = countj-1;
            div.addEventListener('click', takeTurn);
            div.style.gridArea=`${counti}/${countj}/${counti+1}/${countj+1}`;
            div.style.backgroundColor="red";
            div.style.borderStyle = "solid";
            container.appendChild(div);
        }
    }
    body.appendChild(container);

    function updateBoard(player, cell){
        i, j = cell.dataset.height, cell.dataset.width;
        p = document.createElement('p')
        player?p.textContent='o':p.textContent='x';
        p.style.fontSize = "25px";
        cell.style.textAlign = 'center';
        cell.appendChild(p);
        board[i,j]=player;
        return board;
    }
    function reset(){
        board = board.fill(0);
    }
    function valueAtLocation(height, width){
        console.log(height)
        console.log(width)
        console.log(board)
        return board[height][width];
    }
    return {updateBoard, reset, valueAtLocation};
}

game = (function Game(){
    // function resize(size){
    //     board = gameBoard(size);
    //     turn = 0;
    // }
    function newGame(){
        board.reset();
        turn=0;
    }
    function takeTurn(event){
        cell=event.target;
        console.log(board.valueAtLocation(cell.dataset.height,cell.dataset.width));
        if(board.valueAtLocation(cell.dataset.height,cell.dataset.width) == 0){
            console.log("Untaken");
            board.updateBoard(turn, cell);
            turn==0 ? turn = 1 : turn=0;
        }
    }
    board=gameBoard(3, takeTurn);
    turn = 0;

    return {newGame, takeTurn};
})();

