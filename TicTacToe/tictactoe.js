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



    function checkWin(){
        board.forEach(elem=>{
            elem=elem.reduce((a,b)=>a+b);
            if(elem%3==0){
                return elem/3;
            }
        });
        let cols = board.reduce((a,b)=>a.map((c,i)=>b[i]+c));
        cols.forEach(elem=>{
            if(elem%3 == 0){
                return elem/3;
            }
        })
        let temp = board[0][0]+board[1][1]+board[2][2];
        if(temp%3 == 0){
            return temp/3;
        }
        temp = board[0][2]+board[1][1]+board[2][0];
        if(temp%3 == 0){
            return temp/3;
        }
        return 0;
    }

    function updateBoard(player, cell){
        p = document.createElement('p')
        player==2?p.textContent='o':p.textContent='x';
        p.style.fontSize = "25px";
        cell.style.textAlign = 'center';
        cell.appendChild(p);
        board[cell.dataset.height][cell.dataset.width]=player;
        return checkWin();
    }
    function reset(){
        board = board.fill(0);
    }
    function valueAtLocation(height, width){
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
        turn=1;
    }
    function takeTurn(event){
        cell=event.target;
        console.log(board.valueAtLocation(cell.dataset.height,cell.dataset.width));
        if(board.valueAtLocation(cell.dataset.height,cell.dataset.width) == 0){
            console.log("Untaken");
            console.log(board.updateBoard(turn, cell));
            turn==1 ? turn = 2 : turn=1;
        }
    }
    board=gameBoard(3, takeTurn);
    turn = 1;

    return {newGame, takeTurn};
})();

