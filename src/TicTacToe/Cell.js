import React from 'react'
import classNames from 'classnames'

import styles from './styles.css'

const Cell = ({player, cell, onClick}) => (
  <div
    className={classNames(styles.cell, {
      [styles.used]: player
    }) }
    onClick={() => {
      if (!player) {
        onClick(cell)
      }
    }}
    data-test-id={`x:${cell.x},y:${cell.y}`}
  >
    {player}
  </div>
)

export default Cell
