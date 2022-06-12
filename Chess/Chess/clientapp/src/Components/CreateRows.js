import React from 'react';

const CreateRows = (tiles) => {
    let chessBoard = [];

    tiles.forEach((row, i) => {
        chessBoard.push(
            <div key={i} className="row justify-content-center tileRow mx-auto">
                {row.map(x => x)}
            </div>
        );
    });

    return chessBoard;
};

export default CreateRows;