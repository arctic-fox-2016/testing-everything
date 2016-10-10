'use strict'

var chai = require('chai'),
    expect = chai.expect

chai.should()

var App = require('./index.js')

describe("Checking number for even", () => {
    var even
    beforeEach(function() {
        even = 2
    })
    it("should return something that we expected for Even", () => {
        App.isEven(even).should.be.true
    })

})


describe("Checking number for odd", () => {
    var odd
    beforeEach(function() {
        odd = 3
    })
    it("should return something that we expected for Even", () => {
        App.isOdd(odd).should.be.true
    })

})
