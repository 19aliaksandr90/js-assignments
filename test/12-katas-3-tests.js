'use strict';

var assert = require('assert');
var tasks = require('../task/12-katas-3-tasks');
it.optional = require('../extensions/it-optional');

describe('12-katas-3-tasks', function() {

    it.optional('findStringInSnakingPuzzle shoud return true if word occurrs in the specified puzzle', () => {
        var puzzle = [ 
            'ANGULAR',
            'REDNCAE',
            'RFIDTCL',
            'AGNEGSA',
            'YTIRTSP',
        ];
        var puzzleToString = (p) => p.map(x=>'       '+x).join('\n');
        [
            'ANGULAR', 'REACT', 'UNDEFINED', 'RED', 'STRING', 'CLASS', 'ARRAY'
        ].forEach(word => {
            assert(
                tasks.findStringInSnakingPuzzle(puzzle, word),
                `Word "${word}" occurrs in puzzle\n${puzzleToString(puzzle)}`
            );
        });

        [
            'FUNCTION', 'NULL', 'EMBER', 'HOISTING', 'GIT', 'ARENA'
        ].forEach(word => {
            assert(
                !tasks.findStringInSnakingPuzzle(puzzle, word),
                `Word "${word}" does not occurr in puzzle\n${puzzleToString(puzzle)}`
            );
        });
    });


    it.optional('getPermutations should return all possible string permutations', () => {
        [
            {
                chars:    'a',
                expected: [ 'a' ]
            },{
                chars:    'ab',
                expected: [ 'ab', 'ba' ]
            },{
                chars:    'abc',
                expected: [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
            },{
                chars:    'abcd',
                expected: [ 
                    'abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 
                    'bacd', 'badc', 'bdac', 'bdca', 'bcad', 'bcda', 
                    'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 
                    'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'
                ]
            }
        ].forEach(data => {
            assert.deepEqual(
                Array.from(tasks.getPermutations(data.chars)).sort(),
                data.expected,
                `Incorrect permutations of "${data.chars}"`
            );
        });
        assert.equal(
            Array.from(tasks.getPermutations('12345')).length,
            120,
            'Number of 5 chars permutations should be 120.'
        );
    });


    it.optional('getMostProfitFromStockQuotes should return the max profit from stock trading', () => {
        [
            {
                quotes:   [ 1, 2, 3, 4, 5, 6 ],
                expected: 15
            },{
                quotes:   [ 6, 5, 4, 3, 2, 1 ],
                expected: 0
            },{
                quotes:   [ 1, 6, 5, 10, 8, 7 ],
                expected: 18
            },{
                quotes:   [ 31, 312, 3, 35, 33, 3, 44, 123, 126, 2, 4, 1 ],
                expected: 798
            },{
                quotes:   [ 1, 20, 1, 30, 1, 40, 1, 50, 1, 40, 1, 30, 1, 20, 1 ],
                expected: 343
            }
        ].forEach(data => {
            var actual = tasks.getMostProfitFromStockQuotes(data.quotes);
            assert.equal(
                actual,
                data.expected,
                `Most profit for [${data.quotes}] quotes is ${data.expected} but actually ${actual}`
            );
        });
    });


});
