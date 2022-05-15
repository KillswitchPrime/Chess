import React from 'react';
import Col from 'react-bootstrap/Col';
import '../Chess.css';

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
        <Col data-index={props.index} data-tile-name={props.tileName} data-piece={props.piece} onMouseDown={props.mouseDownOnTile} onMouseUp={props.releaseOnTile} className={`tile ${props.tileColor}`}>
            <img className="chessPiece" src={props.pieceSource} alt={props.altText}/>
        </Col>
    );
};

export default Tile;