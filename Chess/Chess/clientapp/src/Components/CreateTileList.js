import React from 'react';
import Tile from './Tile';

const CreateTiles = (tileList, setTileList, setTurnNumber) => {
    let selectedPiece = null;

    const movePiece = (listOfTiles, indexOfTileMovedTo, indexOfTileMovedFrom) => {
        let updatedTileList = listOfTiles.map((element, i) => {
            let tileData = {...element};
            if(i === indexOfTileMovedTo){
                tileData.pieceSource = selectedPiece.piecesource;
                tileData.piece = selectedPiece.piece;
            }
            if(i === indexOfTileMovedFrom){
                tileData.pieceSource = "";
                tileData.piece = "";
            };


            return tileData;
        });

        return updatedTileList;
    };

    const releaseOnTile = (event) => {
        if(event.button === 2 || selectedPiece === null){
            return;
        };

        const {tileName, piece, index, piecesource} = event.currentTarget.dataset;
        const parsedIndex = parseInt(index);

        if(selectedPiece.parsedIndex === parsedIndex){
            return;
        };

        const updatedTileList = movePiece(tileList, parsedIndex, selectedPiece.parsedIndex);

        selectedPiece = null;
        setTurnNumber(turnNumber => turnNumber + 1);
        setTileList(updatedTileList);
    }

    const mouseDownOnTile = (event) => {
        if(event.button === 2){
            return;
        };

        const {tileName, piece, index, piecesource} = event.currentTarget.dataset;
        const parsedIndex = parseInt(index);

        if(selectedPiece !== null){
            const updatedTileList = movePiece(tileList, parsedIndex, selectedPiece.parsedIndex);
            selectedPiece = null;
            setTurnNumber(turnNumber => turnNumber + 1);
            setTileList(updatedTileList);
        };

        selectedPiece = {
            tileName,
            piece,
            parsedIndex,
            piecesource
        };

        console.log(selectedPiece)
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
                altText={element.piece}
                tileName={element.tileName}
                piece={element.piece}
            />);
    });
    
    return tiles;
};

export default CreateTiles;