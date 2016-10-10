' use strict'

var chai = require('chai'),
    expect = chai.expect
var App = require('./index.js')
chai.should()
var num1,num2


describe("Test angka",()=> {
  beforeEach(function(){
    num1 = 1
  })
  it("akan mengecek apakah angka ini ganjil",()=>{
    App.isGanjil(num1).should.be.true
  })
  beforeEach(function(){
    num2 = 2
  })
  it("akan mengecek apakah angka ini genap",()=>{
    App.isGenap(num2).should.be.true
  })
})
