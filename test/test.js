const expect = require('chai').expect
const addTwoNumbers = require('../addTwoNumbers')

describe('addTwoNumbers()', function () {
  it('should add two numbers', function () {

    // ARRANGE
    const x = 5
    const y = 1
    const sum1 = x + y

    // ACT
    const sum2 = addTwoNumbers(x, y)

    // ASSERT
    expect(sum2).to.equal(sum1)
  })
})
