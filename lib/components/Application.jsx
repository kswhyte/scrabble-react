import React, { Component } from 'react'

const scoreWord = require('./scoreWord')

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      word: '',
      wordList: []
    }
  }

  updateWord(e) {
    this.setState({
      word: e.target.value
    })
  }

  setInitialState() {
    this.setState({
      word: ''
    })
  }

  addWordToWordList() {
    this.state.wordList.push({
      displayedWord: this.state.word,
      displayedScore: scoreWord(this.state.word)
    })
    this.setState({
      wordList: this.state.wordList
    })
  }

  render() {
    let score = scoreWord(this.state.word)

    let wordAndScore = this.state.wordList.map((wordObj, i) =>
      <li
        key={i}
      >
        {wordObj.displayedWord} ({wordObj.displayedScore})
      </li>
    )

    return (
      <div>
        <div>Score your Scrabble Words Here!</div>
        <input
          onChange={(e) => this.updateWord(e)}
          value={this.state.word}
        />
        <span> { score } </span>
        <button
          onClick={() => this.setInitialState()}
        >Clear Fields
        </button>
        <button
          onClick={() => this.addWordToWordList()}
        >Submit
        </button>
        <ul>
          { wordAndScore }
        </ul>
      </div>
    )
  }
}

//create submit button:
  //appends WORD and SCORE
