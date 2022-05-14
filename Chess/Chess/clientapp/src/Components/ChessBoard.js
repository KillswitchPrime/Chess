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
    let color = "White";
    if(row === 1 || row === 0){
        color = "Black";
    };

    switch (row){
        case 1: 
        case 8:
            switch (column){
                case 0: 
                case 7:
                    pieceSource = WhiteRook;
                    piece = `${color}Rook`;
                    break;
                case 1: 
                case 6:
                    pieceSource = WhiteKnight;
                    piece = `${color}Knight`;
                    break;
                case 2: 
                case 5:
                    pieceSource = WhiteBishop;
                    piece = `${color}Bishop`;
                    break;
                case 3:
                    pieceSource = WhiteQueen;
                    piece = `${color}Queen`;
                    break;
                case 4:
                    pieceSource = WhiteKing;
                    piece = `${color}King`;
                    break;
                default:
                    break;
            };
            break;
        case 2: 
        case 7:
            pieceSource = WhitePawn;
            piece = `${color}Pawn`;
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
        console.log(event.target.value);
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
                    tileName={`${letterList[i]}${rowIndex + 1}`}
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