import React from 'react';

/**
 * @param {function} mouseDownOnTile
 * @param {function} releaseOnTile
 * @param {string} tileColor
 * @param {string} pieceSource
 * @param {string} tileName
 * @param {string} piece
 * @param {string} pieceColor
 * @param {Number} index
 * @param {bool} canMoveTo
 */
const Tile = (props) => {
    const tileContent = props.canMoveTo ?
        (<div className="legalMove"/>) :
        (<img className="chessPiece" src={props.pieceSource} alt={props.piece}/>);

    return (
        <div data-index={props.index} 
            data-tile-name={props.tileName} 
            data-piece={props.piece}
            data-piececolor={props.pieceColor}
            data-piecesource={props.pieceSource}
            onMouseDown={props.mouseDownOnTile} 
            onMouseUp={props.releaseOnTile} 
            className={`col-1 tile ${props.tileColor}`}
        >
            {tileContent}
        </div>
    );
};

export default Tile;