const GetPieceData = (row, column) => {
    let piece = "";
    let colorPrefix = "White";
    if(row === 6 || row === 7){
        colorPrefix = "Black";
    };

    switch (row){
        case 0: 
        case 7:
            switch (column){
                case 0:
                case 7:
                    piece = `${colorPrefix}Rook`;
                    break;
                case 1: 
                case 6:
                    piece = `${colorPrefix}Knight`;
                    break;
                case 2: 
                case 5:
                    piece = `${colorPrefix}Bishop`;
                    break;
                case 3:
                    piece = `${colorPrefix}Queen`;
                    break;
                case 4:
                    piece = `${colorPrefix}King`;
                    break;
                default:
                    break;
            };
            break;
        case 1: 
        case 6:
            piece = `${colorPrefix}Pawn`;
            break;
        default:
            break;
    };

    return piece;
};

export default GetPieceData;