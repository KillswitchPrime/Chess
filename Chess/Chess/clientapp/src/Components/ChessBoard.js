import React, {useEffect, useState} from 'react';
import CreateTiles from './CreateTileList';
import CreateRows from './CreateRows';
import PieceMap from './PieceMap';
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
                            index: index,
                            tileColor: tileColor,
                            pieceSource: PieceMap.get(piece),
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

    return CreateRows(CreateTiles(tileList, setTileList)).reverse().map(x => x);
};

export default CreateChessBoard;