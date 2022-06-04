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

const PieceMap = new Map();
PieceMap.set("BlackPawn", BlackPawn).set("BlackRook", BlackRook).set("BlackKnight", BlackKnight).set("BlackBishop", BlackBishop).set("BlackQueen", BlackQueen).set("BlackKing", BlackKing);
PieceMap.set("WhitePawn", WhitePawn).set("WhiteRook", WhiteRook).set("WhiteKnight", WhiteKnight).set("WhiteBishop", WhiteBishop).set("WhiteQueen", WhiteQueen).set("WhiteKing", WhiteKing);

export default PieceMap;