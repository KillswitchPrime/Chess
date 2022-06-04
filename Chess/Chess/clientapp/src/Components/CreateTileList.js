import React from 'react';
import Tile from './Tile';

const CreateTiles = (tileList, setTileList) => {
    let selectedPiece = null;

    const releaseOnTile = (event) => {
        if(event.button === 2){
            return;
        };

        const {tileName, piece, index, piecesource} = event.currentTarget.dataset;
        const parsedIndex = parseInt(index);

        if(selectedPiece.parsedIndex === parsedIndex){
            return;
        };

        let updatedTileList = tileList.map((element, i) => {
            let tileData = {...element};
            if(i === parsedIndex){
                tileData.pieceSource = selectedPiece.piecesource;
                tileData.piece = selectedPiece.piece;
            }
            if(i === selectedPiece.parsedIndex){
                tileData.pieceSource = "";
                tileData.piece = "";
            };


            return tileData;
        });

        setTileList(updatedTileList);
    }

    const mouseDownOnTile = (event) => {
        if(event.button === 2){
            return;
        };

        const {tileName, piece, index, piecesource} = event.currentTarget.dataset;
        const parsedIndex = parseInt(index);

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