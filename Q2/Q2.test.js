const parenthesesValidator = require('./Q2')


describe('parenthesesValidator', () => {
    it('should return valid when passed an empty string', () => {
        expect(parenthesesValidator('')).toEqual('valid')
    });

    it('should return invalid when passed a single parentheses string', () => {
        expect(parenthesesValidator('(')).toEqual('invalid')
    });

    it('should return valid when passed a single balanced pair', () => {
        expect(parenthesesValidator('()')).toEqual('valid')
    });

    it('should return invalid when passed a single unbalanced pair', () => {
        expect(parenthesesValidator(')(')).toEqual('invalid')
    });

    it('should return valid when passed a multiple balanced pairs', () => {
        expect(parenthesesValidator('()()()')).toEqual('valid')
    });

    it('should return valid when passed nested balanced pairs', () => {
        expect(parenthesesValidator('(())')).toEqual('valid')
    });

    it('should return invalid when passed a string of unbalanced pairs', () => {
        expect(parenthesesValidator('(()')).toEqual('invalid')
        expect(parenthesesValidator(')()')).toEqual('invalid')
        expect(parenthesesValidator('())')).toEqual('invalid')
        expect(parenthesesValidator('((())')).toEqual('invalid')
    });

    it('should return valid when passed a string of multiple nested and unnested balanced pairs', () => {
        expect(parenthesesValidator('((()))()')).toEqual('valid')
        expect(parenthesesValidator('(()(()))')).toEqual('valid')
        expect(parenthesesValidator('()(())()')).toEqual('valid')
    });

});