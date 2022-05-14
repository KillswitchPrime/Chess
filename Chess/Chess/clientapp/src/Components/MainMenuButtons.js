import '../Chess.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const CreateMainMenuButtons = (props) => {
    return(
        <Row>
            <Col>
                <Button className="main-menu-button" onClick={props.handleClickShowChessBoard}>
                    Play against bot
                </Button>
                <Button className="main-menu-button" variant="primary" onClick={props.handleClickShowChessBoard}>
                    Play against player
                </Button>
            </Col>
        </Row>
    );
}

export default CreateMainMenuButtons;