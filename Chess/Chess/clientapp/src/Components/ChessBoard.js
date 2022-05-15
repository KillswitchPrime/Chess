import '../Chess.css';
import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
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

const LetterList = ['A','B','C','D','E','F','G','H'];
const PieceMap = new Map();
PieceMap.set("BlackPawn", BlackPawn).set("BlackRook", BlackRook).set("BlackKnight", BlackKnight).set("BlackBishop", BlackBishop).set("BlackQueen", BlackQueen).set("BlackKing", BlackKing);
PieceMap.set("WhitePawn", WhitePawn).set("WhiteRook", WhiteRook).set("WhiteKnight", WhiteKnight).set("WhiteBishop", WhiteBishop).set("WhiteQueen", WhiteQueen).set("WhiteKing", WhiteKing);
let hasClicked = false;
let selectedPiece = {};

const SetColorTile = (index) => {
    let tileName = "whiteTile";
    let otherTile = "blackTile";

    if(index % 2 === 0){
        tileName = "blackTile";
        otherTile = "whiteTile";
    };

    return [tileName, otherTile];
};

const GetPieceData = (row, column) => {
    let piece = "";
    let colorPrefix = "White";
    if(row === 6 || row === 7){
        colorPrefix = "Black";
    };

    switch (row){
        case 0: 
        case 7:
            switch (column){
                case 0:
                case 7:
                    piece = `${colorPrefix}Rook`;
                    break;
                case 1: 
                case 6:
                    piece = `${colorPrefix}Knight`;
                    break;
                case 2: 
                case 5:
                    piece = `${colorPrefix}Bishop`;
                    break;
                case 3:
                    piece = `${colorPrefix}Queen`;
                    break;
                case 4:
                    piece = `${colorPrefix}King`;
                    break;
                default:
                    break;
            };
            break;
        case 1: 
        case 6:
            piece = `${colorPrefix}Pawn`;
            break;
        default:
            break;
    };

    return piece;
};

const CreateChessBoard = () => {
    const [tileList, updateTileList] = useState([]);

    const CreateRows = () => {
        let chessBoard = [];
        let index = 0;

        for(let i = 0; i < 8; i++){
            let tileRow = [];
            for(let j = 0; j<8; j++){
                tileRow.push(tileList[index]);
                index++;
            }

            chessBoard.push(
                <Row key={i} className="tileRow">
                    {tileRow.map(x => x)}
                </Row>
            );
        };

        return chessBoard;
    };

    const CreateTiles = () => {
        let tiles = [];
        let index = 0;
        for(let i = 0; i < 8; i++){
            let [tileColor, otherTile] = SetColorTile(i);
            for(let j = 0; j < 8; j++){
                    const piece = GetPieceData(i, j);
                    
                    tiles.push( 
                        <Tile
                            key={`${j}${i}`}
                            mouseDownOnTile={mouseDownOnTile}
                            releaseOnTile={releaseOnTile}
                            index={index}
                            tileColor={tileColor}
                            pieceSource={PieceMap.get(piece)}
                            altText={piece}
                            tileName={`${LetterList[j]}${i + 1}`}
                            piece={piece}
                        />
                    );
        
                    [tileColor, otherTile] = [otherTile, tileColor];
                    index++;
                }
            }
        
        return tiles;
    };

    const releaseOnTile = (event) => {
        if(hasClicked === false){
            return;
        };

        const {tileName, piece, index} = event.currentTarget.dataset;

        // console.log(tileList);

        // const currentTile= tileList[selectedPiece.index];

        // console.log(currentTile);

        // currentTile.dataset.piece = piece;
        // currentTile.firstChild.src = PieceMap.get(piece);

        hasClicked = false;
    }

    const mouseDownOnTile = (event) => {
        const {tileName, piece, index} = event.currentTarget.dataset;

        console.log(tileList);

        hasClicked = true;

        selectedPiece = {
            tileName,
            piece,
            index
        };

        releaseOnTile(event);
    }

    useEffect(() => {
        updateTileList(CreateTiles());
    }, []);

    console.log(tileList);

    return (
        <Container>
            {CreateRows().reverse().map(x => x)}
        </Container>
    );
};

export default CreateChessBoard;