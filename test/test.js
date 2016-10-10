'use strict'

var chai = require('chai'),
    expect = chai.expect

chai.should()

var App = require('../index.js')

describe("test description", () => {
  var num
  beforeEach(function(){
    num = 2
  })

  it("should return something that we expected", () => {
    App.isEven(num).should.be.true
  })
  it("should return something that we expected part 2", () => {
      expect(App.isOdd(num)).to.be.false
  })
})
