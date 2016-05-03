import React from 'react'

import styles from './styles.css'

const Cell = ({player, cell, onClick}) => (
  <div
    className={styles.cell}
    onClick={() => {
      onClick(cell)
    }}
    data-test-id={`x:${cell.x},y:${cell.y}`}
  >
    {player}
  </div>
)

export default Cell
