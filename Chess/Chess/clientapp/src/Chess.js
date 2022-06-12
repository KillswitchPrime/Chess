import './Chess.css';
import React, {useState} from 'react';
import CreateChessBoard from './Components/ChessBoard';
import CreateMainMenuButtons from './Components/MainMenuButtons';

const CreateChessClient = () => {
    const [showChessBoard, changeShowChessBoard] = useState(false);

    const handleClickShowChessBoard = (event) =>{
        changeShowChessBoard(true);
    }

    let componentToRender = (<CreateMainMenuButtons handleClickShowChessBoard={handleClickShowChessBoard}/>);
    if(showChessBoard){
        componentToRender = (<CreateChessBoard/>);
    };

    //DELETE LATER.
    componentToRender = (<CreateChessBoard/>);
    
    return (
        <main className="container-fluid mx-auto main text-center d-flex justify-content-evenly">
            {componentToRender}
        </main>  
    );
};

export default CreateChessClient;
