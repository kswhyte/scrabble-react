import { assert } from 'chai'
const scoreWord = require('../lib/components/scoreWord.js')

describe('letterScores | Unit Tests', function() {
  context('letterScores as an object', function() {
    it('is an object', function() {
      const letterScoresReplica = {
        A: 1, B: 3, C: 3, D: 2,
        E: 1, F: 4, G: 2, H: 4,
        I: 1, J: 8, K: 5
      }
      assert.isObject(letterScoresReplica);
    })
    it('contains values for each letter', function(){
      const letterScoresReplica = {
        A: 1, B: 3, C: 3, D: 2,
        E: 1, F: 4, G: 2, H: 4,
        I: 1, J: 8, K: 5
      }
      assert.equal(letterScoresReplica.A, 1);
      assert.equal(letterScoresReplica.D, 2);
      assert.equal(letterScoresReplica.K, 5);
    })
  })
  context('scoreWord as a method', function() {
    it('is a function', function() {

      assert.isFunction(scoreWord);
    })
    it('can score a word with no multiplier', function(){
      assert.equal(scoreWord('hi'), 5);
    })
    it('can score a word with a multiplier', function(){
      assert.equal(scoreWord('hi', 3), 15);
    })
  })
})
