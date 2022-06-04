import React from 'react';

/**
 * @param {function} mouseDownOnTile
 * @param {function} releaseOnTile
 * @param {string} tileColor
 * @param {string} pieceSource
 * @param {string} tileName
 * @param {string} piece
 * @param {Number} index
 */
const Tile = (props) => {
    return (
        <div data-index={props.index} 
            data-tile-name={props.tileName} 
            data-piece={props.piece}
            data-piecesource={props.pieceSource}
            onMouseDown={props.mouseDownOnTile} 
            onMouseUp={props.releaseOnTile} 
            className={`col-1 tile ${props.tileColor}`}
        >
            <img className="chessPiece" src={props.pieceSource} alt={props.piece}/>
        </div>
    );
};

export default Tile;