const {expect} = require('chai');
const isPrime = require('../src/13');

describe( 'exercise 13 test suite', () =>{
    it('should test for a valid number', () => {
        const result = isPrime(21);
        expect(result).to.equal("2\n3\n5\n7\n11\n13\n17\n19\n");
    });
    it('should test for an invalid number', () => {
        const result = isPrime(13.97);
        expect(result).to.equal('invalid input type');
    });
    it('should test if argument is a string', () => {
        const result = isPrime("text");
        expect(result).to.equal('invalid input type');
    })
})