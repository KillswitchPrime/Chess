import React, {useState} from 'react';
import CalculateMove from './MoveCalculator';
import Tile from './Tile';

const movePiece = (listOfTiles, indexOfTileMovedTo, selectedPiece) => {
    let updatedTileList = listOfTiles.map(row => {
        return row.map(tile => {
            let tileData = {...tile};
            if(tileData.index === indexOfTileMovedTo){
                tileData.pieceSource = selectedPiece.piecesource;
                tileData.piece = selectedPiece.piece;
                tileData.pieceColor = selectedPiece.piececolor;
            }
            if(tileData.index === selectedPiece.index){
                tileData.pieceSource = "";
                tileData.piece = "";
                tileData.pieceColor = "";
            };
            return tileData;
        });
    });

    return updatedTileList;
};

const GetTileData = (dataset) => {
    const {tileName, piece, piececolor, index, piecesource, row, tileIndex} = dataset;
    const parsedIndex = parseInt(index);
    const parsedRowIndex = parseInt(row);
    const parsedTileIndex = parseInt(tileIndex);

    return [tileName, piece, piececolor, parsedIndex, piecesource, parsedRowIndex, parsedTileIndex];
};

const CreateTiles = (tileList, setTileList, turnNumber, setTurnNumber, setTurnHistory) => {
    const [selectedPiece, setSelectedPiece] = useState(null);
    const currentColorTurn = turnNumber % 2 === 0 ? "White" : "Black";

    const releaseOnTile = (event) => {
        if(event.button === 2 || selectedPiece === null){
            return;
        };

        const [tileName, piece, piececolor, index, piecesource, row, tileIndex] = GetTileData(event.currentTarget.dataset);

        if(selectedPiece.index === index || tileList.find(x => x.find(y => y.index === index)).canMoveTo === false){
            return;
        };

        const updatedTileList = movePiece(tileList, index, selectedPiece);

        const selectedPieceCopy = {...selectedPiece};
        setSelectedPiece(null);
        setTurnHistory(turnHistory => turnHistory.concat([{turnNumber: turnNumber + 1, move: `${selectedPieceCopy.tileName} -> ${tileName}`}]));
        setTurnNumber(turnNumber => turnNumber + 1);
        setTileList(updatedTileList);
    }

    const mouseDownOnTile = (event) => {
        if(event.button === 2){
            return;
        };

        const [tileName, piece, piececolor, index, piecesource, row, tileIndex] = GetTileData(event.currentTarget.dataset);
        
        if(piece === "" || piececolor !== currentColorTurn){
            return;
        };

        if(selectedPiece !== null && index !== selectedPiece.index && tileList.find(x => x.find(y => y.index === index)).canMoveTo){
            const updatedTileList = movePiece(tileList, index, selectedPiece);

            const selectedPieceCopy = {...selectedPiece};
            setSelectedPiece(null);
            setTurnHistory(turnHistory => turnHistory.concat([{turnNumber: turnNumber + 1, move: `${selectedPieceCopy.tileName} -> ${tileName}`}]));
            setTurnNumber(turnNumber => turnNumber + 1);
            setTileList(updatedTileList);
        };

        const legalMoveList = CalculateMove(tileList, index);

        setSelectedPiece({
            tileName,
            piece,
            piececolor,
            index,
            piecesource,
            row,
            tileIndex
        });

        setTileList(legalMoveList);
    };

    let tiles = tileList.map((row) =>
        {
            return row.map((tile) => {
                return (
                    <Tile
                        key={tile.index}
                        mouseDownOnTile={mouseDownOnTile}
                        releaseOnTile={releaseOnTile}
                        index={tile.index}
                        rowIndex={tile.rowIndex}
                        tileIndex={tile.tileIndex}
                        tileColor={tile.tileColor}
                        pieceSource={tile.pieceSource}
                        altText={`${tile.pieceColor}${tile.piece}`}
                        tileName={tile.tileName}
                        piece={tile.piece}
                        pieceColor={tile.pieceColor}
                        canMoveTo={tile.canMoveTo}
                    />
                );
            });
        }
    );
    
    return tiles;
};

export default CreateTiles;