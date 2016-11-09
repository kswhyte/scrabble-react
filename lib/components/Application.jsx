import React, { Component } from 'react'

import { letterScores, scoreWord } from './scoreWord'

export default class Application extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>Score your Scrabble Words Here!</div>
    )
  }
}
