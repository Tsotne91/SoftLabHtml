const {expect} = require('chai');
const abbr = require('../src/7')


describe('exercise 7 test suite', () => {
    it('should return LIDSACAE', () => {
        const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        const result = abbr(text);
        expect(result).to.equal("LIDSACAE");
    });
    it('should return VAR', () => {
        const text = "Video Assistant Referee";
        const result = abbr(text);
        expect(result).to.equal("VAR");
    })
    it('should return null', () => {
        const result = abbr(null);
        expect(result).to.equal(null);
    })
});