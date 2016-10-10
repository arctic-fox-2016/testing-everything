'use strict'

var chai = require('chai'),
    expect = chai.expect

chai.should()

var App = require('./index.js')

describe("test description", () => {
    it("should return something that we expected for Even", () => {
        App.isEven(2).should.be.true
    })
    it("should return something that we expected for odd", () => {
        App.isOdd(3).should.be.true
    })
})
