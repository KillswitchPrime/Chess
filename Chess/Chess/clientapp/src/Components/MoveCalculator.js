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
    return boardStateCopy;
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

        console.log(diagonalCheck1, diagonalCheck2, tileData)

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

    console.log(updatedBoardState);

    return updatedBoardState;
};

const KnightMove = (boardStateCopy, piece) =>{
    return boardStateCopy;
};

const RookMove = (boardStateCopy, piece) =>{
    return boardStateCopy;
};

const QueenMove = (boardStateCopy, piece) =>{
    return boardStateCopy;
};

const KingMove = (boardStateCopy, piece) =>{
    return boardStateCopy;
};

export default CalculateMove;