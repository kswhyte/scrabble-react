import { assert } from 'chai'
const scoreWord = require('../lib/components/scoreWord')

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
  })
  context('can score words with NO multiplier', function() {
    it('can score a word with NO multiplier', function(){
      assert.equal(scoreWord('HI'), 5);
    })
    it('can score another word with no multiplier', function(){
      assert.equal(scoreWord('WORLD'), 9);
    })
    it('can score another word with no multiplier', function(){
      assert.equal(scoreWord('QUIXOTRY'), 27);
    })
    it('can score another word with no multiplier', function(){
      assert.equal(scoreWord(''), 0);
    })
    it('can score another word with no multiplier', function(){
      assert.equal(scoreWord(null), 0);
    })
  })
  context('can score words with a multiplier', function() {
    it('can score a word with a multiplier', function(){
      assert.equal(scoreWord('HI', 3), 15);
    })
    it('can score another word with a multiplier', function(){
      assert.equal(scoreWord('HI', 3), 15);
    })
    it('can score another word with a multiplier', function(){
      assert.equal(scoreWord('QUARTZY', 3), 84);
    })
    it('can score another word with no multiplier', function(){
      assert.equal(scoreWord('', 2), 0);
    })
    it('can score another word with no multiplier', function(){
      assert.equal(scoreWord(null, 2), 0);
    })
  })
  context('can score different words with different multipliers', function() {
    it('can score a word with different multipliers', function(){
      assert.equal(scoreWord('HI', 2), 10);
    })
    it('can score different words with different multipliers', function(){
      assert.equal(scoreWord('WORLD', 2), 18);
    })
    it('can score different words with different multipliers', function(){
      assert.equal(scoreWord('QUIZZIFY', 2), 82);
    })
  })
})
