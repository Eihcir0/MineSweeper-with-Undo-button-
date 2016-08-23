import React from 'react';

const flag = function(pos, updateBoard) {
  return (e) => {
    e.preventDefault();
    updateBoard(pos, 'flag');
  };
};

const explore = function(pos, updateBoard) {
  return () => {

    updateBoard(pos, 'explore');
  };
};

const Cell = (tile, key, updateBoard) => {
  let body = "";

  if (tile.explored) {
    if (tile.bombed) {
      body = <i className="fa fa-bomb"></i>;
    } else {
      let bombCount = tile.adjacentBombCount();
      body = (bombCount > 0) ? bombCount : "";
    }
  } else if (tile.flagged) {
    body = <i className="fa fa-flag"></i>;
  }
  let pos = tile.pos;

  return (
    <div
      key={ key }
      className={ tile.explored ? 'tile explored' : 'tile' }
      onClick={ explore(pos, updateBoard) }
      onContextMenu={ flag(pos, updateBoard) }>
      { body }
    </div>
  );
};

export default Cell;
