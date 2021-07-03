import { expect } from "chai"
import FizzBuzz from '../src/fizzbuzz'

describe('Fizzbuzz', () => {
    it('should return `Fizz` when multiple of 3', () => {
        expect(FizzBuzz(3)).to.be.equal('Fizz')
    });

    it('should return `Buzz` when multiple of 5', () => {
        expect(FizzBuzz(5)).to.be.equal('Buzz')
    });

    it('should return `FizzBuzz` when multiple of 5 and 3', () => {
        expect(FizzBuzz(15)).to.be.equal('FizzBuzz')
    });

    it('should return number when diferrent multiple of 5 or 3', () => {
        expect(FizzBuzz(16)).to.be.equal(16)
    });

    it('should return 0 when 0', () => {
        expect(FizzBuzz(0)).to.be.equal(0)
    });
});
