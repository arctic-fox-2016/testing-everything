let chai = require('chai')
let expect = chai.expect
let helper = require('./index.js')
chai.should()

describe('checking if a number is even', function(){
  let genap
  beforeEach(function(){
    genap = 8
  })
  it('should say even', function(done){
    helper.isEven(genap).should.be.true
    done()
  })
})

describe('checking if a number is odd', function(){
  let ganjil
  beforeEach(function(){
    ganjil = 7
  })
  it('should say odd', function(done){
    helper.isOdd(ganjil).should.be.true
    done()
  })
})
