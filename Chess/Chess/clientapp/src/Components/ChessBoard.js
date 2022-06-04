import React, {useEffect, useState} from 'react';
import CreateTiles from './CreateTileList';
import CreateRows from './CreateRows';
import PieceMap from './CreatePieceImage';
import GetPieceData from './CreatePieceData';

const LetterList = ['A','B','C','D','E','F','G','H'];

const SetColorTile = (index) => {
    let tileName = "whiteTile";
    let otherTile = "blackTile";

    if(index % 2 === 0){
        tileName = "blackTile";
        otherTile = "whiteTile";
    };

    return [tileName, otherTile];
};

const CreateChessBoard = () => {
    const [tileList, setTileList] = useState([]);
    const [selectedPiece, setPiece] = useState({});
    const [tileMovedTo, setTile] = useState({});
    
    useEffect(() => {
        setTileList(PopulateTileList());
    },[]);

    const PopulateTileList = () => {
        let tiles = [];
        let index = 0;
        for(let i = 0; i < 8; i++){
            let [tileColor, otherTile] = SetColorTile(i);
            for(let j = 0; j < 8; j++){
                    const piece = GetPieceData(i, j);
                    
                    tiles.push({
                            mouseDownOnTile: mouseDownOnTile,
                            releaseOnTile: releaseOnTile,
                            index: index,
                            tileColor: tileColor,
                            pieceSource: PieceMap.get(piece),
                            altText: piece,
                            tileName: `${LetterList[j]}${i + 1}`,
                            piece: piece
                        }
                    );
        
                    [tileColor, otherTile] = [otherTile, tileColor];
                    index++;
                }
            }
        
        return tiles;
    };

    const releaseOnTile = (event) => {

        const {tileName, piece, index} = event.currentTarget.dataset;

        setTile({
            tileName,
            piece,
            index
        });

        if(selectedPiece.index === tileMovedTo.index){
            return;
        };

        // const currentTile= tileList[selectedPiece.index];

        // console.log(currentTile);

        // currentTile.dataset.piece = piece;
        // currentTile.firstChild.src = PieceMap.get(piece);
    }

    const mouseDownOnTile = (event) => {
        const {tileName, piece, index} = event.currentTarget.dataset;

        setPiece({
            tileName,
            piece,
            index
        });

        console.log(tileList);
    }

    return CreateRows(CreateTiles(tileList)).reverse().map(x => x);
};

export default CreateChessBoard;