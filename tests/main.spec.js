var expect = require('chai').expect

describe('Main', () => {
  var arr;

  beforeEach(() => {
    arr = [1,2,3]
  })

  it('sould be an array', () => {
    expect(arr).to.be.a('array')
  })

  it('should have a size of 4 when push another value to the array', () =>{
    arr.push(4)

    expect(arr).to.have.lengthOf(4)
  })

  it('should remove the last value when use pop in the array', () => {
    arr.pop()

    expect(arr).to.not.include(3)
  })

  it('should have a size of 2 when use pop in the array', () => {
    arr.pop()

    expect(arr).to.have.lengthOf(2)
  })
})
