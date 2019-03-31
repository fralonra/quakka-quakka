import React, { Component } from 'react'
import Typist from 'react-typist'
import Maze from 'doolhof'

import Layout from '../layouts/Layout'
import { BonusArea } from '../components'

const MAZE_ROW = 10
const MAZE_COL = 10

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
      <Layout>
        <div className="intro">
          <h2 className="intro-name">Intro</h2>
          <Typist className="typist" cursor={{ show: false }}>
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
            className="bonus-button"
            onClick={e => this.onToggleBonus()}>Noli me tangere</div>
          <style jsx>{`
          .intro-name: {
            text-align: center;
          }
          .typist: {
            padding: 12px;
          }
          .bonus-button: {
            position: fixed;
            bottom: 40;
            left: 10;
            color: #333;
            cursor: pointer;
            opacity: 0;
            transition: all .9s ease;
          }
          .bonus-button :hover: {
            color: red;
            opacity: 1;
          }
        `}</style>
        </div>
      </Layout>
    )
  }
}

export default Intro
