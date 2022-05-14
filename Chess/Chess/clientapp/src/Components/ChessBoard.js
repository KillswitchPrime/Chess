import '../Chess.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import BlackBishop from '../SVGResources/ChessPieces/BlackBishop.svg';

const CreateChessBoard = () => {

    const CreateRows = () => {
        let chessBoard = [];
        
        for(let i = 0; i < 8; i++){
            chessBoard.push(
                <Row key={i} className="tileRow">
                    {CreateTiles(i).map(element => element)}
                </Row>
            );
        };

        return chessBoard;
    };

    const CreateTiles = (rowIndex) => {
        let tileColor = "";
        let otherTile = "";

        if(rowIndex % 2 === 0){
            tileColor = "whiteTile";
            otherTile = "blackTile";
        }else{
            tileColor = "blackTile";
            otherTile = "whiteTile";
        };

        let tileRow = [];
        for(let i = 0; i < 8; i++){
            tileRow.push( 
                <Col key={i} className={`tile ${tileColor}`}>
                    <img className="chessPiece" src={BlackBishop} alt="Black bishop"/>
                </Col>
            );

            [tileColor, otherTile] = [otherTile, tileColor];
        }
        
        return tileRow;
    };

    return(
        <Container>
            {CreateRows().map(element => element)}
        </Container>
    );
};

export default CreateChessBoard;