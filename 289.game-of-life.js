/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    let nextGenerationArr = [];
    for(let row in board){
        for(let col in board[row]){
            if( (board[row][col] === 1) && sumLiveNeigboars(board, row, col) < 2){//Canlı hücrenin 2'den az canlı komşusu
                nextGenerationArr.push([Number(row), Number(col), 0]);
            }else if( (board[row][col] === 1 && sumLiveNeigboars(board, row, col) === 2) || (board[row][col] === 1 && sumLiveNeigboars(board, row, col) === 3) ){
                //Canlı hücrenin 2 veya 3 canlı komşu hücresi
                nextGenerationArr.push([Number(row), Number(col), 1]);
            }else if( (board[row][col] === 1) && sumLiveNeigboars(board, row, col) > 3){//Canlı hücrenin 3'ten fazla canlı komşuları
                nextGenerationArr.push([Number(row), Number(col), 0]);
            }else if( (board[row][col] === 0) && sumLiveNeigboars(board, row, col) === 3 ){//Ölü hücrenin 3 canlı komşusu
                nextGenerationArr.push([Number(row), Number(col), 1]);
            }
        }
    }
    for(let next in nextGenerationArr){//Bir sonraki nesili board'a aktarma.
        board[nextGenerationArr[next][0]][nextGenerationArr[next][1]] = nextGenerationArr[next][2];
    }
};
let sumLiveNeigboars = function(board, row, col){
    let sumLiveNeigh = 0;
    let directions = [
        [-1, -1],   //topLeft,
        [-1, 0],    //top
        [-1, 1],    //topRight
        [0, 1],     //right
        [1, 1],     //rightBottom
        [1, 0],     //bottom
        [1, -1],    //leftBottom
        [0, -1],    //left
    ];
    for(let directionRow in directions){
        //Dizi sınırları içerisindeki komşuları kontrol et.
        if( ((Number(row) + Number(directions[directionRow][0])) > -1 && (Number(row) + Number(directions[directionRow][0])) < board.length)
            &&  ((Number(col) + Number(directions[directionRow][1])) > -1 && (Number(col) + Number(directions[directionRow][1])) < board[row].length) ){
            //Canlı komşular
            if( board[ Number(row) + Number(directions[directionRow][0])][Number(col) + Number(directions[directionRow][1])] === 1){
                sumLiveNeigh++;
            }
        }
    }
    return sumLiveNeigh;
}