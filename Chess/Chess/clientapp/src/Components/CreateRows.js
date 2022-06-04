import React from 'react';

const CreateRows = (tiles) => {
    let chessBoard = [];
    let index = 0;

    for(let i = 0; i < 8; i++){
        let tileRow = [];
        for(let j = 0; j<8; j++){
            tileRow.push(tiles[index]);
            index++;
        }

        chessBoard.push(
            <div key={i} className="row justify-content-center tileRow mx-auto">
                {tileRow.map(x => x)}
            </div>
        );
    };

    return chessBoard;
};

export default CreateRows;