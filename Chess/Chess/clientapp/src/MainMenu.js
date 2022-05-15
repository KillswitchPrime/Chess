import './Chess.css';
import React, {useState} from 'react';
import CreateChessBoard from './Components/ChessBoard';
import CreateMainMenuButtons from './Components/MainMenuButtons';

const CreateMainMenu = () => {
    const [showChessBoard, changeShowChessBoard] = useState(false);

    const handleClickShowChessBoard = (event) =>{
        changeShowChessBoard(true);
    }

    let renderChessBoard = null;
    let mainMenuButtons = (<CreateMainMenuButtons handleClickShowChessBoard={handleClickShowChessBoard}/>);
    if(showChessBoard){
        mainMenuButtons = null;
        renderChessBoard = (<CreateChessBoard/>);
    };

    return (
        <div className="main">
            {mainMenuButtons}
            {renderChessBoard}
        </div>  
    );
};

export default CreateMainMenu;
