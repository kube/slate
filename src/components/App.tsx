import React from 'react'
import { hot } from 'react-hot-loader'
import { style } from 'typestyle'
import { px } from 'csx'

import { FONTS, PALETTE } from '../styles'

const AppStyle = style({
  textAlign: 'center',
  $nest: {
    h1: {
      fontFamily: FONTS.AbrilFatface,
      fontSize: px(76)
    }
  }
})

type AppProps = {}

type AppState = {
  intervalId?: number
  counter: number
}

export const App = hot(module)(
  class extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
      super(props)
      this.state = {
        counter: 0
      }
    }

    tick() {
      this.setState({ counter: this.state.counter + 1 })
    }

    componentDidMount() {
      this.setState({
        intervalId: setInterval(() => this.tick(), 130)
      })
    }

    componentWillUnmount() {
      if (this.state.intervalId) {
        clearInterval(this.state.intervalId)
      }
    }

    render() {
      return (
        <div className={AppStyle}>
          {[
            PALETTE.WHITE,
            PALETTE.YELLOW,
            PALETTE.PINK,
            PALETTE.GREEN,
            PALETTE.BLUE
          ].map(color => (
            <h1 style={{ color: color.toHexString() }}>Hello Slate.</h1>
          ))}
          <p>Counting to {this.state.counter}.</p>
        </div>
      )
    }
  }
)
