import './Chess.css';
import React, {useState} from 'react';
import CreateChessBoard from './Components/ChessBoard';
import CreateMainMenuButtons from './Components/MainMenuButtons';

const CreateMainMenu = () => {
    const [showChessBoard, changeShowChessBoard] = useState(false);

    const handleClickShowChessBoard = (event) =>{
        changeShowChessBoard(true);
    }

    let chessBoard = null;
    let mainMenuButtons = <CreateMainMenuButtons handleClickShowChessBoard={handleClickShowChessBoard}/>

    if(showChessBoard){
        mainMenuButtons = null;
        chessBoard = <CreateChessBoard/>;
    }

    return (
        <div className="main">
            {mainMenuButtons}
            {chessBoard}
        </div>  
    );
};

export default CreateMainMenu;
