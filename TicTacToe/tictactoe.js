function Player(){

    return {};
}

function gameBoard(size, takeTurn){
    let board = [];
    for(i=0;i<size;i++){
        board[i] = Array(size).fill(0);
    }
    


    function checkWin(){
        for(let i = 0;i<size;i++){
            if(board[0][i]>0&&board[0][i]==board[1][i]&&board[1][i]==board[2][i]){
                return board[0][i];
            }
            if(board[i][0]>0&&board[i][0]==board[i][1]&&board[i][1]==board[i][2]){
                return board[i][0];
            }
        }

        if(board[0][0]>0&&board[0][0]==board[1][1]&&board[1][1]==board[2][2]){
            return board[0][0];
        }
        if(board[0][2]>0&&board[0][2]==board[1][1]&&board[1][1]==board[2][0]){
            return board[0][2];
        }
        return 0;
    }

    function updateBoard(player, cell){
        p = cell.querySelector('p');
        player==2?p.textContent='o':p.textContent='x';
        board[cell.dataset.height][cell.dataset.width]=player;
        return checkWin();
    }
    function reset(){
        board.forEach(elem=>elem.fill(0));;
        ps=Array.from(document.querySelectorAll('p'));
        ps.forEach(p=>p.textContent='');
    }
    function valueAtLocation(height, width){
        return board[height][width];
    }
    return {updateBoard, reset, valueAtLocation};
}

game = (function Game(){
    size=3;
    function newGame(){
        board.reset();
        turn=1;
        winnerBanner.textContent = '';
    }
    function winner(winner){
        turn = 0;
        winnerBanner.textContent = `Player ${winner} wins!`;
    }

    function takeTurn(event){
        cell=event.target;
        console.log(board.valueAtLocation(cell.dataset.height,cell.dataset.width));
        if(turn&&board.valueAtLocation(cell.dataset.height,cell.dataset.width) == 0){
            temp = board.updateBoard(turn, cell);
            if(temp){
                winner(temp);
            }else{
                turn==1 ? turn = 2 : turn=1;
            }
        }
    }
    board=gameBoard(size);
    turn = 1;
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
            p = document.createElement('p');
            p.style.fontSize = "25px";
            div.style.textAlign = 'center';
            div.appendChild(p);
            container.appendChild(div);
        }
    }
    body.appendChild(container);
    
    let reset = document.createElement('button');
    reset.addEventListener('click', ()=>newGame);
    body.appendChild(reset);
    
    let winnerBanner = document.createElement('p');
    body.appendChild(winnerBanner);



    return {newGame, takeTurn};
})();

