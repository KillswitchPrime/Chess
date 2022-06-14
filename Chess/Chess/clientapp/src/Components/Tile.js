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
    let tileContent = (<img className="chessPiece" src={props.pieceSource} alt={props.piece}/>);
        
    if(props.canMoveTo && props.piece === ""){
        tileContent = (<div className="legalMove"/>);
    }else if (props.canMoveTo){
        tileContent = (<img className="chessPieceTake" src={props.pieceSource} alt={props.piece}/>);
    };

    return (
        <div data-index={props.index} 
            data-tile-name={props.tileName} 
            data-piece={props.piece}
            data-piececolor={props.pieceColor}
            data-piecesource={props.pieceSource}
            data-row={props.rowIndex}
            data-tile-index={props.tileIndex}
            onMouseDown={props.mouseDownOnTile} 
            onMouseUp={props.releaseOnTile} 
            className={`col-1 tile ${props.tileColor}`}
        >
            {tileContent}
        </div>
    );
};

export default Tile;