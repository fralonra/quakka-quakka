import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const CELL_SIZE = 8

const styles = StyleSheet.create({
  bonusWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 9999,
    background: 'rgba(0, 0, 0, .7)'
  },
  bonusDialog: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: 99999,
    minWidth: '200px',
    padding: '16px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 2px 1px',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden'
  },
  bonusWrapperHidden: {
    display: 'none'
  },
  scoreBoard: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#333'
  },
  bonusClose: {
    cursor: 'pointer'
  },
  mazeWrapper: {
    textAlign: 'center'
  }
})

class MazeArea extends Component {
  constructor (props) {
    super(props)

    const {
      row,
      col
    } = props.data.meta

    this.state = {
      cursor: props.data.meta.start,
      nextCursor: props.data.meta.start,
      row,
      col,
      hasKeyupListener: false,
      isAnimating: false
    }

    this.s = null
    this.cursor = null
    this.SVG_WIDTH = (2 * col + 1) * CELL_SIZE
    this.SVG_HEIGHT = (2 * row + 1) * CELL_SIZE
    this.svg = React.createRef()
  }

  componentDidMount () {
    if (this.props.data.raw) {
      this.drawMaze()
    }
    if (this.props.actived) {
      this.addKeyListener()
    }
  }

  componentDidUpdate () {
    const { actived, finished } = this.props
    const { hasKeyupListener } = this.state
    if (finished && hasKeyupListener) {
      return this.delKeyListener()
    }
    if (!finished) {
      if (actived && !hasKeyupListener) {
        this.addKeyListener()
      } else if (!actived && hasKeyupListener) {
        this.delKeyListener()
      }
    }
  }

  componentWillUnmount () {
    if (this.state.hasKeyupListener) {
      this.delKeyListener()
    }
  }

  addKeyListener (callback = () => {}) {
    window.addEventListener('keyup', e => this.handleKeyup(e))
    this.setState({
      hasKeyupListener: true
    }, callback)
  }

  delKeyListener (callback = () => {}) {
    window.removeEventListener('keyup', e => this.handleKeyup(e))
    this.setState({
      hasKeyupListener: false
    }, callback)
  }
  
  shouldMove () {
    const { actived, data } = this.props
    const { nextCursor, cursor } = this.state
    return data.raw[nextCursor[0]][nextCursor[1]] &&
    !nextCursor.every((c, i) => c === cursor[i])
  }

  drawCursor () {
    const { cx, cy } = this.getCursorPostion()
    return this.s.circle(cx, cy, CELL_SIZE / 2)
  }

  getCursorPostion () {
    const { cursor } = this.state
    return {
      cx: (cursor[0]) * CELL_SIZE + CELL_SIZE / 2,
      cy: cursor[1] * CELL_SIZE + CELL_SIZE / 2
    }
  }

  updateCursor () {
    if (this.shouldMove() && !this.state.isAnimating) {
      this.setState(state => ({
        cursor: state.nextCursor,
      }), () => {
        this.animateCursor(() => {
          this.checkFinish()
        })
      })
    }
  }

  animateCursor (callback) {
    const { cx, cy } = this.getCursorPostion()
    this.setState({
      isAnimating: true
    }, () => {
      this.cursor.animate({
        cx,
        cy
      }, 200, () => {
        this.setState({
          isAnimating: false
        }, () => {
          callback()
        })
      })
    })
  }

  drawMaze () {
    const raw = this.props.data.raw
    this.s = window.Snap(this.svg.current)
    raw.forEach((r, i) => {
      r.forEach((c, j) => {
        const fill = c ? '#fff' : '#000'
        this.s.rect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE).attr({
          fill
        })
      })
    })
    this.cursor = this.drawCursor().attr({
      fill: '#f00'
    })
  }
  
  handleKeyup (e) {
    if (this.props.finished) return
    const { key } = e
    switch (key) {
      case 'ArrowUp':
      case 'k':
        this.moveUp()
        break
      case 'ArrowLeft':
      case 'h':
        this.moveLeft()
        break
      case 'ArrowDown':
      case 'j':
        this.moveDown()
        break
      case 'ArrowRight':
      case 'l':
        this.moveRight()
        break
      default:
        break
    }
    this.props.onMoveIncrease()    
    this.updateCursor()
  }

  moveUp () {
    this.setState(state => ({
      nextCursor: [state.cursor[0], state.cursor[1] - 1]
    }))
  }
  
  moveLeft () {
    this.setState(state => ({
      nextCursor: [state.cursor[0] - 1, state.cursor[1]]
    }))
  }
  
  moveDown () {
    this.setState(state => ({
      nextCursor: [state.cursor[0], state.cursor[1] + 1]
    }))
  }
  
  moveRight () {
    this.setState(state => ({
      nextCursor: [state.cursor[0] + 1, state.cursor[1]]
    }))
  }

  checkFinish () {
    if (this.state.cursor.every((p, i) => p === this.props.data.meta.end[i])) {
      this.props.onFinish()
    }
  }

  render () {
    const { data } = this.props
    const { meta, raw } = data
    return (
      <div className={css(styles.mazeWrapper)}>
        <svg
          ref={this.svg}
          style={{
            width: `${this.SVG_WIDTH}px`,
            height: `${this.SVG_HEIGHT}px`
          }} />
      </div>
    )
  }
}

class BonusArea extends Component {
  state = {
    score: 0,
    timeLeft: 60,
    finished: false
  }

  onMoveIncrease () {
    this.setState(prevState => ({
      score: prevState.score + 1
    }))
  }

  onFinish () {
    this.setState({
      finished: true
    }, () => {
      setTimeout(() => {
        this.props.onClose()
      }, 1000)
    })
  }

  render () {
    const { maze, visible, onClose } = this.props
    const { score, timeLeft, finished } = this.state
    return (
      <div className={css(styles.bonusWrapper, !visible && styles.bonusWrapperHidden)}>
        <div className={css(styles.bonusDialog)}>
          <div className={css(styles.scoreBoard)}>
            <p>SCORE: {score}</p>
            {finished ? (
              <p style={{
                color: 'red'
              }}>YOU WIN</p>
            ) : (
              <p></p>
              // <p>TIME LEFT: {timeLeft}s</p>
            )}
          </div>
          <MazeArea
            data={maze}
            actived={visible}
            finished={finished}
            onMoveIncrease={() => this.onMoveIncrease()}
            onFinish={() => this.onFinish()} />
          <div className={css(styles.bonusClose)} onClick={e => onClose()}>NOXE</div>
        </div>
      </div>
    )
  }
}

export default BonusArea