import React from 'react';
import Col from 'react-bootstrap/Col';
import '../Chess.css';

/**
 * @param {function} clickOnTile
 * @param {string} tileColor
 * @param {string} pieceSource
 * @param {string} altText
 * @param {string} tileName
 * @param {string} piece
 */
const Tile = (props) => {
    return (
        <Col data-tile-name={props.tileName} data-piece={props.piece} onClick={props.clickOnTile} className={`tile ${props.tileColor}`}>
            <img className="chessPiece" src={props.pieceSource} alt={props.altText}/>
        </Col>
    );
};

export default Tile;