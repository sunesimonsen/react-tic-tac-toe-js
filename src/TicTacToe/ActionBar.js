import React from 'react'

import styles from './styles.css'

const ActionBar = ({ winner, turn, onReset }) => (
  <div className={styles.actionbar}>
    {
      winner
        ? <div data-test-id='winner'>Winner: {winner}</div>
        : <div data-test-id='next'>Next: {turn}</div>
    }
    <button
      className={styles.refresh}
      data-test-id='refresh-button'
      onClick={onReset}
    >
      ⟲
    </button>
  </div>
)

export default ActionBar
