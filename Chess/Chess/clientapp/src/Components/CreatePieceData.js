const GetPieceData = (row, column) => {
    let piece = "";
    let pieceColor = "";
    if(row === 0 || row === 1){
        pieceColor = "White";
    }else if(row === 6 || row === 7){
        pieceColor = "Black";
    };

    switch (row){
        case 0: 
        case 7:
            switch (column){
                case 0:
                case 7:
                    piece = `Rook`;
                    break;
                case 1: 
                case 6:
                    piece = `Knight`;
                    break;
                case 2: 
                case 5:
                    piece = `Bishop`;
                    break;
                case 3:
                    piece = `Queen`;
                    break;
                case 4:
                    piece = `King`;
                    break;
                default:
                    break;
            };
            break;
        case 1: 
        case 6:
            piece = `Pawn`;
            break;
        default:
            break;
    };

    return [pieceColor, piece];
};

export default GetPieceData;