import './Chess.css';
import React, {useState} from 'react';
import CreateChessBoard from './Components/ChessBoard';
import CreateMainMenuButtons from './Components/MainMenuButtons';

const CreateMainMenu = () => {
    const [showChessBoard, changeShowChessBoard] = useState(false);

    const handleClickShowChessBoard = (event) =>{
        changeShowChessBoard(true);
    }

    let componentToRender = (<CreateMainMenuButtons handleClickShowChessBoard={handleClickShowChessBoard}/>);
    if(showChessBoard){
        componentToRender = (<CreateChessBoard/>);
    };

    return (
        <main className="container-fluid mx-auto main">
            {componentToRender}
        </main>  
    );
};

export default CreateMainMenu;
