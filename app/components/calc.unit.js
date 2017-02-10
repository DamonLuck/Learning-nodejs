"globals"   : {
    /* MOCHA */
    "after"      : false,
    "afterEach"  : false,
    "before"     : false,
    "beforeEach" : false,
    "describe"   : false,
    "it"         : false
}
'use strict';

const Calc = require('./calc');

describe('Calc', () => {

    describe('Add', () => {

        it('should add two numbers', () => {
            let input1 = 4;
            let input2 = 5;
            let expectedResult = input1 + input2;
            let sut = new Calc();
            
            let result = sut.add(input1,input2);
            
            expect(result).to.have.equal(expectedResult);
        });
        
        
        it('should add two strings', () => {
            let input1 = "Hello ";
            let input2 = "World";
            let expectedResult = input1 + input2;
            let sut = new Calc();
            
            let result = sut.add(input1,input2);
            
            expect(result).to.have.equal(expectedResult);
        });
    });
});