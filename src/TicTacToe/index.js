import React, { Component } from 'react'

import Game from 'tic-tac-toe-js/lib/game'

import Board from './Board'
import ActionBar from './ActionBar'
import styles from './styles.css'

export default class TicTacToe extends Component {
  constructor (props, context) {
    super(props, context)
    this.game = new Game()
    this.state = {
      turn: 'X',
      board: this.getBoard(),
      winner: this.game.winner
    }
  }

  getBoard = () => {
    const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]

    for (var y = 0; y < 3; y += 1) {
      for (var x = 0; x < 3; x += 1) {
        board[y][x] = this.game.at(y * 3 + x + 1)
      }
    }

    return board
  }

  onMove = ({x, y}) => {
    if (!this.game.isFinished()) {
      const { turn } = this.state
      this.game.move(turn, y * 3 + x + 1)
      this.setState({
        turn: turn === 'X' ? 'O' : 'X',
        board: this.getBoard(),
        winner: this.game.winner
      })
    }
  }

  onReset = () => {
    const { turn } = this.state
    this.game = new Game()
    this.setState({
      turn,
      board: this.getBoard(),
      winner: this.game.winner
    })
  }

  render () {
    const {board, turn, winner} = this.state

    return (
      <div>
        <Board
          data={board}
          onMove={this.onMove}
        />
        <ActionBar
          turn={turn}
          winner={winner}
          onReset={this.onReset}
        />
      </div>
    )
  }
}
