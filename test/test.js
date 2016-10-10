'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var App = require('../index.js')



  describe('test description', function () {
    it ('should return something that we expected', function () {
      App.isTrue(true).should.be.true;
    })

    it ('should return something that we expected aprt 2', function () {
      expect(App.isFalse(false)).should.be.true;
    })
  })
