import React from 'react';
import Tile from './Tile';

const movePiece = (listOfTiles, indexOfTileMovedTo, indexOfTileMovedFrom, selectedPiece) => {
    let updatedTileList = listOfTiles.map(row => {
        return row.map(tile => {
            let tileData = {...tile};
            if(tileData.index === indexOfTileMovedTo){
                tileData.pieceSource = selectedPiece.piecesource;
                tileData.piece = selectedPiece.piece;
                tileData.pieceColor = selectedPiece.piececolor;
            }
            if(tileData.index === indexOfTileMovedFrom){
                tileData.pieceSource = "";
                tileData.piece = "";
                tileData.pieceColor = "";
            };
            return tileData;
        });
    });

    return updatedTileList;
};

const CreateTiles = (tileList, setTileList, turnNumber, setTurnNumber, setTurnHistory) => {
    let selectedPiece = null;
    let currentColorTurn = turnNumber % 2 === 0 ? "White" : "Black";

    const releaseOnTile = (event) => {
        if(event.button === 2 || selectedPiece === null){
            return;
        };

        const {tileName, piece, piececolor, index, piecesource} = event.currentTarget.dataset;
        const parsedIndex = parseInt(index);

        if(selectedPiece.parsedIndex === parsedIndex){
            return;
        };

        const updatedTileList = movePiece(tileList, parsedIndex, selectedPiece.parsedIndex, selectedPiece);

        const selectedPieceCopy = {...selectedPiece};
        selectedPiece = null;
        setTurnHistory(turnHistory => turnHistory.concat([{turnNumber: turnNumber + 1, move: `${selectedPieceCopy.tileName} -> ${tileName}`}]));
        setTurnNumber(turnNumber => turnNumber + 1);
        setTileList(updatedTileList);
    }

    const mouseDownOnTile = (event) => {
        if(event.button === 2){
            return;
        };

        const {tileName, piece, piececolor, index, piecesource} = event.currentTarget.dataset;
        const parsedIndex = parseInt(index);

        if(piece === "" || piececolor !== currentColorTurn){
            return;
        };

        if(selectedPiece !== null && parsedIndex !== selectedPiece.parsedIndex){
            const updatedTileList = movePiece(tileList, parsedIndex, selectedPiece.parsedIndex, selectedPiece);

            const selectedPieceCopy = {...selectedPiece};
            selectedPiece = null;
            setTurnHistory(turnHistory => turnHistory.concat([{turnNumber: turnNumber + 1, move: `${selectedPieceCopy.tileName} -> ${tileName}`}]));
            setTurnNumber(turnNumber => turnNumber + 1);
            setTileList(updatedTileList);
        };

        selectedPiece = {
            tileName,
            piece,
            piececolor,
            parsedIndex,
            piecesource
        };
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