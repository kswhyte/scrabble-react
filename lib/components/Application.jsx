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
    this.setInitialState()
  }

  render() {
    let score = scoreWord(this.state.word)

    let wordAndScore = this.state.wordList.map((wordObj, i) =>
      <li
        className='word-and-score-displayed'
        key={i}
      >
        {wordObj.displayedWord} ({wordObj.displayedScore})
      </li>
    )

    return (
      <div>
        <h1><span className='scrabble'>Scrabble</span> Word Scorer</h1>

        <div className='input-and-counter'>
          <input
            className='word-input'
            onChange={(e) => this.updateWord(e)}
            value={this.state.word}
          />
          <span className='score'> { score } </span>
        </div>

        <div className='buttons'>
          <button
            className='clear-button'
            onClick={() => this.setInitialState()}
          >Clear Fields
          </button>
          <button
            className='submit-button'
            onClick={() => this.addWordToWordList()}
          >Submit
          </button>
        </div>

        <ul className='word-and-score-container'>
          { wordAndScore }
        </ul>
      </div>
    )
  }
}

//create submit button:
  //appends WORD and SCORE
