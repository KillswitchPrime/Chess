const LetterList = ['A','B','C','D','E','F','G','H'];

const GetRowNumber = (tileName) => {
    return Number.parseInt(tileName.substring(1));
};

const CalculateMove = (boardState, indexOfPiece) => {
    const boardStateCopy = [...boardState];
    const piece = boardStateCopy[indexOfPiece].piece;

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

};

const BishopMove = (boardStateCopy, indexOfPiece) =>{
    const pieceColor = boardStateCopy[indexOfPiece].pieceColor;

    const IsDiagonal = (tileIndex) => {
        const tileRowNumber = GetRowNumber(boardStateCopy[tileIndex].tileName);
        if((tileIndex - indexOfPiece % 7 === 0 && tileIndex <= ((tileRowNumber - 1) * (indexOfPiece + 8 - (tileRowNumber - 1)))) || // DONE
            (tileIndex - indexOfPiece % 9 === 0 && tileIndex <= ((tileRowNumber) * (indexOfPiece + 8 - tileRowNumber))) || //NOT DONE!
            indexOfPiece - tileIndex % 7 === 0 || //NOT DONE!
            indexOfPiece - tileIndex % 9 === 0  //NOT DONE!
        ){
            return true;
        }

        return false;
    };

    const IsNotBlocked = (tileIndex) => {

    };

    return boardStateCopy.map((element, index) => {
        let tileData = {...element};
        let canMoveTo = false;

        if(tileData.pieceColor !== pieceColor && 
            IsDiagonal(tileData.index) &&
            IsNotBlocked(tileData.index)
        ){
            canMoveTo = true;
        }

        tileData.canMoveTo = canMoveTo;
        return tileData;
    });
};

const KnightMove = (boardStateCopy, indexOfPiece) =>{

};

const RookMove = (boardStateCopy, indexOfPiece) =>{

};

const QueenMove = (boardStateCopy, indexOfPiece) =>{

};

const KingMove = (boardStateCopy, indexOfPiece) =>{

};

export default CalculateMove;