import React from 'react';
import Cell from './cell';
import { Board } from '../minesweeper.js';

class Game extends React.Component {
  constructor() {
    super();

    this.undo = this.undo.bind(this);
    this.lastBoard = {};
    this.state = {
      status: "",
      board: new Board
    };
  }

  updateBoard(pos, action) {
    this.lastBoard = this.state.board.dupe();

    if (action === "explore") {
      this.state.board.grid[pos[0]][pos[1]].explore();
    } else if (action === "flag") {
      this.state.board.grid[pos[0]][pos[1]].toggleFlag();
    }

    if (this.state.board.won()) {
      this.setState({status: "YOU WON!"});
    } else if (this.state.board.lost()) {
      this.state.board.revealBombs();
      this.setState({status: "YOU LOST!"});
    }
    this.setState({ board: this.state.board });
  }

  undo() {
    this.setState({ board: this.lastBoard });
  }

  render() {
    let updateBoard = this.updateBoard.bind(this);
    let rows = this.state.board.grid.map((row, idx) => {
      let cells = row.map((tile, jdx) => {
        return Cell(tile, jdx, updateBoard);
      });

      return (
        <div key={ idx } className="row">
          { cells }
        </div>
      );
    });

    return (
      <div>
        <h1>Minesweeper <span>{ this.state.status }</span></h1>
        <i className="fa fa-undo" onClick={ this.undo }></i>

        <div>
          { rows }
        </div>
      </div>
    );
  }
}

export default Game;
