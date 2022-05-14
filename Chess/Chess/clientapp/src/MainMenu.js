import './Chess.css';
import React, {useState, useEffect} from 'react';
import CreateChessBoard from './Components/ChessBoard';
import CreateMainMenuButtons from './Components/MainMenuButtons';

const CreateMainMenu = () => {
    const [showChessBoard, changeShowChessBoard] = useState(false);
    const [chessBoard, updateChessBoard] = useState([]);

    const handleClickShowChessBoard = (event) =>{
        changeShowChessBoard(true);
    }

    useEffect(() => {
        updateChessBoard(CreateChessBoard());
    }, []);

    let renderChessBoard = null;
    let mainMenuButtons = (<CreateMainMenuButtons handleClickShowChessBoard={handleClickShowChessBoard}/>);
    if(showChessBoard){
        mainMenuButtons = null;
        renderChessBoard = chessBoard.map(x => x);
    };

    return (
        <div className="main">
            {mainMenuButtons}
            {renderChessBoard}
        </div>  
    );
};

export default CreateMainMenu;
