import React from 'react';
import Tile from './Tile';

const CreateTiles = (tileList, setTileList, turnNumber, setTurnNumber, setTurnHistory) => {
    let selectedPiece = null;
    let currentColorTurn = turnNumber % 2 === 0 ? "White" : "Black";

    const movePiece = (listOfTiles, indexOfTileMovedTo, indexOfTileMovedFrom) => {
        let updatedTileList = listOfTiles.map((element, i) => {
            let tileData = {...element};
            if(i === indexOfTileMovedTo){
                tileData.pieceSource = selectedPiece.piecesource;
                tileData.piece = selectedPiece.piece;
                tileData.pieceColor = selectedPiece.piececolor;
            }
            if(i === indexOfTileMovedFrom){
                tileData.pieceSource = "";
                tileData.piece = "";
                tileData.pieceColor = "";
            };


            return tileData;
        });

        return updatedTileList;
    };

    const releaseOnTile = (event) => {
        if(event.button === 2 || selectedPiece === null){
            return;
        };

        const {tileName, piece, piececolor, index, piecesource} = event.currentTarget.dataset;
        const parsedIndex = parseInt(index);

        if(selectedPiece.parsedIndex === parsedIndex){
            return;
        };

        const updatedTileList = movePiece(tileList, parsedIndex, selectedPiece.parsedIndex);

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
            const updatedTileList = movePiece(tileList, parsedIndex, selectedPiece.parsedIndex);

            const selectedPieceCopy = {...selectedPiece};
            selectedPiece = null;
            setTurnHistory(turnHistory => turnHistory.concat([{turnNumber: turnNumber + 1, move: `${selectedPieceCopy.tileName}  ->  ${tileName}`}]));
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

    let tiles = tileList.map((element, index) =>
        {
            return (<Tile
                key={index}
                mouseDownOnTile={mouseDownOnTile}
                releaseOnTile={releaseOnTile}
                index={index}
                tileColor={element.tileColor}
                pieceSource={element.pieceSource}
                altText={`${element.pieceColor}${element.piece}`}
                tileName={element.tileName}
                piece={element.piece}
                pieceColor={element.pieceColor}
            />);
    });
    
    return tiles;
};

export default CreateTiles;