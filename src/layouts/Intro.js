import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Typist from 'react-typist'
import Maze from 'doolhof'

import { BonusArea } from '.'

const MAZE_ROW = 10
const MAZE_COL = 10

const styles = StyleSheet.create({
  intro: {

  },
  introName: {
    textAlign: 'center'
  },
  typist: {
    padding: '12px'
  },
  bonusButton: {
    position: 'fixed',
    bottom: 40,
    left: 10,
    color: '#333',
    cursor: 'pointer',
    opacity: 0,
    transition: 'all .9s ease',
    ':hover': {
      color: 'red',
      opacity: 1
    }
  }
})

class Intro extends Component {
  constructor (props) {
    super(props)

    this.state = {
      bonusVisible: false
    }

    this.maze = null

    this.genMaze()
  }

  onToggleBonus () {
    this.setState(prevState => ({
      bonusVisible: !prevState.bonusVisible
    }))
  }

  genMaze () {
    this.maze = new Maze({
      row: MAZE_ROW,
      col: MAZE_COL
    }).get()
  }

  render () {
    const { bonusVisible } = this.state
    return (
      <div className={css(styles.intro)}>
        <h2 className={css(styles.introName)}>Intro</h2>
        <Typist className={css(styles.typist)} cursor={{ show: false }}>
          <Typist.Delay ms={500} />
          <p>Akka yohjamin.</p>
          <Typist.Delay ms={1000} />
          <p>Nadofhra no amin <i>pola</i>.</p>
          <Typist.Delay ms={2000} />
          <p>Meja tehrawa do <strong>arah mada</strong> mihnade.</p>
          <Typist.Delay ms={5500} />
          <p style={{
            marginTop: '20px',
            fontSize: '18px',
            fontWeight: 'bold',
            textIndent: '50px'
          }}>Mahra!</p>
        </Typist>
        <BonusArea
          maze={this.maze}
          visible={bonusVisible}
          onClose={e => this.onToggleBonus()} />
        <div
          className={css(styles.bonusButton)}
          onClick={e => this.onToggleBonus()}>Noli me tangere</div>
      </div>
    )
  }
}

export default Intro
