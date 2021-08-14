import { hoi } from './script.js'

const assert = chai.assert
const expect = chai.expect

describe("Opdracht 1", function() {
  it('should return true', function() {
    assert.equal(true, true)
  })
  it('should be fantastic' , function() {
    expect(hoi()).to.equal("hoi")
  })
  
})