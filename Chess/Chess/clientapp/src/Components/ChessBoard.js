import React, {useEffect, useState} from 'react';
import CreateTiles from './CreateTileList';

let hasClicked = false;

const CreateChessBoard = () => {
    const releaseOnTile = (event) => {
        if(hasClicked === false){
            return;
        };

        const {tileName, piece, index} = event.currentTarget.dataset;

        setTile({
            tileName,
            piece,
            index
        });

        if(selectedPiece.index === movedToTile.index){
            return;
        };

         console.log(movedToTile);

        // const currentTile= tileList[selectedPiece.index];

        // console.log(currentTile);

        // currentTile.dataset.piece = piece;
        // currentTile.firstChild.src = PieceMap.get(piece);

        hasClicked = false;
    }

    const mouseDownOnTile = (event) => {
        const {tileName, piece, index} = event.currentTarget.dataset;

        hasClicked = true;

        setPiece({
            tileName,
            piece,
            index
        });

        console.log(selectedPiece);
    }
    
    const [tileList, updateTileList] = useState(CreateTiles(mouseDownOnTile, releaseOnTile));
    const [board, setBoard] = useState([]);
    const [selectedPiece, setPiece] = useState({});
    const [movedToTile, setTile] = useState({});

    useEffect(() => {
        setBoard(CreateRows(tileList));
        updateTileList(tileList);
    },[]);

    const CreateRows = (tileList) => {
        let chessBoard = [];
        let index = 0;

        for(let i = 0; i < 8; i++){
            let tileRow = [];
            for(let j = 0; j<8; j++){
                tileRow.push(tileList[index]);
                index++;
            }

            chessBoard.push(
                <div key={i} className="row justify-content-center tileRow mx-auto">
                    {tileRow.map(x => x)}
                </div>
            );
        };

        return chessBoard;
    };

    return board.reverse().map(x => x);
};

export default CreateChessBoard;