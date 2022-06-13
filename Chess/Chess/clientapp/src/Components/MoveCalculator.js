const GetTileAtIndex = (list, index) => {
    return list.flatMap(x => x).find(x => x.index === index);
}; 

const CalculateMove = (boardState, indexOfPiece) => {
    const boardStateCopy = [...boardState];
    const piece = GetTileAtIndex(boardStateCopy, indexOfPiece).piece;

    switch(piece){
        case "Pawn":
            return PawnMove(boardStateCopy, indexOfPiece);
        case "Bishop":
            return BishopMove(boardStateCopy, indexOfPiece);
        case "Knight":
            return KnightMove(boardStateCopy, indexOfPiece);
        case "Rook":
            return RookMove(boardStateCopy, indexOfPiece);
        case "Queen":
            return QueenMove(boardStateCopy, indexOfPiece);
        case "King":
            return KingMove(boardStateCopy, indexOfPiece);
        default:
            return boardStateCopy;
    };
};

const PawnMove = (boardStateCopy, indexOfPiece) =>{
    return boardStateCopy;
};

const BishopMove = (boardStateCopy, indexOfPiece) =>{
    const pieceColor = GetTileAtIndex(boardStateCopy, indexOfPiece).pieceColor;

    const IsNotBlocked = (tileIndex) => {
        const [pieceRow, pieceTile] = [GetTileAtIndex(boardStateCopy, indexOfPiece).rowIndex, GetTileAtIndex(boardStateCopy, indexOfPiece).tileIndex];
        const [moveRow, moveTile] = [GetTileAtIndex(boardStateCopy, tileIndex).rowIndex, GetTileAtIndex(boardStateCopy, tileIndex).tileIndex];

        const diagonalCheck1 = Math.abs(pieceRow - moveTile);
        const diagonalCheck2 = Math.abs(pieceTile - moveRow)

        let canMoveTo = true;
        
        if(diagonalCheck1 === diagonalCheck2){
            for(let i = diagonalCheck1 - 1; i > 0; i--){
                if(i < 0){
                    return canMoveTo;
                };

                if(boardStateCopy.flatMap(x => x).find(x => x.rowIndex === i && x.tileIndex === i).piece !== ""){
                    canMoveTo = false;
                };
            };

            console.log(canMoveTo);
            return canMoveTo;
        };

        return false;
    };

    return boardStateCopy.map((element) => {
        element.map(x => {
            let tileData = {...x};
            let canMoveTo = false;
    
            if(tileData.pieceColor !== pieceColor && 
                IsNotBlocked(tileData.index)
            ){
                canMoveTo = true;
            };
    
            tileData.canMoveTo = canMoveTo;
            return tileData;
        });
    });
};

const KnightMove = (boardStateCopy, indexOfPiece) =>{
    return boardStateCopy;
};

const RookMove = (boardStateCopy, indexOfPiece) =>{
    return boardStateCopy;
};

const QueenMove = (boardStateCopy, indexOfPiece) =>{
    return boardStateCopy;
};

const KingMove = (boardStateCopy, indexOfPiece) =>{
    return boardStateCopy;
};

export default CalculateMove;