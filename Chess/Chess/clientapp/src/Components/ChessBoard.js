import React, {useEffect, useState} from 'react';
import CreateTiles from './CreateTileList';
import CreateRows from './CreateRows';
import PieceMap from './PieceMap';
import GetPieceData from './CreatePieceData';
import IsValidProp from './Validator';

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
    const [turnHistory, setTurnHistory] = useState([])
    
    useEffect(() => {
        setTileList(PopulateTileList());
    },[]);

    const CreateTurnHistory = (turnHistory) => {
        if(IsValidProp(turnHistory) === false){
            return null;
        }
        console.log(turnHistory)
        const tableRows = turnHistory.map((element, index) => {
            return (
                <tr key={index}>
                    <td>{element.turnNumber}</td>
                    <td>{element.move}</td>
                </tr>
            );
        });

        return tableRows;
    };

    const PopulateTileList = () => {
        let tiles = [];
        let index = 0;
        for(let i = 0; i < 8; i++){
            let [tileColor, otherTile] = SetColorTile(i);
            for(let j = 0; j < 8; j++){
                    const [pieceColor, piece] = GetPieceData(i, j);
                    
                    tiles.push({
                            index: index,
                            tileColor: tileColor,
                            pieceSource: PieceMap.get(`${pieceColor}${piece}`),
                            tileName: `${LetterList[j]}${i + 1}`,
                            piece: piece,
                            pieceColor: pieceColor
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
                        setTurnNumber,
                        setTurnHistory
                    ))
                    .reverse()
                    .map(x => x)
                }
            </section>
            <aside className="turn-text">
                <div className="row">
                    <div className="col-12">
                        <h1 className="">{playersTurnText}</h1>
                    </div>
                    <div className="col-12">
                        <h2>Current turn: {turnNumber + 1}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 history-table">
                        <table className="table table-striped table-bordered table-dark">
                            <thead>
                                <tr>
                                    <th>Turn number</th>
                                    <th>Move</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CreateTurnHistory(turnHistory)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default CreateChessBoard;