'use strict';

var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

chai.should();

var App = require('../index.js')



  describe('test isEven() function', function () {

    it ('should return true', function () {
      App.isEven(4).should.be.true;
    })

    it ('should return false', function () {
      expect(App.isEven(7)).to.be.false;
    })

  })
  describe('test isOdd() function', function () {

    it ('should return true', function () {
      App.isOdd(5).should.be.true;
    })

    it ('should return false', function () {
      expect(App.isOdd(8)).to.be.false;
    })
  })

  describe('test add() function', function () {
    var num
    beforeEach(function () {
      num = 5
    })
      it ('should return 11', function () {
      expect(App.add(num,6)).to.equal(11);
    })

    it ('should return 12', function () {
      assert(App.add(num,7),12);
    })
  })
