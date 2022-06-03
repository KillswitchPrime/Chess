import React from 'react';
import Button from 'react-bootstrap/Button';

const CreateMainMenuButtons = (props) => {
    return(
        <div className="row mx-auto">
            <div className="col-6 mx-auto">
                <div className="d-grid gap-3">
                    <Button className="main-menu-button" variant="success" onClick={props.handleClickShowChessBoard} size="lg">
                        Play against bot
                    </Button>
                    <Button className="main-menu-button" variant="success" onClick={props.handleClickShowChessBoard} size="lg">
                        Play against player
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateMainMenuButtons;