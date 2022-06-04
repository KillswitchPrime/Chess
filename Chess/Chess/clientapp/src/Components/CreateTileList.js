import React from 'react';
import Tile from './Tile';

const CreateTiles = (tileList) => {
    let tiles = tileList.map((element, index) =>
        {
            return (<Tile
                key={index}
                mouseDownOnTile={element.mouseDownOnTile}
                releaseOnTile={element.releaseOnTile}
                index={element.index}
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