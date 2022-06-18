const GetTileAtIndex = (list, index) => {
    return list.flatMap(x => x).find(x => x.index === index);
}; 

const CalculateMove = (boardState, indexOfPiece) => {
    const boardStateCopy = [...boardState];
    const piece = GetTileAtIndex(boardStateCopy, indexOfPiece);

    switch(piece.piece){
        case "Pawn":
            return PawnMove(boardStateCopy, piece);
        case "Bishop":
            return BishopMove(boardStateCopy, piece);
        case "Knight":
            return KnightMove(boardStateCopy, piece);
        case "Rook":
            return RookMove(boardStateCopy, piece);
        case "Queen":
            return QueenMove(boardStateCopy, piece);
        case "King":
            return KingMove(boardStateCopy, piece);
        default:
            return boardStateCopy;
    };
};

const PawnMove = (boardStateCopy, piece) =>{
    const pieceToMove = piece;

    let rowMovement = -1;
    let startRow = 6;
    let finalRow = 0;
    let oppositeColor = "White";
    if(pieceToMove.pieceColor === "White"){
        startRow = 1;
        rowMovement = 1;
        finalRow = 7;
        oppositeColor = "Black";
    };

    const legalMoves = boardStateCopy.map(x => x.map(tile => {
        let tileCopy = {...tile};
        let canMoveTo = true;

        if(pieceToMove.rowIndex === startRow){
            if(((tileCopy.rowIndex !== pieceToMove.rowIndex + rowMovement) && 
                (tileCopy.rowIndex !== pieceToMove.rowIndex + (rowMovement * 2)) || 
                (pieceToMove.tileIndex !== tileCopy.tileIndex)) || 
                tileCopy.piece !== "")
            {
                canMoveTo = false;
            };
        }else{
            if(tileCopy.rowIndex !== pieceToMove.rowIndex + rowMovement || 
                pieceToMove.tileIndex !== tileCopy.tileIndex ||
                tileCopy.piece !== "")
            {
                canMoveTo = false;
            };
        };

        if(Math.abs(tileCopy.rowIndex - pieceToMove.rowIndex) === Math.abs(tileCopy.tileIndex - pieceToMove.tileIndex) &&
            tileCopy.rowIndex - pieceToMove.rowIndex === rowMovement &&
            (tileCopy.tileIndex- pieceToMove.tileIndex === - 1 ||
            tileCopy.tileIndex - pieceToMove.tileIndex === 1) &&
            tileCopy.pieceColor === oppositeColor)
        {
            canMoveTo = true;
        };

        tileCopy.canMoveTo = canMoveTo;
        return tileCopy;
    }))

    return legalMoves;
};

const BishopMove = (boardStateCopy, piece) =>{
    const pieceToMove = piece;

    const IsNotBlocked = (tileData) => {
        const [pieceRow, pieceTile] = [pieceToMove.rowIndex, pieceToMove.tileIndex];
        const [moveRow, moveTile] = [tileData.rowIndex, tileData.tileIndex];

        const diagonalCheck1 = Math.abs(pieceRow - moveRow);
        const diagonalCheck2 = Math.abs(pieceTile - moveTile);

        let canMoveTo = true;
        
        if(diagonalCheck1 !== diagonalCheck2){
            return false;
        };

        // for(let i = 0; i < diagonalCheck1; i--){

        //     if(boardStateCopy.flatMap(x => x).find(x => x.rowIndex === i && x.tileIndex === i).piece !== ""){
        //         canMoveTo = false;
        //     };
        // };

        return canMoveTo;

    };

    const updatedBoardState = boardStateCopy.map((element) => {
        return element.map(x => {
            let tileData = {...x};
            let canMoveTo = false;

            if(tileData.pieceColor !== pieceToMove.pieceColor && 
                IsNotBlocked(tileData)
            ){
                canMoveTo = true;
            };
    
            tileData.canMoveTo = canMoveTo;
            return tileData;
        });
    });

    return updatedBoardState;
};

const KnightMove = (boardStateCopy, piece) =>{
    return boardStateCopy;
};

const RookMove = (boardStateCopy, piece) =>{
    const pieceToMove = piece;

    const IsNotBlocked = (tileData) => {
        const [pieceRow, pieceTile] = [pieceToMove.rowIndex, pieceToMove.tileIndex];
        const [moveRow, moveTile] = [tileData.rowIndex, tileData.tileIndex];

        const rowCheck = pieceRow === moveRow;
        const tileCheck = pieceTile === moveTile;

        let canMoveTo = true;
        
        if(rowCheck === false && tileCheck === false){
            return false;
        };

        // for(let i = 0; i < diagonalCheck1; i--){

        //     if(boardStateCopy.flatMap(x => x).find(x => x.rowIndex === i && x.tileIndex === i).piece !== ""){
        //         canMoveTo = false;
        //     };
        // };

        return canMoveTo;

    };

    const updatedBoardState = boardStateCopy.map((element) => {
        return element.map(x => {
            let tileData = {...x};
            let canMoveTo = false;

            if(tileData.pieceColor !== pieceToMove.pieceColor && 
                IsNotBlocked(tileData)
            ){
                canMoveTo = true;
            };
    
            tileData.canMoveTo = canMoveTo;
            return tileData;
        });
    });

    return updatedBoardState;
};

const QueenMove = (boardStateCopy, piece) =>{
    const pieceToMove = piece;

    const diagonalMoves = BishopMove(boardStateCopy, pieceToMove);
    const rookMoves = RookMove(boardStateCopy, pieceToMove);

    let queenMoves = [];

    for (let i = 0; i < boardStateCopy.length; i++){
        let shortList = [];
        for(let j = 0; j < boardStateCopy[0].length; j++){
            const rookMove = rookMoves[i][j];
            const diagonalMove = diagonalMoves[i][j];

            if(rookMove.canMoveTo){
                shortList.push(rookMove);
            }
            else if(diagonalMove.canMoveTo){
                shortList.push(diagonalMove);
            }
            else{
                shortList.push(boardStateCopy[i][j]);
            };
        };
        queenMoves.push(shortList);
    };

    return queenMoves;
};

const KingMove = (boardStateCopy, piece) =>{
    return boardStateCopy;
};

export default CalculateMove;