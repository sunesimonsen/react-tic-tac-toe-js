import React from 'react'

import Cell from './Cell'
import styles from './styles.css'

const Board = ({ data, onMove }) => (
  <div className={ styles.board }>
    {
      data.map((row, y) => (
        <div key={y} className={ styles.row }>
          {
            row.map((player, x) => (
              <Cell
                key={x}
                cell={{x, y}}
                player={player}
                onClick={onMove}
              />
            ))
          }
        </div>
      ))
    }
  </div>
)

export default Board
