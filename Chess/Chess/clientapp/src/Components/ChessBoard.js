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
    const [turnNumber, setTurnNumber] = useState(0);
    
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

    let playersTurnText = "It is Blacks turn!";
    if(turnNumber % 2 === 0){
        playersTurnText = "It is Whites turn!";
    }

    return (
        <>
            <section className="chess-board">
                {
                    CreateRows(CreateTiles(
                        tileList, 
                        setTileList,
                        turnNumber, 
                        setTurnNumber
                    ))
                    .reverse()
                    .map(x => x)
                }
            </section>
            <aside className="turn-text d-flex align-items-center">
                <div className="row">
                    <div className="col-12">
                        <h1 className="">{playersTurnText}</h1>
                        <h2>Current turn: {turnNumber + 1}</h2>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default CreateChessBoard;