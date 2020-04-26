'use strict'

const assert = require('assert')

function addTwoNumbers (x, y) {
  return x + y // deliberate bug
}

function testAddTwoNumbers () {
  const x = 5
  const y = 1
  const sum1 = x + y
  const sum2 = addTwoNumbers(x, y)

  console.log('addTwoNumbers() should return the sum of its two parameters.')
  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.')

  // Assert
  try {
    assert.strictEqual(sum1, sum2)

    console.log('Passed')
  } catch (error) {
    console.log(error.message)
  }
}

testAddTwoNumbers()
