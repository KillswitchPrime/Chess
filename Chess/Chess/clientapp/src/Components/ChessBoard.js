import '../Chess.css';
import React from 'react';
import Row from 'react-bootstrap/Row';
import BlackBishop from '../SVGResources/ChessPieces/BlackBishop.svg';
import BlackKing from '../SVGResources/ChessPieces/BlackKing.svg';
import BlackKnight from '../SVGResources/ChessPieces/BlackKnight.svg';
import BlackPawn from '../SVGResources/ChessPieces/BlackPawn.svg';
import BlackQueen from '../SVGResources/ChessPieces/BlackQueen.svg';
import BlackRook from '../SVGResources/ChessPieces/BlackRook.svg';
import WhiteBishop from '../SVGResources/ChessPieces/WhiteBishop.svg';
import WhiteKing from '../SVGResources/ChessPieces/WhiteKing.svg';
import WhiteKnight from '../SVGResources/ChessPieces/WhiteKnight.svg';
import WhitePawn from '../SVGResources/ChessPieces/WhitePawn.svg';
import WhiteQueen from '../SVGResources/ChessPieces/WhiteQueen.svg';
import WhiteRook from '../SVGResources/ChessPieces/WhiteRook.svg';
import Tile from '../Components/Tile';

const letterList = ['A','B','C','D','E','F','G','H'];

const SetColorTile = (index) => {
    let tileColor = "";
    let otherTile = "";

    if(index % 2 === 0){
        tileColor = "whiteTile";
        otherTile = "blackTile";
    }else{
        tileColor = "blackTile";
        otherTile = "whiteTile";
    };

    return [tileColor, otherTile];
};

const GetPieceData = (row, column) => {
    let pieceSource = "";
    let piece = "";

    switch (row){
        case 1: 
            switch (column){
                case 0:
                case 7:
                    pieceSource = WhiteRook;
                    piece = `WhiteRook`;
                    break;
                case 1: 
                case 6:
                    pieceSource = WhiteKnight;
                    piece = `WhiteKnight`;
                    break;
                case 2: 
                case 5:
                    pieceSource = WhiteBishop;
                    piece = `WhiteBishop`;
                    break;
                case 3:
                    pieceSource = WhiteQueen;
                    piece = `WhiteQueen`;
                    break;
                case 4:
                    pieceSource = WhiteKing;
                    piece = `WhiteKing`;
                    break;
                default:
                    break;
            };
            break;
        case 8:
            switch (column){
                case 0:
                case 7:
                    pieceSource = BlackRook;
                    piece = `BlackRook`;
                    break;
                case 1: 
                case 6:
                    pieceSource = BlackKnight;
                    piece = `BlackKnight`;
                    break;
                case 2: 
                case 5:
                    pieceSource = BlackBishop;
                    piece = `BlackBishop`;
                    break;
                case 3:
                    pieceSource = BlackQueen;
                    piece = `BlackQueen`;
                    break;
                case 4:
                    pieceSource = BlackKing;
                    piece = `BlackKing`;
                    break;
                default:
                    break;
            };
            break;
        case 2: 
            pieceSource = WhitePawn;
            piece = `WhitePawn`;
            break;
        case 7:
            pieceSource = BlackPawn;
            piece = `BlackPawn`;
            break;
        default:
            break;
    };

    return [pieceSource, piece];
};

const CreateChessBoard = () => {

    const CreateRows = () => {
        let chessBoard = [];
        
        for(let i = 8; i > 0; i--){
            chessBoard.push(
                <Row key={i} className="tileRow">
                    {CreateTiles(i).map(element => element)}
                </Row>
            );
        };

        return chessBoard;
    };

    const clickOnTile = (event) =>{
        console.log(event.target);
    }

    const CreateTiles = (rowIndex) => {
        let [tileColor, otherTile] = [...SetColorTile(rowIndex)];

        let tileRow = [];
        for(let i = 0; i < 8; i++){
            let [pieceSource, piece] = [...GetPieceData(rowIndex, i)];
            
            tileRow.push( 
                <Tile
                    key={`${rowIndex}${i}`}
                    clickOnTile={clickOnTile}
                    tileColor={tileColor}
                    pieceSource={pieceSource}
                    altText={piece}
                    tileName={`${letterList[i]}${rowIndex}`}
                    piece={piece}
                />
            );

            [tileColor, otherTile] = [otherTile, tileColor];
        }
        
        return tileRow;
    };

    return CreateRows();
};

export default CreateChessBoard;