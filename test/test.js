'use strict'

const chai = require('chai')
const expect = chai.expect

chai.should()

var App = require('../index.js')

describe('Test Everything!', () => {
  it('Apakah angka 2 genap?', () => {
    App.isGenap(2).should.be.true
  })

  it('Apakah angka 3 genap?', () => {
    App.isGenap(3).should.be.false
  })


  it('Apakah angka 3 ganjil?', () => {
    expect(App.isGanjil(3)).to.be.true
  })

  it('Apakah angka 2 ganjil?', () => {
    expect(App.isGanjil(2)).to.be.false
  })

})
