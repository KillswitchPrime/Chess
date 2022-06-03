import React from 'react';

/**
 * @param {function} mouseDownOnTile
 * @param {function} releaseOnTile
 * @param {string} tileColor
 * @param {string} pieceSource
 * @param {string} altText
 * @param {string} tileName
 * @param {string} piece
 * @param {Number} index
 */
const Tile = (props) => {
    return (
        <div data-index={props.index} 
            data-tile-name={props.tileName} 
            data-piece={props.piece} 
            onMouseDown={props.mouseDownOnTile} 
            onMouseUp={props.releaseOnTile} 
            className={`col-1 tile ${props.tileColor}`}
        >
            <img className="chessPiece" src={props.pieceSource} alt={props.altText}/>
        </div>
    );
};

export default Tile;