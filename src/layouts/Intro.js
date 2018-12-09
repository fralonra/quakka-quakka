import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  intro: {

  },
  introName: {
    textAlign: 'center'
  }
})

const Intro = props => (
  <div className={css(styles.intro)}>
    <h2 className={css(styles.introName)}>Intro</h2>
  </div>
)

export default Intro
