const characterCounter = require('./Q1')


describe('characterCounter', () => {

    it('should return an empty object when passed an empty string', () => {
        expect(characterCounter('')).toEqual({})
    });

    it('should return a object with a single key of the corresponding character and value of 1 when passed a single character string', () => {
        expect(characterCounter('a')).toEqual({a:1})
    });

    it('should return a object with a multiple keys of the corresponding characters and value of 1 when passed a multiple character string with no repeating characters', () => {
        expect(characterCounter('ahdy')).toEqual({a:1, h:1, d:1, y:1})
    });

    it('should return a object with keys for all of the unique characters and values that represent their frequencies', () => {
        expect(characterCounter('ahayh')).toEqual({a:2, h:2, y:1})
        expect(characterCounter('jdhjlfdj')).toEqual({j:3, d:2, h:1, f:1, l:1})
    });
    
    
});