'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var App = require('../index.js')



  describe('test description', function () {
    it ('should return true', function () {
      App.isEven(4).should.be.true;
    })

    it ('should return false', function () {
      expect(App.isEven(7)).should.be.false;
    })

    it ('should return false', function () {
      App.isOdd(4).should.be.false;
    })

    it ('should return true', function () {
      expect(App.isOdd(7)).should.be.true;
    })
  })
